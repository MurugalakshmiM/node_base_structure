const loaders = require('./loaders');
const express = require('express');
require('dotenv').config()

async function startServer() {

  const app = express();

  await loaders.init({ expressApp: app });

  app.listen(process.env.PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`server is running on port: ${process.env.PORT}`);
  });
}

startServer();