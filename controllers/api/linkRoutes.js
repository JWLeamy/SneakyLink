//route to create links
//route to create links
const router = require("express").Router();
const Link = require("../../models/link");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const allLinks = await Link.findAll({
      where: { username: req.session.username },
    });
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
// router.post("/", async (req, res) => {
//   console.log(req.session.username);
//   console.log(`req body: ${req.body}`);
//   var body = req.body;
//   for (let x in req.body) {
//     console.log(x);
//     body[x].username = req.session.username;
//   }
//   console.log(JSON.stringify(body));


//   try {
//     const link = await Link.bulkCreate(body);

//     res.status(200).json({ message: "link created" });
//   } catch (err) {
//     res.json(err).status(500);
//   }
// });


router.post("/createlink", async (req, res) => {
  if (req.body.length == 0){
    res.status(200).json({ message: "no new links to create!" });
    return;
  };

  const linkArray = req.body;
  const linkUrl = linkArray.map((linkElement) => {
    let linkObj = {
      username: req.session.username,
      type: linkElement.type,
      url: linkElement.url,
    };
    return linkObj;
  });
  try {
    const link = await Link.bulkCreate(linkUrl);

    res.status(200).json({ message: "link saved" });
  } catch (err) {
    res.json(err).status(500);
  }
});


router.put("/updatelink", async (req, res) => {
  if (req.body.length == 0){
    res.status(200).json({ message: "no links to update!" });
    return;
  };
  try {
    for (let i=0; i < req.body.length; i++){
      let currentLink = req.body[i];
      let link = await Link.update({ url: currentLink.url }, {
        where: {
          type: currentLink.type
        }
      });
    }
  res.status(200).json({ message: "links updated" });
} catch (err) {
  res.json(err).status(500);
}
});

router.delete('/deletelink', async (req, res) => {
  try {
    const deletelink = await Link.destroy({
      where: {
        url: req.body.url,
        type: req.body.type,
      },
    });
    if (!deletelink) {
      res.status(404).json({ message: 'Unable to delete link!' });
      return;
    }
    res.status(200).json(deletelink);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
