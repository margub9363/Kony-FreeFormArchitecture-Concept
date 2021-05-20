//Type your code here

console.log("Inside MVCApp.js file");
alert("Inside MVCApp.js file");
var MVCApp = MVCApp || {};

// **********************
// MVCApp.Form1Controller();
// **********************


MVCApp._controllers = {};

MVCApp._hasControllers = function(name){
  console.log("Inside MVCApp: _hasController");
  if(MVCApp._controllers[name] === undefined || MVCApp._controllers[name] === null ){
    return false;
  }
  else {
    return true;
  }
}

MVCApp._setController = function(name, model) {
  console.log("Inside MVCApp: _setController");
  MVCApp._controllers[name] = model;
  return MVCApp._controllers[name];
}

MVCApp._getController = function(name) {
  console.log("Inside MVCApp: _getController");
  return MVCApp._controllers[name];
}

MVCApp.destroyForm1 = function() {
  // will write the code here
  console.log("Inside MVCApp: destroyForm1");
  Form1.destroy();
  MVCApp._setController("Form1", null)
}

MVCApp.getForm1Controller = function(){
  console.log("Inside MVCApp.js: getForm1Controller Function");
  var name = "Form1";
  if(MVCApp._hasControllers(name) === false){
    return MVCApp._setController(name, new MVCApp.Form1Controller());//here we have to see for Form1 Controller
  }
  else {
    return MVCApp._getController(name);
  }
}