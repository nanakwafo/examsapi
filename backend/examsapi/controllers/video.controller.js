const videoService = require('../services/video.services')


exports.create =(req,res,next)=>{
  
  videoService.create(req.body,(error,result)=>{
       if(error){
         return next(error);
       }
       return res.status(200).send({
        message: "Success",
        data: result
       });
   });
};

exports.allvideos =(req,res,next)=>{
  videoService.allvideos(req,(error,result)=>{
    if(error){
      return next(error);
    }
    return res.status(200).send({
     message: "Success",
     data: result
    });
})
};
exports.allifmavideos =(req,res,next)=>{
  videoService.allifmavideos(req,(error,result)=>{
    if(error){
      return next(error);
    }
    return res.status(200).send({
     message: "Success",
     data: result
    });
})
};


exports.updatevideo =(req,res,next)=>{

  videoService.updatevideo(req,(error,result)=>{
    if(error){
      return next(error);
    }
    return res.status(200).send({
     message: "Success",
     User_Id: result.id
    });
})
};
