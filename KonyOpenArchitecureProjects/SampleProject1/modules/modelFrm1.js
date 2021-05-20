//Type your code here
// this sub controller for data retrieval/submission and interaction with services
// 3.	Only the model interacts with data storage, service calls, including data transformation.
// There must be no direct interaction between the model and the view

// The model controllers are, together with the MVCApp.js file, the only files in the whole project which handle service calls and/or data storage.
// They are the only places where 
// 1.	data is read, written or stored
// 2.	data is parsed in order to fit the UI’s needs

// The model sub-controller:
// never updates the UI directly
// never calls the view’s functions directly
// Make sure that you pass the view’s functions as callback functions to the Model in order to execute them when the data operation has finished.

var MVCApp = MVCApp || {};//makes sure that the namespace is available
MVCApp.Frm1Model = (function(){
  alert("modelFrm1.js:")
	/**
	 * PUBLIC 
 * – Makes a service call through a global function
 * – Passes as callback a private function
 * - Binds the received callback (that usually updates the view)
 *   as callback to the data-digesting callback
	 */
  	
 
  	/**
	 * PRIVATE – Format the data and execute the callback
	 */
  	
});
