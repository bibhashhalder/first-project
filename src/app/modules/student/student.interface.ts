import { Schema, model, connect } from 'mongoose';

export type Guardian={
    fatherName:string;
    fatherOcupation:string;
    fatherContactNo:string
    motherName:string
    motherOcupation:string
    motherContactNo:string
    
}

export type UserName ={
    firstName:string;
    middleName:string;
    lastName:string;
} 
export type LocalGuardian ={
    name:string;
    ocupation:string;
    contactNo:string;
    address:string;
}
export type Student= {
    id:string
    name:UserName;
    gender:'male'|'female';
    dateOfBirth?:string
    email: string;
    contactNumber:string;
    emargencyContactNumber:string
    bloodGrup?:'A+'|'A-'| 'B+'|'AB+' ;
    presentAddress:string;
    parmanentAddress:string;
    guardian:Guardian;
    localGuardian:LocalGuardian;
    profileImage?:string;
    isActive: 'active'|'inactive'
 }