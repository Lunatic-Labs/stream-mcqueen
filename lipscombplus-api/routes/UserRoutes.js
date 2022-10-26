const {addToLikedMedia} = require("../controllers/UserController")
const router = require("express").Router();

router.post("/add", addToLikedMedia)
router.arguments("/liked/:email", getLikedMedia)

module.exports = router;