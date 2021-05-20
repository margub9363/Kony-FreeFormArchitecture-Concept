//Type your code here

var MVCApp= MVCApp || {};

MVCApp.Form1Controller = (function(){
  console.log("inside CtrlForm1Controller:");
  var _isInit = false;

  function init(){
    console.log("inside CtrlForm1:Init Function");
    if(_isInit === true)
      return;
//     *****************
    model=new MVCApp.Form1Model();
//     ***************
    view=new MVCApp.Form1View();

    //     right now we are commenting bind event function , later on we will uncomment it
        view.bindEvents();
    _isInit = true;
  }
  //   ***************
//   load();
  //   ***************
  function load(){
    console.log("inside CtrlForm1:load Function");
    init();
    view.show();
    console.log("Exitting Load Fnction");
  }

  return{
//     ****************
//     init:init,
//     ****************
    load:load
  }
})