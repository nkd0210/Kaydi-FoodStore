import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing user order for frontend
const placeOrder  = async(req,res) => {

    const frontend_url = 'http://localhost:5173'

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        //save to database
        await newOrder.save();
        //cleaning the data
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        //stripe
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "USD",
                product_data: {
                    name: item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data: {
                currency: "USD",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount:5*100
            },
            quantity:1
        })
        // tao 1 phien thanh toan
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({
            success: true,
            session_url: session.url
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error placing order"
        })
    }
}

const verifyOrder = async (req,res) => {
    const {orderId, success} = req.body;
    try {
        if(success=="true") {
            await orderModel.findByIdAndUpdate(orderId,{payment: true})
            res.json({
                success: true,
                message: "Order paid successfully"
            })
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success: false,
                message: "Order not paid"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error verifying order"
        })
    }
}

// user orders for frontend
const userOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId});
        res.json({
            success: true,
            data: orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error fetching user orders"
        })
    }
}

// listing orders for admin panel
const listOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({
            success: true,
            data: orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error fetching list user orders"
        })
    }
}


export {placeOrder, verifyOrder, userOrders, listOrders}