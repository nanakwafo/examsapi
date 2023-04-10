const userController =require('../controllers/users.controller');
const videoController =require('../controllers/video.controller');
const categoryController =require('../controllers/category.controller');

const express =require('express');

const router = express.Router();


//Users

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/:id',userController.userDetail)
router.get('/',userController.allusers)
router.put('/:id',userController.updateuser)

//VideoCategory

router.post('/create',categoryController.create)
router.get('/',categoryController.allcategory)
router.put('/:id',categoryController.updatecategory)


//Video

router.post('/create',videoController.create)
router.get('/:id/:category',videoController.allvideos)




module.exports = router