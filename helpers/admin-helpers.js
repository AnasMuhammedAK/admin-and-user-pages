const db = require("../config/connection");
const collection = require("../config/collections");
const async = require("hbs/lib/async");
const { ObjectId } = require("mongodb");
const { reject } = require("bcrypt/promises");

module.exports={
    getUserDetails:()=>{

        return new Promise(async(resolve,reject)=>{

            let result=await db.get().collection('user').find().toArray()
                       
            resolve(result)

        })
    
        
       
        

    },

    deleteUser:(userId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).deleteOne({_id:ObjectId(userId) }).then((respons)=>{
                resolve(respons)
            })
        })
       
    },

    getOneUserDetails:(userId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).findOne({_id:ObjectId(userId)}).then((user)=>{
                resolve(user)
            })
        })
    },
    updateUser:(userId,userDetailes)=>{
         return new Promise((resolve,reject)=>{
             db.get().collection(collection.USER_COLLECTION).updateOne({_id:ObjectId(userId) },{
                 $set:{
                     fname:userDetailes.fname,
                     email:userDetailes.email
                 }
             }).then((result)=>{
                 resolve(result)
             })
         })
     },

     doAdminLogin:(adminData)=>{
        return new Promise(async (resolve,reject) =>{
            
             
            //  let response = {}
             let admin = await db.get().collection(collection.ADMIN_COLLECTION)
                .findOne({ email: adminData.email });
            console.log(admin)
            
                if(admin){
                    
                    if(adminData.pw==admin.pw){
                        
                        console.log("admin login success");
                        
                       
                        resolve({status:true,admin})
                    }else{
                        console.log("admin login failed");
                        resolve({status:false})
                        
                        
                    }
                }else{
                    console.log('no admin found')
                    resolve({status:false})
                    
                }
        }

        
        
        )}
}



// doLogin: (userData) => {
//     return new Promise(async (resolve, reject) => {
//         let loginStatus = false;
//         let response = {};
//         let user = await db
//             .get()
//             .collection(collection.USER_COLLECTION)
//             .findOne({ email: userData.email });
//         if (user) {

//             bcrypt.compare(userData.pw, user.pw).then((status) => {
//                 if (status) {
//                     console.log("login success");
//                     response.user = user
//                     response.status = true
//                     resolve(response)
//                 } else {
//                     console.log("login failed");
//                     resolve({ status: false })
//                 }
//             });
//         } else {
//             console.log('login failed')
//             resolve({ status: false })
//         }
//     });
// },