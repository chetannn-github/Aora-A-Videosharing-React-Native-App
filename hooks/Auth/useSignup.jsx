import React from 'react'
import { createUser } from '../../lib/appwrite';
import { Alert } from 'react-native';

function useSignup() {

    let handleSignup = async(email, password,username) =>{
        //taking input as email password username 
        if (!email || !password || !username) {
            Alert.alert('Error', 'Please fill in all fields!');
          } else {
            await createUser(email,password,username);
            // router.navigate("/home")
          }
    }
  return 
}

export default useSignup