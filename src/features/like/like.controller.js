import LikeModel from "./like.model.js"



export default class LikeController{
    
    getAllLikes(req,res){
        const likes=LikeModel.getAllLikesOfPost(req.body.postID,req.userID);
        if(likes){
            res.status(200).send(likes);
        }
        else{
            res.status(404).send("likes not found");
        }
    }

    addLike(req,res){
     const like=LikeModel.addLike(req.body.postID,req.userID);
     if(like){
        res.status(201).send(like);
     }
     else{
        res.send("Post is already liked");
     }
    }

    removeLike(req,res){
        const removedLike=LikeModel.removeLike(req.body.postID,req.userID);
        if(removedLike){
            res.status(201).send(removedLike);
        }
        else{
            res.status(404).send("post is already not liked / like not found");
        }
    }


}