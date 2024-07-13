const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/userModel.js');
const dotenv=require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (user) {
            res.json({ name: user.name, content: user.content });
        } else {
            res.json({ name: req.body.name, content: '' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
});
app.post("/savee", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (user) {
            const updatedUser = await User.findOneAndUpdate(
                { name: req.body.name },
                { content: req.body.content },
                { new: true, runValidators: true });
                res.json({ name: req.body.name, content: 'User saved successfully.' });
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            res.json({ name: req.body.name, content: 'User saved successfully.' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
});

mongoose.connect("mongodb+srv://jaikishore1046:Jai@934643@cluster0.lzknt2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database"))
    .catch((error) => console.error("Error connecting to database:", error));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
