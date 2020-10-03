const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const handlebars = require("express-handlebars");

const connect = require("./conn");
const History = require("./conn/History");

connect();

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "planB",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));

fakeApi = () => {
  return [
    {
      name: "Katarina",
      lane: "midlaner",
    },
    {
      name: "Jayce",
      lane: "toplaner",
    },
    {
      name: "Heimerdinger",
      lane: "toplaner",
    },
    {
      name: "Zed",
      lane: "midlaner",
    },
    {
      name: "Azir",
      lane: "midlaner",
    },
  ];
};

dummy = () => {
  return [
    {
      name: "Ayaz",
    },
  ];
};

data = {
  languages: ["php", "node", "ruby"],
};

app.get("/else", (req, res) => {
  res.render("main", {
    // layout: "index",
    suggestedChamps: fakeApi(),
    dummy: data,
    dummyExists: true,
    listExists: false,
  });
  console.log(data);
});

Names = () => {
  return [
    {
      name: "Simon",
      age: 12,
    },
    {
      name: "howard",
      age: 24,
    },
  ];
};

let names = [
  {
    name: "Simon",
    age: 12,
  },
  {
    name: "howard",
    age: 24,
  },
];

app.get("/", (req, res) => {
  History.find({}, {}, { sort: { created_at: -1 } }, function (err, posts) {
    if (posts) {
      console.log(posts);
      // console.log(posts);
      // const arrayOfPosts = Object.keys(posts);
      // console.log(arrayOfPosts);
      // posts.forEach((element) => {
      //   console.log(element.buyExecuted);
      // // });
      res.render("testing", {
        posts: posts,
      });
      // res.end("End")
    }
  }).lean();

  console.log(Names());
});

app.listen(port, () => console.log(`App listening to port ${port}`));
