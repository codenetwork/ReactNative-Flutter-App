const express = require('express');
const app = express()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://corsa:dbpassword@testmongoose.zdabu20.mongodb.net/vocabulary?retryWrites=true&w=majority');
}

// the following schema is not being relied upon, so please
// disregard the foreign parameter - it has no use.
const VocabSchema = new mongoose.Schema({
    english: String,
    foreign: String,
})

const Vocab = mongoose.model("vocabulary", VocabSchema)

mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected.")
})

app.get('/', (req, res) => {
    Vocab.find({})
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.send("Error" + error)
    })
})

app.get('/:word', (req, res) => {
    Vocab.findOne({ english: req.params['word'] })
    .then(data => {
        if(data == null) {
            res.sendStatus(404)
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.send("Error" + error)
    })
})

app.get('/:word/:lang', (req, res) => {
    Vocab.findOne({ english: req.params['word'] })
    .then(data => {
        if(data == null) {
            res.sendStatus(404)
        } else {
            if(typeof(data.toJSON()[req.params['lang']]) === 'undefined') {
                res.sendStatus(404)
            } else {
                res.send(data.toJSON()[req.params['lang']])
            }
        }
    }).catch(err => {
        res.send("Error" + err);
    })
})

app.listen(3000, () => {
    console.log('Server is now listening on port 3000')
})