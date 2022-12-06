const {addToLikedMedia, getLikedMedia} = require("../controllers/UserController")
const router = require("express").Router();

router.post("/add", addToLikedMedia)
router.get("/liked/:email", getLikedMedia)

module.exports = router;