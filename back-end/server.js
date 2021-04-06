const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/ponderizer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const scriptureSchema = new mongoose.Schema({
  book: String,
  chapter: Number,
  verse: Number,
  content: String
});

const Scripture = mongoose.model('Scripture', scriptureSchema);

app.get('/api/scriptures', async (req, res) => {
  try {
    let scriptures = await Scripture.find();
    res.send(scriptures);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/scriptures', async (req, res) => {
  let scripture = new Scripture({
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    content: req.body.content
  });

  try {
    await scripture.save();
    res.send(scripture);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/scriptures/:id', async (req, res) => {
  try {
    let scripture = await Scripture.findOne({
      _id: req.params.id
    })
    scripture.title = req.body.book;
    scripture.chapter = req.body.chapter;
    scripture.verse = req.body.verse;
    scripture.content = req.body.content;

    scripture.save();
    res.send(scripture);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/scriptures/:id', async (req, res) => {
  try {
    await Scripture.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));