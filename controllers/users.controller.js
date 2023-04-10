const bcryptjs = require('bcryptjs')
const userService = require('../services/users.services')

exports.register =(req,res,next)=>{
   const {password} =req.body;
   const salt =bcryptjs.genSaltSync(10);

   req.body.password =bcryptjs.hashSync(password,salt);

   userService.register(req.body,(error,result)=>{
       if(error){
         return next(error);
       }
       return res.status(200).send({
        message: "Success",
        data: result
       });
   });
};

exports.login =(req,res,next)=>{
    const {username,password} = req.body;

    userService.login({username,password},(error,result) =>{
        if(error){
            return next(error);
          }
          return res.status(200).send({
           message: "Success",
           data: result
          });
    })
};

exports.userDetail = (req,res,next) =>{
   
     userService.userDetails(req.params.id,(error,result)=>{
        if(error){
            return next(error); 
        }
        return res.status(200).send({
            message: "Success",
            data: result
           });
     })
};
exports.allusers = (req,res,next) =>{
    userService.allusers((error,result)=>{
        if(error){
          return next(error);
        }
        return res.status(200).send({
         message: "Success",
         data: result
        });
    })
    
};

exports.updateuser = (req,res,next) =>{
    userService.updateuser(req,(error,result)=>{
        if(error){
          return next(error);
        }
        return res.status(200).send({
         message: "Success",
         User_Id: result.id
        });
    })
    
};