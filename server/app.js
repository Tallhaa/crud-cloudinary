require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");

const cors = require("cors");
const router = require("./routes/router");
const port = 4004;

app.use(cors({
    origin: ["https://crud-cloudinary-client-mzezii3ll-tallhaas-projects.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`server start at port no ${port}`)
})
