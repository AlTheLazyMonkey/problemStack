const path = require("path");
const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.use(function (req, res, next) { //  /?foo=MAGIC_KEY
  const foo = req.query.foo;
  if (foo !== 'MAGIC_KEY') next(Error('You are not worthy for this index!!'));
  else next();
});

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(path.join(__dirname + "/views/gg.txt")));

const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
