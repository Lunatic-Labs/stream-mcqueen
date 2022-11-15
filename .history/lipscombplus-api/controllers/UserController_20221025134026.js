const User = require("../models/UserModel")

modile.exports.addToLikedMedia = async (req, res) => {
    try {
        const { email, data } = req.body; 
        const user = await User.findOneAndUpdate({ email });
        if(user) {
            const { likedMedia } = req.body;
        }
    } catch(error) {
        return res.json({msg : "Error adding media"})
    }
};