const crypto = require('crypto');

export default async function handler(req, res) {
    // Sadece POST isteklerini kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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
            const hmac256 = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET);
            const digest256 = 'sha256=' + hmac256.update(payload).digest('hex');
            if (signature256 === digest256) {
                isValid = true;
            }
        }

        // SHA-1 imzasını kontrol et
        if (signature) {
            const hmac = crypto.createHmac('sha1', process.env.GITHUB_WEBHOOK_SECRET);
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
        return res.status(200).json({ 
            message: 'Webhook received',
            event,
            deliveryId,
            installationId
        });
    } catch (error) {
        console.error('Webhook error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
} 