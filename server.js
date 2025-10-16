const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Waitlist form handler
app.post('/join-waitlist', (req, res) => {
    const { email, company } = req.body;
    console.log('🎉 New waitlist signup:', email, company);
    res.send(`
        <script>
            alert('Thank you for joining PakNexusAI waitlist! We will contact you soon.');
            window.location.href = '/';
        </script>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 PakNexusAI Node.js Server Started!');
    console.log('👉 Go to: http://localhost:3000');
});