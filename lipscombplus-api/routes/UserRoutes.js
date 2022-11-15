const {addToLikedMedia, getLikedMedia, removeFromLikedMedia} = require("../controllers/UserController")
const router = require("express").Router();

router.post("/add", addToLikedMedia)
router.get("/liked/:email", getLikedMedia)
router.put("/delete", removeFromLikedMedia)

module.exports = router;