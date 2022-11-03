const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/lipscombplus", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected");
    })
app.use("/api/user", userRoutes);
app.listen(8000, console.log("Server Started"));