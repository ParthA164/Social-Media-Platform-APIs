import PostModel from "../post/post.model.js";
import CommentModel from "./comment.model.js";


export default class CommentController{
    getAllComments(req,res){
        const comments=CommentModel.getALLCommentsOfSpecificPost(req.body.postID,req.userID);
        if(comments){
            res.status(200).send(comments);
            console.log(comments);
        }
        else{
           res.status(404).send("No comments found for this post");
        }
    }

    addNewComment(req,res){
        const {postID, content}=req.body;
        const newComment={
            postID:postID,
            userID:req.userID,
            content:content,
        };
        const result=CommentModel.addComment(newComment);
        res.status(201).send(newComment);
    }
    updateComment(req,res){
        const comment=CommentModel.updateComment(req.body,req.userID);
        res.status(201).send("comment updated successfully");
    }

    getById(req,res){
        const comment=CommentModel.getById(req.body.id,req.body.postID,req.userID);
        if(!comment){
          return  res.status(401).send("comment not found");
        }
        else{
           return res.status(200).send(comment);
        }
    }

    deleteComment(req,res){
        const commentFound=CommentModel.getById(req.body.id,req.body.postID,req.userID);
        if(!commentFound){
            return res.status(401).send("No such comment found");
        }
        CommentModel.deleteComment(req.body.id,req.body.postID,req.userID);
        const comments=CommentModel.getALLCommentsOfSpecificPost(req.body.postID,req.userID);
        console.log(comments);
        return res.status(201).send("comment deleted successfully");

    }

}