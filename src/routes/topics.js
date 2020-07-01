const express = require("express");
const router = express.Router();
const topicController = require('../controllers/topicController');
const bodyParser = require("body-parser");
const urlBodyParser = bodyParser.urlencoded({ extended: true });

router.get("/topics", topicController.index);

router.get('/topics/new', topicController.new);
router.post("/topics/create", urlBodyParser, topicController.create);
router.get("/topics/:id", urlBodyParser, topicController.show);


module.exports = router;