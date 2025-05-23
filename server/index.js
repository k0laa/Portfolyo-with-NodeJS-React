const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 5000;

// GitHub webhook secret
const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

app.use(cors());
app.use(express.json());

// GitHub webhook endpoint'i
app.post('/api/webhooks/github', (req, res) => {
    try {
        // GitHub'dan gelen imzayı doğrula
        const signature = req.headers['x-hub-signature-256'];
        if (!signature) {
            return res.status(401).json({ error: 'No signature provided' });
        }

        const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
        const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');

        if (signature !== digest) {
            return res.status(401).json({ error: 'Invalid signature' });
        }

        // Webhook olayını işle
        const event = req.headers['x-github-event'];
        const payload = req.body;

        // Log'u kaydet
        console.log(`GitHub Webhook - Event: ${event}`);
        console.log('Payload:', JSON.stringify(payload, null, 2));

        // Başarılı yanıt döndür
        res.status(200).json({ message: 'Webhook received' });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 