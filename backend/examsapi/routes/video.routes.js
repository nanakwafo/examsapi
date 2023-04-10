
const videoController =require('../controllers/video.controller');


const express =require('express');

const router = express.Router();

//Video

router.post('/create',videoController.create)
router.get('/:userId',videoController.allvideos)
router.put('/:id',videoController.updatevideo)

module.exports = router