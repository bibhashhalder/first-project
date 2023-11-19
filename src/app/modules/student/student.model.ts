import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

const studentSchema =new Schema <Student>({
    id:{type:String},
    name:{
        firstName:{
            type:String,
            required:true
        },
        middleName:{
            type:String,
        },
        lastName:{
            type:String,
            required:true
        }
    },
    gender:['male','female'],
    dateOfBirth:{type:String},
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    emargencyContactNumber:{
        type:String,
        required:true
    },
    bloodGrup: ['A+','A-','AB+','B+'],
    presentAddress:{
        type:String,
        required:true
    },
    parmanentAddress:{
        type:String,
        required:true
    }


})