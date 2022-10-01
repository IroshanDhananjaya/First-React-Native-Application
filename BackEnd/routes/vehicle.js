const express=require('express')
const router=express.Router();
const mysql=require('mysql');
const db=require('../config/db.config')

const connection=mysql.createConnection(db.database);


connection.connect(function (err){
    if(err){
        console.log(err)
    }else {
        var customerTableQuery="CREATE TABLE IF NOT EXISTS vehicle(vehicleNumber VARCHAR (255) PRIMARY KEY ,brand VARCHAR (255),model VARCHAR (255), yearOfManufacture VARCHAR (255),Vehiclecondition VARCHAR (255), transmission VARCHAR (255),fuelType VARCHAR (255),engineCapacity VARCHAR (255),mileage VARCHAR (255),category VARCHAR (255),description VARCHAR (255))"
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
    const description=req.body.description;


    var query="INSERT INTO vehicle (vehicleNumber,brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,description)VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    connection.query(query,[vehicleNumber,brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,description],(err)=>{
        if (err) {
            res.send({ 'message': 'duplicate entry' })
        } else {
            res.send({ 'message': 'Vehicle  created!' })
        }
    })


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
    const description=req.body.description;

    var query = "UPDATE vehicle SET brand=?, model=?, yearOfManufacture=?, Vehiclecondition=?, transmission=?, fuelType=?, engineCapacity=?, mileage=?, category=?, description=? WHERE vehicleNumber=?";
    connection.query(query, [brand,model,yearOfManufacture,Vehiclecondition,transmission,fuelType,engineCapacity,mileage,category,description,vehicleNumber], (err, rows) => {
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
    const vehicleNumber = req.params.vehicleNumber

    var query = "SELECT * from vehicle WHERE vehicleNumber=?";

    connection.query(query, [vehicleNumber], (err, row) => {
        if(err) console.log(err);

        res.send(row)
    })
})


module.exports = router
