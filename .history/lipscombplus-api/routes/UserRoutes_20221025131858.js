const {addToLikedMedia} = require("..controllers/UserController")
const router = require("express").Router();

router.post("/add", addToLikedMedia)

modile.export = router;