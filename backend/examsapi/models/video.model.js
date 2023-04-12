const mongoose = require('mongoose')

const { Schema } = mongoose;



const videoSchema = new Schema({
   categoryId:{
    type: String,
    required: true,
   },
   
   userId:{
    type: String,
    required: true,
   },

   title:{
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

videoSchema.set("toJSON",{
   transform: (document,returnedObject)=> {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
   },
})



const Video = mongoose.model("video",videoSchema);

module.exports = Video;