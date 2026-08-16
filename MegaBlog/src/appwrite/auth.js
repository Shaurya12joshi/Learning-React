import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client()

    account;
// constructor isliye banaya kyuki object create karte hi client aur account initialize ho jaye, bcz object create karte hi constructor call hota hai
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
    }

    async registerUser({email, password,name}) {
        try {
            const response = await this.account.create(ID.unique(), email, password,name);
            if(response) {
                await this.loginUser({email, password}) 
            }
            else{
                return response
            }
            
        } catch (error) {
            throw error;
        }
    }
    async loginUser({email, password}) {
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const response = await this.account.get();
            return response;
        } catch (error) {
            throw error;
        }
        // if user is not logged in then when we get out of try catch block we will return null
        // catch block is for when we cant even reach the server 
        return null;
    }

    async logoutUser() {
        try {
            const response = await this.account.deleteSession("current");
            if(response) {
                await this.loginUser({email, password})
            }
            else{
                return response
            }
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
