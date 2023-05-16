const mongoose = require('mongoose');
const express = require('express');
const app = express();
const category = require('./category')

const run = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
  }

  // Define your routes here

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}...`));

  let thing = new category({
    name: "hi there"
  })
  
  await thing.save()

  let result = await category.find()
  
  console.log(result)



};

run();