const express = require("express");
const routes = express();

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

routes.get("/", (req, res) => {
    res.render("index");
});

routes.get("/new", (req, res) => {
    res.render("form");
});

routes.post("/new", (req, res) => {
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

export default routes;
