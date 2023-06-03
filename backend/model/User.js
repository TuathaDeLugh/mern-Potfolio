import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
       type: String,
       unique: true,
       required: [true,"Please Enter Email"],},
       password: {
        type:String,
       required: [true,"Please Enter Password"],
        select:false,
    },

       timeline:[
        {
            tite: String,
            discription: String,
            date: String,
        }
       ],

       skills:{
            image1:{
                public_id:String,
                url:String,
            },
            image2:{
                public_id:String,
                url:String,
            },
            image3:{
                public_id:String,
                url:String,
            },
            image4:{
                public_id:String,
                url:String,
            },
            image5:{
                public_id:String,
                url:String,
            },
            image6:{
                public_id:String,
                url:String,
            },
       },
       youtube:[{
            url:String,
            title:String,
            image:{
                public_id:String,
                url:String,
            },
       },],

       projects:[
        {
            url:String,
            title:String,
            image:{
                public_id:String,
                url:String,
            },
            discription:String,
            techstack:String,
       },
       ],

       about:{
        name:String,
        title:String,
        subtitle:String,
        discription:String,
        quote:String,
        avatar:{
            public_id:String,
            url:String, 
        }
       }
});

export const User = mongoose.model("user",userSchema);