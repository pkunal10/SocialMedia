import {Address} from './address';
export class User {

    _id?: string;
    fName: string;
    lName: string;
    emailId:string;
    mobile:string;
    gender:string;
    address:Address;
    profilePic:string;
    password:string;
    followers:[string];
    following:[string];
    accountCreated:Date;

}
