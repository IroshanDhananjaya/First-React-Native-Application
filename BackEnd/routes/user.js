const express=require('express')
const router=express.Router();
const mysql=require('mysql');
const db=require('../config/db.config')

const connection=mysql.createConnection(db.database);


connection.connect(function (err){
    if(err){
        console.log(err)
    }else {
        var userTableQuery="CREATE TABLE IF NOT EXISTS user(user_id INT AUTO_INCREMENT,name VARCHAR (255),password VARCHAR(100),email VARCHAR (100),CONSTRAINT PRIMARY KEY (user_id))"
        connection.query(userTableQuery,function (err,result){
            if(result.warningCount === 0){
                console.log("User table created!");
            }
        })
    }
});

router.get('/', (req, res) => {
    var query="SELECT * FROM user"
    connection.query(query,(err,rows)=>{
        res.send(rows);
    })
});


router.post('/',(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;


    var query="INSERT INTO user (name,password,email)VALUES (?,?,?)";

    connection.query(query,[name,password,email],(err)=>{
        if (err) {
            res.send({'error' : 'Error '})
        } else {
            res.send({ 'message': 'User created!' })
        }
    })



});

router.put('/login',(req,res)=>{
    const password=req.body.password;
    const email=req.body.email;

    var query = "SELECT * from user WHERE email=? AND password=?";

    connection.query(query, [email,password], (err, row) => {
        if(err) console.log(err);

        res.send(row)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    var query = "DELETE FROM user WHERE user_id=?";

    connection.query(query, [id], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'User deleted' })
        } else {
            res.send({ 'message': 'User not found' })
        }
    })
})



/*router.get('/login', (req, res) => {
    const password=req.body.password;
    const email=req.body.email;

    var query = "SELECT * from user WHERE email=? AND password=?";

    connection.query(query, [email,password], (err, row) => {
        if(err) console.log(err);

        if(row.length==0){
            res.
        }
        res.send(row)
    })
})*/

router.post("/verify", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    var loginVerify = "SELECT * FROM user WHERE email=? AND password=?";
    connection.query(loginVerify, [email, password], (err, row) => {
        if (err) {
            console.log(err);
        } else {
            if (row.length === 0) {
                res.send({ message: "Incorrect Username or Password" });
            } else {
                res.send({ message: "Login Successfully", user: row[0]});
            }
        }
    });
});

// router.put('/Login',(req,res)=>{
//     const password=req.body.password;
//     const email=req.body.email;
//
//     var query = "SELECT * from user WHERE email=? AND password=?";
//
//     connection.query(query, [email,password], (err, row) => {
//         if(err) console.log(err);
//
//         res.send(row)
//     })
// })



module.exports = router
