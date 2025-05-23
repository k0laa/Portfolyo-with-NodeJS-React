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
        // GitHub'dan gelen imzaları doğrula
        const signature256 = req.headers['x-hub-signature-256'];
        const signature = req.headers['x-hub-signature'];

        if (!signature && !signature256) {
            return res.status(401).json({ error: 'No signature provided' });
        }

        const payload = JSON.stringify(req.body);
        let isValid = false;

        // SHA-256 imzasını kontrol et
        if (signature256) {
            const hmac256 = crypto.createHmac('sha256', WEBHOOK_SECRET);
            const digest256 = 'sha256=' + hmac256.update(payload).digest('hex');
            if (signature256 === digest256) {
                isValid = true;
            }
        }

        // SHA-1 imzasını kontrol et
        if (signature) {
            const hmac = crypto.createHmac('sha1', WEBHOOK_SECRET);
            const digest = 'sha1=' + hmac.update(payload).digest('hex');
            if (signature === digest) {
                isValid = true;
            }
        }

        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature' });
        }

        // Webhook olayını işle
        const event = req.headers['x-github-event'];
        const deliveryId = req.headers['x-github-delivery'];
        const installationId = req.headers['x-github-hook-installation-target-id'];

        // Log'u kaydet
        console.log(`GitHub Webhook - Event: ${event}`);
        console.log(`Delivery ID: ${deliveryId}`);
        console.log(`Installation ID: ${installationId}`);
        console.log('Payload:', JSON.stringify(req.body, null, 2));

        // Başarılı yanıt döndür
        res.status(200).json({ 
            message: 'Webhook received',
            event,
            deliveryId,
            installationId
        });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 