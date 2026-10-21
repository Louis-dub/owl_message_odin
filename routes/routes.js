const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Damn! I've broke my wand again!!",
        user: "Ron Weasley",
        added: new Date(),
    },
    {
        text: "Gryffindor, brace yourselves for defeat",
        user: "Draco Malefoy",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    const newMessage = {
        text: messageText,
        user: messageUser,
        added: new Date(),
    };
    messages.push(newMessage);
    res.redirect("/");
});

module.exports = router;
