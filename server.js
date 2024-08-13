console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish codlari
app.use(express.startic("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// 2: Session
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routin code
app.get("/", function (req, res) {
    res.end(`<h1>HELLO WORLD</h1>`);
});
app.get("/", function (req, res) {
    res.end(`<h1>siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfull on port: ${PORT}`);
});