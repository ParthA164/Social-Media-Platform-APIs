export default class CommentModel{
     constructor(id,userID,postID,content){
        this.id=id;
        this.userID=userID;
        this.postID=postID;
        this.content=content;
     }
    
     static getALLCommentsOfSpecificPost(postID,userID){
        const result=comments.filter((c)=>c.postID==postID && c.userID==userID);
        return result;
     }

     static addComment(newComment){
        newComment.id=comments.length+1;
        comments.push(newComment);
        return newComment;
     }
     static updateComment(comment,userID){
        const index=comments.findIndex((c)=>c.id==comment.id && c.postID==comment.postID && c.userID==userID);
        const updatedComment={
            id:comment.id,
            postID:comment.postID,
            userID:userID,
            content:comment.content
        }
        comments[index]=updatedComment;
     }
     static deleteComment(id,postID,userID){
        const index=comments.findIndex((c)=>c.id==id && c.postID==postID && c.userID==userID);
        comments.splice(index,1);
     }
     static getById(id,postID,userID){
        const comment= comments.find((c)=>c.userID==userID && c.id==id && c.postID==postID);
        return comment;

}}


const comments=[
    {
        id:1,
        userID:1,
        postID:1,
        content:"Looking Handsome"
    },
    {
        id:2,
        userID:1,
        postID:1,
        content:"pretty"
    },
    {
        id:3,
        userID:2,
        postID:1,
        content:"Ohh, what a caption"
    }
];