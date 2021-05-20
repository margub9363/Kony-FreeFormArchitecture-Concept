//Type your code here
//This is  sub controller for all interactions with the UI
// 2.	Only the view is allowed to use names of the form or widgets in the code in order to update the UI layer.	
// There must be no direct interaction between the model and the view
// MVCApp.js and this is the only files in the whole project which have knowledge of the forms’ and widgets’ names.
// They are the only places where 
// 1.	actions are bound to the event placeholders (e.g. onPreShow, onClick, etc.)
// 2.	updates are made to the UI (e.g. after loading additional data)

// The view sub-controller attaches all widget-triggered functions through its bindEvents function which is called by the main controller.


var MVCApp = MVCApp || {};//makes sure that the namespace is available
MVCApp.Frm1View = (function(){
  alert("ViewFrm1.js:");
  console.log("ViewFrm1.js:")

  /**
	 * PUBLIC - Open the Home form
	 */
  function show(){
    formFrm1.show();
  }

  /**
	 * PUBLIC – Update the UI after data has been loaded
	 * This function can be called from the main controller
	 */


  /**
	 * PRIVATE - Here we define all animation code.
	 * This function can only be called from the view
	 */

  function bindEvents(){
    //Attaching view-functions directly to the UI is
    //only ok if no data is involved => mostly animations

    //Functions that involve saving or loading data or #######################
    //which navigate somewhere else need to go either
    //through this form’s controller or point to another
    //form’s controller
  }

  //Here we expose the public variables and functions
  return{
    show: show,
    bindEvents: bindEvents,
  };
});

