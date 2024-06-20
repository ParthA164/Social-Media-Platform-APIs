import express from 'express'
import swagger from 'swagger-ui-express'
import cors from 'cors'

import userRouter from './src/features/user/user.routes.js';
import postRouter from './src/features/post/post.routes.js';
import commentRouter from './src/features/comment/comment.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import apiDocs from './swagger.json' assert {type:'json'};
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';
const server=express();

//CORS ploicy configuration
var corsOptions={
    origin:"http://localhost:5500"
}
server.use(cors(corsOptions));
  

server.use(express.json());

server.use('/api-docs',swagger.serve,swagger.setup(apiDocs));

server.use(loggerMiddleware);

//default request handler
server.get('/',(req,res)=>{
    res.send("Welcome to POSTAWAY");
});


server.use('/api/users',userRouter);
server.use('/api/posts',jwtAuth,postRouter);
server.use('/api/comments',jwtAuth,commentRouter);
server.use('/api/likes',jwtAuth,likeRouter);

//error handler middleware
server.use((err,req,res,next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    else{
        res.status(500).send("Server Error, Something went wrong , please try again later");
    }
});

//middleware to handle 404 requests
server.use((req, res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:1600/api-docs")
  });

server.listen(1600,()=>{
    console.log("Server is listening on port 1600");
});
