const express = require("express");

//const config = require("config");

//const port = config.get("port");

const port = 3000; // instead of config

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("pages/registation");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).jsonp("Internal Server Error!");
});

app.listen(process.env.PORT || port, async () => {
    console.log(`Server runing at Port${port}`);
});

