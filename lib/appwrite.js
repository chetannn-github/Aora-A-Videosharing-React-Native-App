import { Account, Avatars, Client, Databases, ID, Storage } from "react-native-appwrite";

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
        let session =  await account.createEmailPasswordSession(email,password);
        return session;
    } catch (error) {
        console.log(error)
        console.log("Error in signin")
    }
  }


  
  