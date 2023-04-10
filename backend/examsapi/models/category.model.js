const mongoose = require('mongoose')

const { Schema } = mongoose;



const categorySchema = new Schema({
    userId:{
        type: String,
        required: true,
       },
       
   name:{
      type: String,
      required: true,
   },
   
   date:{
      type: Date,
      default: Date.now()
   }
});

categorySchema.set("toJSON",{
   transform: (document,returnedObject)=> {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
   },
})



const Category = mongoose.model("category",categorySchema);

module.exports = Category;