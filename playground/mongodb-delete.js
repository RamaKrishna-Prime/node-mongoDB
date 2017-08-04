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
      //delete many.
      // db.collection('Todos').deleteMany({text:"Pooja"}).then(
      //   (result)=>{
      //     console.log(result);
      //   }
      // );
      //delete one.
      // db.collection('Todos').deleteOne({text:"Lakshmi-Pooja"}).then(
      //   (result)=>{
      //     console.log(result);
      //   }
      // );
      //find one and delete.
      //this will delete the single object i.e returned as the o/p.
      db.collection('Todos').findOneAndDelete({text:"Some things to do"}).then(
        (result)=>{
          console.log(result);
        }
      );
      db.close();
});
