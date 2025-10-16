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
    try {
        const { email, company } = req.body;
        console.log('🎉 New waitlist signup:', email, company);
        
        // Send a beautiful success page that matches your theme
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Welcome to PakNexusAI!</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                body {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    background: radial-gradient(circle at 20% 20%, #0d0f1a, #0b0e13);
                    color: #fff;
                    overflow-x: hidden;
                    position: relative;
                }

                .background-lines {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 20% 20%, #0d0f1a, #0b0e13);
                    overflow: hidden;
                    z-index: 0;
                }

                .orb {
                    position: absolute;
                    border-radius: 50%;
                    animation: float 6s ease-in-out infinite;
                }

                .orb-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 51, 234, 0.15), transparent 70%);
                    top: 10%;
                    left: 10%;
                }

                .orb-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent 70%);
                    bottom: 10%;
                    right: 10%;
                    animation-delay: -3s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-20px) scale(1.05); }
                }

                .glass {
                    background: rgba(15, 15, 30, 0.65);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 25px rgba(147, 51, 234, 0.2), 0 0 35px rgba(34, 197, 94, 0.15);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                }

                .neon-hover:hover {
                    box-shadow: 0 0 15px #9333ea, 0 0 25px #22c55e;
                    transition: all 0.4s ease;
                }
            </style>
        </head>

        <body class="text-white font-sans min-h-screen flex items-center justify-center">
            <!-- BACKGROUND WITH ORBS -->
            <div class="background-lines">
                <div class="orb orb-1"></div>
                <div class="orb orb-2"></div>
            </div>

            <!-- Success Card -->
            <div class="glass neon-hover border border-purple-500 max-w-md mx-auto p-8 relative z-10">
                <div class="text-center">
                    <div class="text-6xl mb-6">🚀</div>
                    <h1 class="text-3xl font-bold text-purple-400 mb-4">Welcome to PakNexusAI!</h1>
                    <p class="text-gray-300 mb-4">Thank you <strong class="text-green-400">${email}</strong> for joining our exclusive waitlist!</p>
                    <p class="text-gray-400 mb-2">You're now part of Pakistan's AI revolution</p>
                    <p class="text-gray-400 mb-6">We'll contact you soon with early access and <strong class="text-yellow-400">special founding member benefits</strong></p>
                    
                    <div class="bg-gradient-to-r from-purple-600 to-green-500 p-0.5 rounded-lg mb-6">
                        <div class="bg-gray-900 rounded-lg p-4 text-center">
                            <p class="text-sm text-gray-300">🎯 <strong>What's Next?</strong></p>
                            <p class="text-xs text-gray-400 mt-1">Early access invite + 50% lifetime discount</p>
                        </div>
                    </div>

                    <a href="/" class="inline-block bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        ← Return to Home
                    </a>
                    
                    <p class="text-gray-500 text-sm mt-6">Built with 💚 in Pakistan 🇵🇰</p>
                </div>
            </div>
        </body>
        </html>
        `);
    } catch (error) {
        console.error('Form submission error:', error);
        res.status(500).send('Something went wrong. Please try again.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 PakNexusAI Node.js Server Started!');
    console.log('👉 Go to: http://localhost:3000');
});