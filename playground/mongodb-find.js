//const MongoClientObj=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //syntax for the Destructuriong

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
      //to fetch all values
      // db.collection('Todos').find({_id:new ObjectID('598305d1810492a07d121abd')}).toArray().then((docs)=>{
      //     console.log('getting the data from todos');
      //     console.log(JSON.stringify(docs,undefined,2));
      // },(err)=>{
      //   console.log('error in getting the data',err);
      // });

      db.collection('Todos').find().count().then((count)=>{
          console.log('getting Count data from todos :'+count);
          
      },(err)=>{
        console.log('error in getting the data',err);
      });
      db.close();
});
