export default class PostModel{
    constructor(id,userID,caption,imageURL){
        this.id=id;
        this.userID=userID;
        this.caption=caption;
        this.imageURL=imageURL;
    }

    static createPost(newPost){     //this is for creating a new post
        newPost.id=posts.length+1;
        posts.push(newPost);
        return newPost;
    }
    static getAllPosts(){
        return posts;
    }
    static getUserPosts(userID){ 
         const result=posts.filter((i)=>i.userID==userID);
         return result;
    }
    static getById(id,userID){
        const post=posts.find((p)=>p.userID==userID && p.id==id);
        return post;
    }
    static updatePost(post,userID){
         const index=posts.findIndex((p)=>p.id==post.id && p.userID==userID);
         const updatedPost={
            id:post.id,
            caption:post.caption,
            imageURL:post.imageURL,
            userID:userID
         }
         posts[index]=updatedPost;
    }
    static deletePost(id,userID){
        const index=posts.findIndex((p)=>p.id==id && p.userID==userID);
        posts.splice(index,1);
    }

}

var posts=[
    {
        id:1,
        userID:1,
        caption:"Out of this world",
        imageURL:""
    },
    {
        id:2,
        userID:1,
        caption:"In a room full of art, you would still stare at me",
        imageURL:""

    },
    {
        id:1,
        userID:2,
        caption:"Remember me? Living litle:)",
        imageURL:"",
    }
]