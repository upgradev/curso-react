const express = require("express");
const router = express.Router();

router.use("/api/users", require("./UserRotes"));
router.use("/api/photos", require("./PhotoRoutes"));

// test route
router.get("/", (req, res) => {
  res.send("Api work");
});

module.exports = router;
