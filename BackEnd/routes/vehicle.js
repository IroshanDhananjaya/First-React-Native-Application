const express=require('express')
const router=express.Router();
const mysql=require('mysql');
const db=require('../config/db.config')

const connection=mysql.createConnection(db.database);


connection.connect(function (err){
    if(err){
        console.log(err)
    }else {
        var customerTableQuery="CREATE TABLE IF NOT EXISTS vehicle(vehicleNumber VARCHAR (255) PRIMARY KEY ,brand VARCHAR (255),model VARCHAR (255), yearOfManufacture VARCHAR (255),Vehiclecondition VARCHAR (255), transmission VARCHAR (255),fuelType VARCHAR (255),engineCapacity VARCHAR (255),mileage VARCHAR (255),category VARCHAR (255), imge1 VARCHAR (255), imge2 VARCHAR (255), imge3 VARCHAR (255),imge4 VARCHAR (255),userID INT, constraint foreign key(userID) references user(user_id) ON DELETE CASCADE ON UPDATE CASCADE)"
        connection.query(customerTableQuery,function (err,result){
            if(result.warningCount === 0){
                console.log("Vehicle table created!");
            }
        })
    }
});

router.get('/', (req, res) => {
    var query="SELECT * FROM vehicle"
    connection.query(query,(err,rows)=>{
        res.send(rows);
    })
});

router.post('/',(req,res)=>{

    console.log(req)
  /*  const vehicleNumber=req.body.dataSet.vehicleNumber;
    const brand=req.body.dataSet.brand;
    const model=req.body.dataSet.model;
    const yearOfManufacture=req.body.dataSet.yearOfManufacture;
    const Vehiclecondition=req.body.dataSet.Vehiclecondition;
    const transmission=req.body.dataSet.transmission;
    const fuelType=req.body.dataSet.fuelType;
    const engineCapacity=req.body.dataSet.engineCapacity;
    const mileage=req.body.dataSet.mileage;
    const category=req.body.dataSet.category;
    const userId=req.body.dataSet.userId;



    var query="INSERT INTO vehicle (vehicleNumber,brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,userID) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    connection.query(query,[vehicleNumber,brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,userId],(err)=>{
        if (err) {
            res.send({ 'message': 'duplicate entry' })
        } else {
            res.send({ 'message': 'Vehicle  created !' })
        }
    })*/


});

router.put('/',(req,res)=>{
    const vehicleNumber=req.body.vehicleNumber;
    const brand=req.body.brand;
    const model=req.body.model;
    const yearOfManufacture=req.body.yearOfManufacture;
    const Vehiclecondition=req.body.Vehiclecondition;
    const transmission=req.body.transmission;
    const fuelType=req.body.fuelType;
    const engineCapacity=req.body.engineCapacity;
    const mileage=req.body.mileage;
    const category=req.body.category;


    var query = "UPDATE vehicle SET brand=?, model=?, yearOfManufacture=?, Vehiclecondition=?, transmission=?, fuelType=?, engineCapacity=?, mileage=?, category=? WHERE vehicleNumber=?";
    connection.query(query, [brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,vehicleNumber], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'vehicle updated' })
        } else {
            res.send({ 'message': 'vehicle not found' })
        }
        // res.send(rows)
    })
})

router.delete('/:id', (req, res) => {
    const vehicleNumber = req.params.vehicleNumber

    var query = "DELETE FROM vehicle WHERE vehicleNumber=?";

    connection.query(query, [vehicleNumber], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'vehicle deleted' })
        } else {
            res.send({ 'message': 'vehicle not found' })
        }
    })
})
router.get('/:id', (req, res) => {
    const userId = req.params.id;


    var query = "SELECT * from vehicle WHERE userID=?";

    connection.query(query, [userId], (err, row) => {
        if(err) console.log(err);

        res.send(row)
    })
})


module.exports = router
