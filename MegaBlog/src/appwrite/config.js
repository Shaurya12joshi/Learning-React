import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";



export class Service{
    client = new Client()
    databases;
    storage;
    Query;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.Query = Query;
    }

    async createPost({title, slug, content, featuredImage, status, authorId}) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                slug,
                content,
                featuredImage,
                status,
                authorId
            }); 
        } catch (error) { 
            throw error;
        }
    }

    async updatePost({title, slug, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                slug,
                content,
                featuredImage,
                status,
            }); 
        } catch (error) { 
            throw error;
        }
    }
    async deletePost({slug}) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            return false;
        }
    }
    async getPost({slug}) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        } catch (error) {
            return false;
        }
    }   
    async listPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries); 
        } catch (error) {
            return false;
        }
    }
    // OR WE CAN WRITE LIKE THIS 
    /**
     * 
     * 
     * async listPosts() {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, [
                Query.equal('status', 'active')
            ]); 
        } catch (error) {
            return false;
        }
    }
     */
    async uploadFile({file}) {
        try {
            await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file);
            return true;
        } catch (error) {
            throw error;
        }
    }
    async deleteFile({fileId}) {
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            throw error;
        }

    }
    getFilePreview({fileId}) {
        try {
            return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
        } catch (error) {
            throw error;
        }
    }
    
}

const service = new Service();

export default service;