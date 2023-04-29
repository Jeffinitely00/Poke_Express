const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");

const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

app.use((req, res, next) => {
  next();
});

// I.N.D.U.C.E.S
// =============
// Index

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("index", { pokemon });
});

app.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
