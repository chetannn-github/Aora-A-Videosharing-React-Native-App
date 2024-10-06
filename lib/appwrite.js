import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";
import { useDispatch } from "react-redux";
import { addLoggedInUser } from "../redux/userSlice";



export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.chetan.aora",
    projectId: "6700d503001cd9196d0d",
    storageId: "6701019e001e486297bd",

    databaseId: "6700d72c0022fcd76a1c",
    userCollectionId: "6700d7420018e7c4156a",
    videoCollectionId: "6700d7570011bad19317",
  };
  
  const client = new Client();
  
  client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);
  
  const account = new Account(client);
  const storage = new Storage(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);


  //register user 
  export const createUser = async(email,password,username) =>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username

        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);
        await signin(email,password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {   
                accountId: newAccount.$id,
                email,
                username,
                avatar:avatarUrl,
            }

        );
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
  }


  // sign IN 

  export const signin = async(email ,password) => {
 
    try {
        await account.createEmailPasswordSession(email,password);
        
        
    } catch (error) {
        console.log(error)
        console.log("Error in signin")
    }
  }


  // get loggedinUser 

  export const getLoggedInUser = async (dispatch)=>{
    
    try {
        console.log("get logged in function chala")
        let loggedInUser = await account.get();
        if(!loggedInUser){throw Error}
        console.log(loggedInUser)
        loggedInUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId",loggedInUser.$id)]

        );
        if(!loggedInUser){throw Error;}
         console.log(loggedInUser.documents[0])
        dispatch(addLoggedInUser(loggedInUser.documents[0]));
    

    } catch (error) {
        console.log(error);
        console.log("error in checking loggedin info")
        
    }
  }

  
  

  export const logoutUser = async() =>{
    try {
        console.log("logout chala")
        await account.deleteSession("current");

        
    } catch (error) {
        console.log(error)
        
    }
  }