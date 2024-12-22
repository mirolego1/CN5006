var express = require("express");
let Books = require("./bookSchema");
let mongodbConnected = require("./MongoDBConnect");
const cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
console.log("BOOKS", Books);
app.get("/", function (req, res) {});


app.get("/about", function (req, res) {
  res.send(
    "mongodb express React and mongoose app,React runs in another application"
  );
  Books.countDocuments()
    .exec()
    .then((count) => {
      console.log("Total documents Count before addition :", count);
    })
    .catch((err) => {
      console.error(err);
    });
});

// show all books
app.get("/allbooks1", async (req, res) => {
  const d = await Books.find();

  return res.json(d);
});

// display book by id
app.get("/getbook/:id", function (req, res) {
  let id = req.params.id;
  Books.findById(id, function (err, book) {
    res.json(book);
  });
});

// add books
app.post("/addbooks", function (req, res) {
  console.log("Ref", req.body);
  let newbook = new Books(req.body);
  console.log("newbook->", newbook);
  newbook
    .save()
    .then((todo) => {
      res.status(200).json({ books: "book added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding newbook failed");
    });
});

// update books
app.post("/updatebook/:id", function (req, res) {
  let id = req.params.id;
  let updatedbook = new Books(req.body);
  console.log("update id", id, "newbook->", updatedbook);
  Books.findByIdAndUpdate(
    id,
    {
      booktitle: updatedbook.booktitle,
      PubYear: updatedbook.PubYear,
      author: updatedbook.author,
      Topic: updatedbook.Topic,
      formate: updatedbook.formate,
    },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ books: "book updatedsuccessfully" });
      }
    }
  );
});

// delete books
app.post("/deleteBook/:id", function (req, res) {
  let id = req.params.id;
  console.log("deleting");
  Books.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("Book Deleted");
    }
  });
});

app.listen(5000, function () {
  console.log("Server is running on the port 5000");
});