sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast){

    "use strict";

    return Controller.extend(
        "com.parth.myapp.controller.Main", {

        onSave: function(){
            const name = this.byId("NameInput").getValue()
            const age = this.byId("AgeInput").getValue()
            console.log("Name :"+name)
            console.log("Age :"+name)

            MessageToast.show("Details Saved")
        },
        onClear: function(){
            this.byId("NameInput").setValue("")
            this.byId("AgeInput").setValue("")
           

            MessageToast.show("Details Cleared")
        }
        

    });

});