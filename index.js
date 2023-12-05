const dbSetup = require('./db/db-setup');
const express = require('express');
const User = require('./db/models/user')

dbSetup();

const app = express();
app.use(express.json());

// in prod put this in seperate files

app.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id).withGraphFetched('channel')
    res.status(200).json(user)
    
  } catch (error) {
    return error
  }
});

app.listen(8080, () => console.log('server is working port 8080'));
