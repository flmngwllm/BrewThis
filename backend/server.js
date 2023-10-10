//importing middleware
const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/index");

//registering middleware
app.use(morgan("dev"));
app.use(express.json());

//parse body for http requests from url string
app.use(express.urlencoded({ extended: true }));

//build directory for static resources
app.use(express.static(`${__dirname}/../client/build`));

app.use("/", routes);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/../client/build/index.html`);
});

//setup prot and start port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT : ${PORT}`);
});

module.exports = app;
