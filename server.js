const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware do obsługi plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint dla strony głównej
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});