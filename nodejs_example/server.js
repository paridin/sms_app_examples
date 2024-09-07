require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/send-sms', async (req, res) => {
  try {
    // Step 1: Get Access Token
    const tokenResponse = await axios.post(process.env.IDP_ENDPOINT, {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });
    const accessToken = tokenResponse.data.access_token;

    // Step 2: Get App ID
    const appResponse = await axios.get(`${process.env.HUB_ENDPOINT}/my/apps`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const appId = appResponse.data.data[0].id;

    // Step 3: Send SMS
    const smsResponse = await axios.post(`${process.env.HUB_ENDPOINT}/sms/transactional`, {
      app_id: appId,
      to: `+52${req.body.msisdn}`,
      body: req.body.body
    }, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    res.render('index', { message: 'SMS sent successfully!' });
  } catch (error) {
    console.error(error);
    res.render('index', { message: 'Error sending SMS. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});