

function usePickDoc(selectType) {
    let handlePicDoc = async() =>{
        try {
            const result = await DocumentPicker.getDocumentAsync({
        
                type:selectType ==="image" ?  ["image/png", "image/jpg"]:["video/mp4", "video/gif"]
              });
          
        
            
        
            if (!result.canceled) {
              setImage(result.assets[0].uri);
              
              
              const { mimeType,fileName, uri,...rest } = result.assets[0];
              const asset = { type: mimeType,name:fileName,uri,...rest};
               
              //upload image
              const promise = await storage.createFile(
                appwriteConfig.storageId,
                ID.unique(),
                asset
                
            );
            console.log(promise);
            const url =await storage.getFileView(appwriteConfig.storageId,promise.$id);
            console.log(url)
        
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }
  return handlePicDoc
}

export default usePickDoc