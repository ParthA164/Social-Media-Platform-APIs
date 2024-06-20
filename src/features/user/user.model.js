export default class UserModel{

    constructor(name,email,password,id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.id=id;
    }
    static getALL(){    //this is to get all the existing users
        return users;
    }

   static signup(name,email,password){   //this is to add a new user or signup
    const newUser=new UserModel(name,email,password);
    newUser.id=users.length+1;
    users.push(newUser);
    return newUser;
        
   }
   static signin(email,password){      //this is for confirming user login
        const user=users.find((u)=> u.email==email && u.password==password
        );
        return user;
   }
}

var users=[
    {
        id:1,
        name:"Parth Adlakha",
        email:"parthmris92@gmail.com",
        password:"1234aaAA"
    },
    {
        id:2,
        name:"Jatin Adlakha",
        email:"jatinalpha1@gmail.com",
        password:"15222hdsk"
    }
]