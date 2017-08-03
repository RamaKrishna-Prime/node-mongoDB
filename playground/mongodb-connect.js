//const MongoClientObj=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //syntax for the Destructuriong
var obj=new ObjectID();

console.log(obj);



//object Destructuriong
const user={name:"Rama",address:"Potp"};
var {name}=user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return  console.log('Unabale to connect to MongoDB');
  }
      console.log('Connnected to MongoDB');

      //To Insert into the Todos collection.
      // db.collection('Todos').insertOne({
      //   text:"Some things to do",
      //   status:"Completed"
      // },(err,res)=>{
      //   if(err)
      //   {
      //     return  console.log('Unabale to Insert to Todos to MongoDB');
      //   }
      //     console.log(JSON.stringify(res.ops,undefined,2));
      // });
      // //To Insert into the Users collection.
      // db.collection('Users').insertOne({
      //   name:"Rama",
      //   age:20,
      //   location:"Hyderabad"
      // },(err,resp)=>{
      //   if(err)
      //   {console.log('error in creating Users');}
      //   console.log(JSON.stringify(resp.ops,undefined,2));
      //
      // });
  db.close();
});
