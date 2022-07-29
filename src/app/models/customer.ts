import { Address } from "./address";
import {Income } from "./income"


export class Customer {

    public custId: number;
    public title: string;
    public Name: string;
    public mobileNo: string;
    public emailId: string;
    public aadhaarNo: string;
    public panCardNo: string;
    public dateOfBirth: Date;
    public address: Address = new Address();
    public income: Income=new Income();
    public accountType:string;
    public aadharPic: string;
    public panPic : string;
}
