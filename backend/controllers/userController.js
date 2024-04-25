import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//createToken

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password || email === "" || password === "") {
            return next(errorHandler(400, "All fields are required"));
        }
        const validUser = await userModel.findOne({ email });
        if (!validUser) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }
        const isMatchPassword = await bcrypt.compare(password, validUser.password);
        if (!isMatchPassword) {
            return res.json({
                success: false,
                message: "Invalid password"
            })
        }
        const token = createToken(validUser._id);
        res.json({
            success: true,
            message: "Login successfully",
            token,
            validUser
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
};

// register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // checking if missing any fields
        if (
            !name ||
            !email ||
            !password ||
            name === "" ||
            email === "" ||
            password === ""
        ) {
            return res.json({
                success: false,
                message: "All fields are required",
            });
        }

        // checking existing user
        const existedUser = await userModel.findOne({ email });
        if (existedUser) {
            return res.json({
                success: false,
                message: "User already exists",
            });
        }

        // checking valid email
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email",
            });
        }

        // checking valid password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters",
            })
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({
            success: true,
            message: "User registered successfully",
            token,
            user
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }

};

export { loginUser, registerUser };
