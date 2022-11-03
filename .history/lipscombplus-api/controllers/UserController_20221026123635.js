const User = require("../models/UserModel")

module.exports.addToLikedMedia = async (req, res) => {
    try {
        const { email, data } = req.body; 
        const user = await User.findOneAndUpdate({ email });
        if(user) {
            const { likedMedia } = user;
            const mediaAlreadyLiked = likedMedia.find(({ id })=> (id === data.id));
            if(!mediaAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMedia:[...user.likedMedia, data],
                    },
                    {new:true})
            } else return res.json({msg: "Video has already been added to yout liked list."})
        }else await User.create({email, likedMedia: [data]})
        return res.json({msg : "Video added Successfully"})
    } catch(error) {
        return res.json({msg : "Error adding media"})
    }
};