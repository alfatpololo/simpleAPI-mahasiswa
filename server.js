const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOptions = {
    origin: "*"
};

// register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to Database

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`failed to connect ${err.message}`);
        process.exit();
    })
// Routes call
require("./app/routes/mahasiswa.routes")(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));