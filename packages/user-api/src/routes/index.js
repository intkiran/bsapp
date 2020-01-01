import express from "express";
const router = express.Router();

const app = express();
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "USER API Micro services" });
});

module.exports = router;
