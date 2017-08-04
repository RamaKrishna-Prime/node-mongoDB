var mongooseobj=require('mongoose');

mongooseobj.connect('mongodb://localhost:27017/TodoApp');

//save new record
 // var Todoobj=mongooseobj.model('Todos',{
 //   text: {
 //     type:String,
 //     required:true,
 //     minlength:1,
 //     trim:true
 //   },
 //   status:{
 //     type:String
 //
 //   },
 //   Completed:{
 //     type:Boolean,default:false
 //   },
 //   CompletedAt:{
 //     type: Number,
 //     default:null
 //   }
 // });
 //
 // var newTodoObj=new Todoobj({
 //   text: "This is from Mongoose with Validations",
 //
 //   status:"Complete"
 // });
 //
 // newTodoObj.save().then((doc)=>{
 //   console.log('save data',doc);
 // },(err)=>{
 //   console.log('error in save');
 // });
 var  UserobjModel=mongooseobj.model('users',{
   email:{
     type:String,
     required:true,
     minlength:1,
     trim:true
   }
 });
 var newobjUser=new UserobjModel({
   email:'   rama@gmail.com    '
 });

newobjUser.save().then((doc)=>{
  console.log(doc);
},(er)=>{
  console.log('err');
});
