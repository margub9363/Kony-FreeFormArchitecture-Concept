//Type your code here
// This will be main controller
// 1.	Only the main controller invokes functions of the model or the view
// There must be no direct interaction between the main controller and the UI
// The main controller does not directly handle data nor the UI. It relies on the Model and View sub-controllers for that.
// The main controller serves as the entry-point for the frontend business logic and enables us to read the process flow of the form more easily





// The main controllers initialize the forms and provide a load function which effectively does what is needed for displaying the form.



var MVCApp = MVCApp || {}; 
MVCApp.Frm1Controller = (function(){
  var _isInit = false;//makes sure that we initialize only once
  var model = null;//Backend interaction
  var view = null;//UI interaction

  /**
	 * PUBLIC - Init all that the model and view need.
	 */
//   function _init(){
  function init(){
    if (_isInit===true) return;

    //Init the model sub-controller
    model = new MVCApp.Frm1Model();

    //Init the view sub-controller
    try{
    view = new MVCApp.Frm1View();
    }catch(err1)
      {
        alert("Error in CtrlFrm1 in initialising view"+err1)
      }

    //Bind events to UI
//     view.bindEvents();

    _isInit = true;
  }

  /**
	 * PUBLIC - Open the form.
	 */
//   function load(){
    /*
    Init function
Every controller needs to have an init function. This function is usually ONLY called by the controller’s load function. Therefore it can be private in most cases. The only case where init needs to be called from outside the controller is the startup form which was put on the screen without an initialised controller.
*/

    //     _init();
    //     view.show();
    //Calls the model for getting data
    //Passes a view function as callback
    //This callback will update the UI once
    //the data has finished loading
//   }
  //     **************
  load();
  function load(){
    kony.print("ctrlFrm1.load");
    console.log("CTRL_FRM1.js:Load function")
//     alert("CTRL_FRM1.js:Load function")
    init();
    view.show();  //if i hide this the form will be loaded
  }
  //       ************



  //Here we expose the public variables and functions
  return {
    load: load
  }});
