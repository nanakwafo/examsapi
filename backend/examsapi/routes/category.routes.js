const categoryController =require('../controllers/category.controller');

const express =require('express');

const router = express.Router();

//Category

router.post('/create',categoryController.create)
router.get('/:userId',categoryController.allcategory)
router.put('/:id',categoryController.updatecategory)

module.exports = router