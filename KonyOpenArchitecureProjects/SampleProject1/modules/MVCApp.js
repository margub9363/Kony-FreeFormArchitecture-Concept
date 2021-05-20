//Type your code here

// initStartForm function
console.log("Inside MVCApp.js")
MVCApp.Frm1Controller();
alert("Inside MVCApp.js")
function initFrm1() {

}

function init(theme,locale){
  if (_isInit===true) return;

  //Init the model which exposes the backend services to this  controller
  model = new MVCApp.Frm1Model();

  //Enables us to use different UI interactions depending on form factor
  //if (MVCApp.getType()=="tablet") {
  //	view = new MVCApp. TransfersMakeTransferViewTablet();
  //} else {
  view = new MVCApp.Frm1View();
  //}

  //Bind events to UI`
  view.bindEvents();

  _isInit = true;
}


// Destroy function for the form
MVCApp.destroyFrm1 = function () { 
  formFrm1.destroy(); 
  MVCApp._setController("Frm1",null);
};

// 2. Create the getter
MVCApp.getFrm1Controller = function () { 
  var name="Frm1"; 
  if (MVCApp._hasController(name)===false) { 
    return MVCApp._setController(name,new 
                                 MVCApp.Frm1Controller())
  } else { return MVCApp._getController(name);}
};

