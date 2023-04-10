const Category  = require("../models/category.model");


async function create(params, callback) {
  const category = new Category(params);
  category.save().then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async  function allcategory(req,callback){
  Category.find({userId:req.params.userId}).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}

async  function updatecategory(req,callback){
  Category.findByIdAndUpdate(req.params.id,req.body).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}




module.exports = {
  create,
  allcategory,
  updatecategory
};