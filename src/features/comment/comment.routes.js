import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter=express();
const commentController=new CommentController();
commentRouter.get('/comments',commentController.getAllComments);
commentRouter.post('/newComment',commentController.addNewComment);
commentRouter.put('/updateComment',commentController.updateComment);
commentRouter.delete('/deleteComment',commentController.deleteComment);

export default commentRouter;