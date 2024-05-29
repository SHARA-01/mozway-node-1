import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        // required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
})

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password should be at least 6 chareacter"],
        validate: {
            validator: function (v) {
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(v);
            },
            message: props => 'Password must contain at least one uppercase letter, one lowercase letter, and one special character.',
    },
},
    login_id: {
        type: String,
       
    },
    mobile_number: {
        type: Number,
        required: true,
        min:[6000000000, "Enter a valid Phone Number"],
        max:[9999999999, "Enter a valid Phone Number"]
    },
    address: addressSchema,
  
},
{timestamps: true},
{ Collection: "users" }
)

export const User = mongoose.model('User', UserSchema)