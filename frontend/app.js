const express = require('express');
const axios = require('axios');
const qs = require('querystring'); // To encode form data

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', async (req, res) => {
  try {
    const formData = qs.stringify(req.body); // Convert to application/x-www-form-urlencoded

    const response = await axios.post('http://localhost:5000/submit', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.send(response.data);
  } catch (error) {
    console.error("Error submitting to backend:", error.message);
    res.status(500).send('Error submitting to backend');
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
