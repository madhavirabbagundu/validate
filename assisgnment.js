const mongoose = require ('mongoose')


mongoose.connect("mongodb://localhost:27017/validate").then((connectionResponse) => {
    console.log("Database Connection was successful...")
}).catch(() => {
    console.log("Database Connection was not successful...")
})

// write schema here

const newschema = new mongoose.Schema({
  
    first_name:{type:String,
     required:true,
     validate:{
        validator:(value)=>{
            console.log(value)
            if(value.length > 5){
                return true
            }
                return false;
        },
        message:"something went wrong"
     }
    },
        last_name:{type:String,
            required:true,
            validate:{
                validator:(value)=>{
                    console.log(value)
                    if(value.length > 1){
                        return true;
                    }
                    return false;
                },
                message:"something email is wrong"
            }
        },
        email:{
            type:String,
            required:true
        },
        pincode:{type:Number,
            required:true,
            validate:{
                validator:(value)=>{
               console.log(value)
               if(value >= 6){
                return true;
               }
               return false;
                },
                message : "enter 6 numbers"
            }
        },
        gender:{
            type:String,
            required:true,
            validate :{
                validator:(value)=>{
                    console.log(value)
                    if(value === "male" || value === "female"){
                        return true;
                    }
                    return false;
                },
                message: "enter male or female"
                }
        }
    
    
    
  
})

const register = mongoose.model("register",newschema)


async function test(){
    const data = register({
        first_name:"dfhdskj",
        
        last_name:"rabbagundu",
        email:"madhai@gmail.com",
        pincode:234565,
        gender:"female"
        
    })
    await data.save()
    console.log("successful")
    console.log(data)
}
test()