//import conf from "../conf/config";
import conf from "../conf/conf";
import{Client,ID,Databases,Storage,Query}from "appwrite";
const appwriteUrl = conf.appwriteUrl;
const appwriteProjectId = conf.appwriteProjectId;
export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost(title,slug,content,featureImage,status,userId){
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featureImage,
                status,
                userId,
            })
        }catch(error){
            console.log("Appwrite service:: createPost error in conff.js",error);
        }

    }
    async updatePost(slug,title,content,featuredImage,status,userId){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )

        }catch(error){
            console.log("appwrite service :: updatePost::conff.js",error)
        }

        
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;


        }catch(error){
            console.log("appwrite service :: deletePost :: conff.js",error)
            return false
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug 
            )

        }catch(error){
           console.log("appwrite service :: deletePost :: conff.js")
           return false 
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )


        }catch(error){
           console.log("Appwrite service :: getPosts :: conff.js",error)
           return false 
        }
    }
    //file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
            


        }catch(error){
            console.log("apwrite service :: uploadFile :: conff.js",error)
            return false
        }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )

        }catch(error){
            console.log("appwrite service :: deleteFile :: conff.js",error)
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service=new Service()
export default service