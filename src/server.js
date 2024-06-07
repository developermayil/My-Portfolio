const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const { name,  number, message } = req.body;

  if (!name  || !number || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contactData = await prisma.myDeatails.create({
      data: {
        Name: name,
        MobileNumber: parseInt(number, 10),   
        Message: message,
      },
    });
    res.status(201).json({ message: 'Contact data saved successfully', contactData });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
