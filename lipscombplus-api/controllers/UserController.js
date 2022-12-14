const User = require("../models/UserModel")

module.exports.getLikedMedia = async(req,res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if(user) {
            res.json({ msg: "success", movies: user.likedMedia })
        }else return res.json({msg: "User with given email not found."})
    } catch(err) {
        return res.json({msg : "Error fetching media"})
    }
}

module.exports.addToLikedMedia = async (req, res) => {
    try {
        const { email, data } = req.body; 
        const user = await User.findOne({ email });
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


