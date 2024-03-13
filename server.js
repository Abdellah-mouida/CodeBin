let express = require("express");
let app = express();
let mongoose = require("mongoose");
const Code = require("./module/Code");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/CodeBin");

app.get("/", (req, res) => {
  let code = `                        Welcome to CodeBin !

Here, simplicity meets functionality, making sharing and storing snippets a breeze.

Why Choose CodeBin?

1. Paste code or notes effortlessly.
2. Your snippets remain yours.
3. Customize presentation and lifespan.
4. Enjoy fast, reliable performance.

                           How It Works:

1. Paste text.
2. Adjust settings.
3. Share your link.
4. Access snippets anytime.

                           Get Started:

Whether you're a developer, student, or need to exchange snippets, CodeBin simplifies your life.

                           Happy sharing!
`;

  res.render("display-code", { code });
});

app.get("/new", (req, res) => {
  res.render("new");
});
app.post("/save", async (req, res) => {
  let { code } = req.body;
  try {
    let newCode = await Code.create({ code });
    res.redirect(`/${newCode.id}`);
  } catch (err) {
    res.render("new", { code });
  }
});
app.get("/edit/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let doc = await Code.findById(id);
    res.render("new", { code: doc.code });
  } catch (err) {
    res.redirect(`/${id}`);
  }
});
app.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let doc = await Code.findById(id);
    res.render("display-code", { code: doc.code, id });
  } catch (err) {
    res.redirect("/");
  }
});
app.listen(5000);
