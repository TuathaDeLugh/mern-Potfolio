import {User} from  "../model/User.js";
import  jwt  from "jsonwebtoken";

export const login = async(req,res)=>{
    try{
       const{email,password} = req.body;
        const user = await User.findOne({email,password});
        if(!user){
            return res.status(400).json({
                success:false,
                message: "Invalid Email or Password",
            })
        }
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
        res.status(200).cookie("token",token,{
            expires:new Date(Date.now()+10*60*1000),
            httpOnly:true,
        }).json({
            success:true,
            message:"LogedIn success",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}



export const logout = async(req,res)=>{
    try{
       
        res.status(200).cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true,
        }).json({
            success:true,
            message:"Loged Out success",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}

export const getUser = async(req,res)=>{
    try{
        const user = await user.findOne().select("-password -email");
        res.status(200).json({
            success: true,
            user,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}

export const myProfile = async(req,res)=>{
    try{
        const user = await user.findByID(req.user._id);
        res.status(200).json({
            success: true,
            user,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}

export const contact = async(req,res)=>{
    try{
        const{name,email,message} = req.body;

        const userMessage = `Hay, I am ${name}. My email is ${email} . My message is ${message}.`;
        await sendMail(userMessage);
        return res.status(200).json({
            success:true,
            message:"your Message Sent Successfully ☆*: .｡. o(≧▽≦)o .｡.:*☆",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}