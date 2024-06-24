const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app  = express();

const PORT = process.env.PORT || 5000;

// Middleware

app.use(bodyParser.json());

app.use(cors());

app.post('/form', (req, res) => {
const {name,email,message }= req.body;

  console.log('Contact information received:' , { name, email, message });

  res.send('Contact information received');
});
  
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});