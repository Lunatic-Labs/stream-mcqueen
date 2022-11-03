const { unstable_renderSubtreeIntoContainer } = require("react-dom");
const User = require("../models/UserModel")

modile.exports.addToLikedMedia = async (req, res) => {
    try {
        const { email, data } = req.body; 
        const user = await User.findOneAndUpdate({ email });
        if(user) {
            const { likedMedia } = user;
            const mediaAlreadyLiked = likedMedia.find(({ id })=> (id = data.id));
            if(!mediaAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user.id,
                    {
                        likedMedia:[...user,likedMedia, data]
                    }
                )
            }
        }
    } catch(error) {
        return res.json({msg : "Error adding media"})
    }
};