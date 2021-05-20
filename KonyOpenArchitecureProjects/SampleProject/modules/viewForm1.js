//Type your code here
var MVCApp = MVCApp || {};
// alert("Inside viewForm1.js file")
MVCApp.Form1View = (function(){
  function show(){
    console.log("Inside Form1View.js: Show Function");
    Form1.txtbFirstName.text = "Margub";
    Form1.txtbLastName.text = "Rahman";
//     Form1.lblFirstName.text = "Rahman";
//     ********************
//     here i am not getting
//     Form1.show(); 
//     ********************
    
  }
  function bindEvents(){
    console.log("Inside Form1View.js: bindEvents Function");
    //     Form1.postShow
  }
  
  return{
    show: show,
    bindEvents: bindEvents,
  };
});