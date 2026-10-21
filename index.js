const express = require("express");
const path = require("path");
const router = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running : http://localhost:${process.env.PORT || PORT}`);
});
