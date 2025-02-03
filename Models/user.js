import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    profilePicture :{
        type: String,
        required: true,
        default : "https://media.licdn.com/dms/image/v2/D5603AQEhBYaldyR_rg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712338616576?e=2147483647&v=beta&t=bziv00oSahHbPawEkrwZwMN3C2ReWGTKRTRhBkro66k"
    }
})

const userModel = mongoose.model("User", userSchema); 

export default userModel;