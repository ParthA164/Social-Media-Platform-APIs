import PostModel from "./post.model.js";

export default class PostController{
    addPost(req,res){
        const { caption, imageURL}=req.body;
        const newPost={
           userID:req.userID,
           caption:caption,
           imageURL:imageURL
        };
        
        const createdPost=PostModel.createPost(newPost);
        res.status(201).send(createdPost);

    }

    getAllposts(req,res){
        const posts=PostModel.getAllPosts();
        if(posts){
         res.status(200).send(posts);
        }
        else{
            res.status(404).send("No post found for the user");
        }
    }
    getAllUserPosts(req,res){
        
        const posts=PostModel.getUserPosts(req.userID);
        if(posts){
            res.status(200).send(posts);
        }
        else{
            res.status(404).send("No posts found for this user");
        }
    }
    getPostById(req,res){
        
        const post=PostModel.getById(req.params.id,req.userID);
        if(!post){
            res.status(404).send("post not found");
        }
        else{
            return res.status(200).send(post);
        }
    }
    updatePost(req,res){
        const post=PostModel.updatePost(req.body,req.userID);
        res.status(201).send("post updated successfully");
    }
    deletePost(req,res){
        
        const postFound=PostModel.getById(req.body.id,req.userID);
        if(!postFound){
          return res.status(401).send("post not found");
        }
        PostModel.deletePost(req.body.id,req.userID);
        const posts=PostModel.getAllPosts();
        console.log(posts);
        return res.status(201).send("post is deleted");
    }


}
