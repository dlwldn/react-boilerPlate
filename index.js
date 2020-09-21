const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:1234@cluster0.acnzi.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("MongoDB connected..."))
  .catch((err)=> console.log(err))



app.get('/', (req,res) => res.send("Hello"))

app.listen(port, ()=> console.log(`app listening on port ${port}`));