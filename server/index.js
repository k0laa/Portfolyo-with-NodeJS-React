const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SSE bağlantılarını tutacak array
const clients = new Set();

// SSE endpoint'i
app.get('/events', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Yeni client'ı kaydet
    clients.add(res);

    // Client bağlantısı koptuğunda
    req.on('close', () => {
        clients.delete(res);
    });
});

// Webhook endpoint'i
app.post('/webhook', (req, res) => {
    const event = req.headers['x-github-event'];
    const payload = req.body;

    // Tüm bağlı SSE istemcilerine webhook verisini gönder
    const message = `data: ${JSON.stringify({
        event,
        payload
    })}\n\n`;

    clients.forEach(client => {
        client.write(message);
    });

    res.status(200).json({ message: 'Webhook received' });
});

// Vercel için export
module.exports = app; 