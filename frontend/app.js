const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error submitting to backend');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
