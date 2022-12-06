const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    likedMedia: Array,
});

module.exports = mongoose.model("users", userSchema)
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
