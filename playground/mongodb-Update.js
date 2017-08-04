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
      //to update the document
      db.collection('Todos').findOneAndUpdate({ text : "Lakshmi-Pooja"
    },{$set:{
        status:"Completed"
      }},{
        returnOriginal:true
      }).then((result)=>{
      console.log(result);
      });
      db.close();
});
