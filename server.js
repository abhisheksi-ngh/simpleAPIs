const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Simple API</h1><p>Navigate to <a href="/api/users">Users</a> to see the data.</p>');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
