const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy vendor for demonstration
const vendor = {
    email: 'stephcrwn@gmail.com',
    password: 'Steph123'
};

app.post('/api/vendor/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    if (email === vendor.email && password === vendor.password) {
        // In production, return a JWT or session token here
        return res.status(200).json({ message: 'Login successful.' });
    } else {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});