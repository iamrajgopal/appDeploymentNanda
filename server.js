const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"./day/build")));

mongoose.connect(process.env.MDBconectionSting);

let productsSchema = new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    image:String
});

let products = new mongoose.model("products",productsSchema);

app.get("/get",async (req,res)=>{
    let data = await products.find()
    res.json(data)
    });

let cartItemsSchema = new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    image:String
});

let billitems = new mongoose.model("BillItems",cartItemsSchema);



app.post("/posting", async (req,res)=>{
    let query = req.body.bill.BilledItems
    console.log(query)
   await billitems.insertMany(query)
})    


app.listen("3197",()=>{
    console.log("Listening To port")
})    

