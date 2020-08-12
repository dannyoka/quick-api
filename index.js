const express = require("express");
const app = express();
const people = require("./db");
const path = require("path");
const cors = require("cors");
const Person = require("./models/Person");

const connectDB = require("./config/db");

connectDB();

const PORT = 5000;
// don't forget your body parser!

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// basic home screen request

app.get("/people", async (req, res) => {
  console.log("GET REQUEST");
  let people = await Person.find();
  res.json(people);
  // let names = people.map((person) => {
  //   return person.name;
  // });
  // res.send(names);
});

// form gets submitted, sends post request here

app.post("/people", async (req, res) => {
  const { name } = req.body;

  try {
    let person = await Person.findOne({ name });

    if (person) {
      res.status(400).json({ errors: [{ msg: "Person already exists" }] });
    }

    person = new Person({
      name,
    });

    await person.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

  console.log(req);
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);

  //   console.log("New person added");
  //   const person = new Person({
  //     name: req.body.name,
  //   });

  //   async (params) => {

  //   }

  // res.redirect("/");
});

// get one record

// get all records

//delete a user

app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
});
