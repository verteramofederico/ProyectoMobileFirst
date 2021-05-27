const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname,"./public")));

/* app.listen(3000, () => console.log("Server Start in http://localhost:3000")) */

app.set("port", process.env.PORT ||3000)

app.listen(app.get("port"), () => console.log("server starttt"))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")))
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")))

//prueba
/* kdsk */