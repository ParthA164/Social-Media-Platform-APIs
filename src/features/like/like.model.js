export default class LikeModel{
   constructor(id,postID,userID){
    this.id=id;
    this.postID=postID,
    this.userID=userID
   }
   static getAllLikesOfPost(postID,userID){
    const like=likes.filter((l)=>l.postID==postID && l.userID==userID);
    return like;
   }


   static findLike(postID,userID){
    const result=likes.find((l)=>l.postID==postID && l.userID==userID);
    return result;
   }


   static addLike(postID,userID){
    if(!this.findLike(postID,userID)){
    const newLike={
        postID:postID,
        userID:userID
    };
    newLike.id=likes.length+1;
    likes.push(newLike);
    return newLike;
    }
    else{
      return;  
    }
   }


   static removeLike(postID,userID){
    if(this.findLike(postID,userID)){
        const index=likes.findIndex((l)=>l.userID==userID && l.postID==postID);
        const like=likes[index];
        likes.splice(index,1);
        return like;
    }
    else{
        return;
    }
   }



}

var likes=[
    {
        id:1,
        postID:1,
        userID:1,
    },
    {
        id:2,
        postID:1,
        userID:1
    },
    {
       id:1,
       postID:1,
       userID:2 
    }
]