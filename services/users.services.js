const User  = require("../models/user.model");
const bcrypt = require("bcryptjs")
const auth = require("../middlewares/auth")




async function login({ username, password }, callback) {
  const user = await User.findOne({ username });

  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateAccessToken(username);
      // call toJSON method applied during model instantiation
      return callback(null, { ...user.toJSON(), token });
    } else {
      return callback({
        message: "Invalid Username/Password!",
      });
    }
  } else {
    return callback({
      message: "Invalid Username/Password!",
    });
  }
}

async function register(params, callback) {
  if (params.username === undefined) {
    console.log(params.username);
    return callback(
      {
        message: "Username Required",
      },
      ""
    );
  }
  if (params.password === undefined) {
    console.log(params.password);
    return callback(
      {
        message: "password Required",
      },
      ""
    );
  }
  if (params.firstname === undefined) {
    console.log(params.firstname);
    return callback(
      {
        message: "firstname Required",
      },
      ""
    );
  }
  if (params.lastname === undefined) {
    console.log(params.lastname);
    return callback(
      {
        message: "lastname Required",
      },
      ""
    );
  }
  if (params.country === undefined) {
    console.log(params.country);
    return callback(
      {
        message: "country Required",
      },
      ""
    );
  }
  if (params.company === undefined) {
    console.log(params.company);
    return callback(
      {
        message: "company Required",
      },
      ""
    );
  }

  const user = new User(params);
  user.save().then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async  function userDetails(id,callback){
  User.findById(id).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}

async  function updateuser(req,callback){
  User.findByIdAndUpdate(req.params.id,req.body).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}

async function allusers(callback){
  User.find({}).then((response) => {
    return callback(null, response);
  }).catch((error) => {
    return callback(error);
  });
}


module.exports = {
  login,
  register,
  allusers,
  userDetails,
  updateuser
};