const express = require("express")
const bodyParser = require("body-parser")
const user = require("./users/usersRoute")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get("/data" , (req, res) => {
    res.json({
        "reponse" : "Nicolas"
    })
})

app.use("/user" , user)

app.listen(8000, () => {
    console.log("Server is launched on port : 8000")
})