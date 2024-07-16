const userModule= require('./userModal');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose')
const app = express();
const port = 5000;
mongoose.connect("mongodb+srv://root:root@cluster0.ccsl9lq.mongodb.net/").then(()=>{
  console.log("db connected");
}).catch(err=>{
  console.log(err);
})
app.use(bodyParser.json());
app.use(cors());

let bots = [];

app.post('/api/bots',async (req, res) => {
  const botData = req.body;
  const chat=new userModule({...botData})
  await chat.save({})
  res.status(201).json({ message: 'Bot created successfully', botData,chat});
});

app.get('/api/bots',async (req, res) => {
  
  const allChat=await userModule.find()
  res.json(allChat);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
