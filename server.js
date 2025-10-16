const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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
    
    // Send a beautiful success page
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to PakNexusAI!</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-purple-600 to-green-500 min-h-screen flex items-center justify-center">
            <div class="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl">
                <div class="text-6xl mb-4">🎉</div>
                <h1 class="text-2xl font-bold text-gray-800 mb-4">Welcome to PakNexusAI!</h1>
                <p class="text-gray-600 mb-6">Thank you <strong>${email}</strong> for joining our exclusive waitlist!</p>
                <p class="text-gray-500 mb-6">We'll contact you soon with early access and special founding member benefits.</p>
                <a href="/" class="bg-gradient-to-r from-purple-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                    ← Back to Home
                </a>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 PakNexusAI Node.js Server Started!');
    console.log('👉 Go to: http://localhost:3000');
});