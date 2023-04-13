const Video  = require("../models/video.model");

async function create(params, callback) {

  const video = new Video(params);
  video.save().then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async  function allvideos(req,callback){
  Video.find({userId:req.params.userId}).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}
async  function allifmavideos(req,callback){
  Video.find({}).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}

async  function updatevideo(req,callback){
  Video.findByIdAndUpdate(req.params.id,req.body).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}

module.exports = {
  create,
  allvideos,
  updatevideo
};