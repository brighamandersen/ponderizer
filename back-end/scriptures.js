const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const scriptureSchema = new mongoose.Schema({
  book: String,
  chapter: Number,
  verse: Number,
  content: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

const Scripture = mongoose.model('Scripture', scriptureSchema);

// Get all photos for current user
router.get('/', validUser, async (req, res) => {
  try {
    let scriptures = await Scripture.find({
      user: req.user
    }).sort({
      created: -1   // Most recent first
    }).populate('user');
    res.send(scriptures);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', validUser, async (req, res) => {
  let scripture = new Scripture({
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    content: req.body.content,
    user: req.user
  });

  try {
    await scripture.save();
    res.send(scripture);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', validUser, async (req, res) => {
  try {
    let scripture = await Scripture.findOne({
      _id: req.params.id
    })
    scripture.title = req.body.book;
    scripture.chapter = req.body.chapter;
    scripture.verse = req.body.verse;
    scripture.content = req.body.content;
    scripture.user = req.user;

    scripture.save();
    res.send(scripture);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', validUser, async (req, res) => {
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

module.exports = {
  model: Scripture,
  routes: router,
}