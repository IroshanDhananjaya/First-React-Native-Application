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

router.put('/',(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;

    var query = "UPDATE user SET name=?, password=?,email=? WHERE user_id=?";
    connection.query(query, [name, password,email, id], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'User updated ' })
        } else {
            res.send({ 'message': 'User not found' })
        }
        // res.send(rows)
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
router.get('/:id', (req, res) => {
    const id = req.params.id

    var query = "SELECT * from user WHERE user_id=?";

    connection.query(query, [id], (err, row) => {
        if(err) console.log(err);

        res.send(row)
    })
})




module.exports = router
