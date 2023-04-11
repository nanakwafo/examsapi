const categoryService = require('../services/category.services')


exports.create =(req,res,next)=>{
  
   categoryService.create(req.body,(error,result)=>{
       if(error){
         return next(error);
       }
       return res.status(200).send({
        message: "Success",
        data: result
       });
   });
};

exports.allcategory =(req,res,next)=>{
    categoryService.allcategory(req,(error,result)=>{
        if(error){
          return next(error);
        }
        return res.status(200).send({
         message: "Success",
         data: result
        });
    })
};

exports.updatecategory = (req,res,next) =>{
   
    categoryService.updatecategory(req,(error,result)=>{
        if(error){
          return next(error);
        }
        return res.status(200).send({
         message: "Success",
         User_Id: result.id
        });
    })
    
};
