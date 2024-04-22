import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item

const addFood = async(req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        const newFood = await food.save();
        res.status(201).json({
            success: true,
            message: "Add food successfully", 
            data: newFood
        });
    } catch (error) {
        res.status(400)
        .json({
            success: false,
            message: "Add food failed"
        })
    }
}

// all food list

const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({});
        res
            .status(200)
            .json({
                success: true,
                message: "Get all food successfully", 
                data: foods
            })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Get all food failed"
        })
    }
}

// remove food 

const removeFood = async(req,res) => {
    try {
        const food = await foodModel.findById(req.params.foodId);
        fs.unlink(`uploads/${food.image}`,() => {})

        await foodModel.findByIdAndDelete(req.params.foodId);
        res.status(200).json({
            success: true,
            message: "Delete food successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Delete food failed"
        })
    }
}

export {addFood,listFood,removeFood }
