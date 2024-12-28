const {Client} = require('pg')

const con=new Client({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password: "Sam123",
    database:"firstdb"

})

con.connect()
.then(() => console.log("Connected"))
.catch((err) => console.log('Error', err))

con.query("Select * from firstTable", (err,res) => {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
})