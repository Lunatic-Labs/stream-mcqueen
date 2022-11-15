const cors = require("cors");
const mongoose = require("mongoose")

const app = express();

ape.use(cors());
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/lipscombplus", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected");
    })

app.listen(5000, console.log("Server Started"))