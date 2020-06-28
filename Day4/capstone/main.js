"use strict";

const port = 3000,
    express = require('express'),
    app = express();

app.get("/", (req, res) => {
        console.log(req.params);
        console.log(req.body);
        console.log(req.url);
        console.log(req.query);
        res.send("Hello Universial");
    })
    .listen(port, () => {
        console.log(`Server started at port number : ${port}`);
    });