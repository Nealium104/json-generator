const express = require('express');
const router = express.Router();

router.post('/api/endpoint', async (req, res) => {
    try {
        // Log what we received
        console.log('Server received:', req.body);
        
        const fileContent = JSON.stringify(req.body, null, 2);
        console.log('Generated file content:', fileContent);
        
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename="config.json"');
        
        res.send(fileContent);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate configuration' });
    }
});

module.exports = router;