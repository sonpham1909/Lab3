const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const uri = "mongodb://127.0.0.1:27017/md18306";

const carModel = require('./carModel');

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let cars = await carModel.find();

    console.log(cars);
    res.json(cars);
});
app.get('/add_xe',async (req,res)=>{
    await mongoose.connect(uri);

    let car ={
        ten:'Xe 3',
        gia:44444,
        hang:'Honda',
        
    }

    let kq =await carModel.create(car);
    console.log(kq);

    let cars = await carModel.find();
    res.send(cars);


})