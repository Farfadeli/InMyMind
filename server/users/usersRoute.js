const express = require("express")
const route = express.Router()
const bcrypt = require("bcrypt")


var mysql = require("mysql")


var con = mysql.createConnection({
    host: "mysql-ndaunac.alwaysdata.net",
    user: "ndaunac",
    password: "067402774Mm@;",
    database: "ndaunac_inminds"
})




route.post("/inscription", async (req, res) => {
    try {
        var { firstName, lastName, email, password } = req.body

        if (
            typeof firstName !== 'string' &&
            typeof lastName !== 'string' &&
            typeof email !== 'string' &&
            typeof password !== 'string'
        ) { throw new Error("Les données ne sont pas au bon format") }

        else {
            let hashedPassword = await bcrypt.hash(password, 12)

            let verificationStatement = `SELECT COUNT(userId) as ct from users where email = '${email}'`

            con.query(verificationStatement, (err, result) => {
                if (err) throw err
                console.log(`result : ${result[0].ct}`)
                if (result[0].ct >= 1) res.json({ success: false, error: "Un utilisateur existe déjà avec ce mail" })
                else {
                    let sql = `INSERT INTO users(firstName, lastName, email, password, role)
                    VALUES('${firstName}', '${lastName}', '${email}', '${hashedPassword}', 'membre')`

                    con.query(sql, (err, result) => {
                        if (err) throw err
                        res.json({ success: true, user: "added", "result": result }).status(200)

                    })
                }
            })
        }
    }
    catch (err) {
        res.json({ success: false, error: err })
    }
})

route.post("/connexion", (req, res) => {
    const { email, password } = req.body


    if (typeof email !== 'string' && typeof password !== 'string') {
        res.json({ success: false, error: "Les données entrée sont incorrect" }).status(400)
    }



    else {
        const sqlStatement = `Select firstName, lastname, email, password from users where email = '${email}'`
        con.query(sqlStatement, async (err, result) => {
            if (err) throw err
            else {
                if (result[0] !== undefined) {
                    let isSame = await bcrypt.compare(password, result[0].password)
                    if (!isSame) {
                        res.json({ success: false, error: "L'email ou le mot passe sont incorrect" }).status(400)
                    }
                    else {
                        res.json({
                            success: true,
                            user: {
                                "first_name": result[0].firstName,
                                "last_name": result[0].lastName,
                                "email ": result[0].email
                            }
                        }).status(200)
                    }
                }
                else{
                    res.json({ success: false, error: "L'email ou le mot passe sont incorrect" }).status(400)
                }

            }
        })
    }

})

module.exports = route