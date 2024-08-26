import conf from '../conf/conf.js'
import {Client,Account,ID}from "appwrite"
const appwriteUrl = conf.appwriteUrl;
const appwriteProjectId = conf.appwriteProjectId;
export class AuthService{
    client =new Client()
    account;
    constructor(){
        this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return this.login({email,password})
                
            }else{
                return userAccount; 
            }

        }catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)

        }catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{

           
            const user= await this.account.get();
            return user;


        }catch(error){
            console.log("Appwrite service error::getcurrentuser(auth.js)",error)
            if(error.response){
                console.error("Error details",error.response)
            }
            return null;
        }
        
    }
    async logout(){
        try{
            await this.account.deleteSessions('current');
        }catch(error){
            console.log("Appwrite service:: logout:: error",error)
        }
    }
}
const authService=new AuthService()
export default authService