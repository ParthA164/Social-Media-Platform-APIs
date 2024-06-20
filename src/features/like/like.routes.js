import express from 'express';
import LikeController from './like.controller.js';


const likeRouter=express();
const likeController=new LikeController();


likeRouter.get('/AllLikes',likeController.getAllLikes);
likeRouter.post('/addLike',likeController.addLike);
likeRouter.delete('/removeLike',likeController.removeLike);

export default likeRouter;