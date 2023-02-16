//route to create links
const router = require("express").Router();
const Link = require("../../models/link");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const allLinks = await Link.findAll({
      where: { username: req.session.username },
    });
    console.log(allLinks)
    res.status(200).json(allLinks);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     console.log(req.session.username);
//     const link = await Link.findAll({
//       where: { username: req.session.username },
//     });
//     console.log(link);
//     res.status(400).json(link);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

//need to implement a bulk creation method

router.post("/", async (req, res) => {
  console.log(req.session.username);
  console.log(`req body: ${req.body}`);
  var body = req.body;
  for (let x in req.body) {
    console.log(x);
    body[x].username = req.session.username;
  }
  console.log(JSON.stringify(body));


  try {
    const link = await Link.bulkCreate(body);


    res.status(200).json({ message: "link created" });
  } catch (err) {
    res.json(err).status(500);
  }
});


router.post("/savelink", async (req, res) => {
//   console.log(req.body.links);
  const linkArray = req.body;
  console.log(1, 'test')
  const linkUrl = linkArray.map((linkElement) => {
    let linkObj = {
      username: req.session.username,
      type: linkElement.type,
      url: linkElement.url,
    };
    console.log(2, 'test')
    return linkObj;
  });
  try {
    const link = await Link.bulkCreate(linkUrl);

    res.status(200).json({ message: "link saved" });
  } catch (err) {
    res.json(err).status(500);
  }
});

module.exports = router;
