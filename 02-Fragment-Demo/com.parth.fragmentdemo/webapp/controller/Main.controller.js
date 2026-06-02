sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"

   
], function (Controller,
	JSONModel,
	MessageToast,
	MessageBox,
	Fragment,) {

    "use strict";

    return Controller.extend("com.parth.fragmentdemo.controller.Main", {

        onInit: function () {

            const oData = {

                employees: [

                    {
                        id: 101,
                        name: "Parth",
                        city: "Ahmedabad",
                        dept: "IT",
                        salary: 50000
                    },

                    {
                        id: 102,
                        name: "Rahul",
                        city: "Rajula",
                        dept: "HR",
                        salary: 45000
                    }

                ]

            };

            const oModel = new JSONModel(oData);

            this.getView().setModel(oModel);

            this.selectedIndex = null;

        },

        onAdd: function () {

            const id = this.byId("empID").getValue().trim();
            const name = this.byId("empName").getValue().trim();
            const city = this.byId("empCity").getValue().trim();
            const dept = this.byId("empDept").getValue().trim();
            const salary = this.byId("empSalary").getValue().trim();

            if (
                id === "" ||
                name === "" ||
                city === "" ||
                dept === "" ||
                salary === ""
            ) {

                MessageBox.error("Please fill all fields");
                return;

            }

            if (isNaN(id)) {

                MessageBox.error("Employee ID must be numeric");
                return;

            }

            if (isNaN(salary)) {

                MessageBox.error("Salary must be numeric");
                return;

            }

            if (name.length < 3) {

                MessageBox.error("Name must contain minimum 3 characters");
                return;

            }

            const oModel = this.getView().getModel();

            const aEmployees = oModel.getProperty("/employees");

            for (let i = 0; i < aEmployees.length; i++) {

                if (aEmployees[i].id == id) {

                    MessageBox.error("Employee ID already exists");
                    return;

                }

            }

            const oEmployee = {

                id: id,
                name: name,
                city: city,
                dept: dept,
                salary: salary

            };

            aEmployees.push(oEmployee);

            oModel.setProperty("/employees", aEmployees);

            MessageToast.show("Employee Added Successfully");

            this.onClear();

        },

        onClear: function () {

            this.byId("empID").setValue("");
            this.byId("empName").setValue("");
            this.byId("empCity").setValue("");
            this.byId("empDept").setValue("");
            this.byId("empSalary").setValue("");

        },

        onDelete: function (oEvent) {

            MessageBox.confirm(
                "Are you sure you want to delete?",
                {

                    actions: ["Yes", "No"],

                    onClose: function (sAction) {

                        if (sAction === "Yes") {

                            const oModel = this.getView().getModel();

                            const oButton = oEvent.getSource();

                            const oContext = oButton.getBindingContext();

                            const sPath = oContext.getPath();

                            const index = sPath.split("/")[2];

                            const aEmployees = oModel.getProperty("/employees");

                            aEmployees.splice(index, 1);

                            oModel.setProperty("/employees", aEmployees);

                            MessageToast.show("Employee Deleted Successfully");

                        }

                    }.bind(this)

                }
            );

        },

        onEdit: function (oEvent) {

            const oButton = oEvent.getSource();

            const oContext = oButton.getBindingContext();

            const sPath = oContext.getPath();

            const index = sPath.split("/")[2];

            this.selectedIndex = index;

            const oData = oContext.getObject();

            this.byId("empID").setValue(oData.id);
            this.byId("empName").setValue(oData.name);
            this.byId("empCity").setValue(oData.city);
            this.byId("empDept").setValue(oData.dept);
            this.byId("empSalary").setValue(oData.salary);

            MessageToast.show("Employee Data Loaded");

        },

        onUpdate: function () {

            if (this.selectedIndex === null) {

                MessageBox.error("Please select employee to edit");
                return;

            }

            const id = this.byId("empID").getValue().trim();
            const name = this.byId("empName").getValue().trim();
            const city = this.byId("empCity").getValue().trim();
            const dept = this.byId("empDept").getValue().trim();
            const salary = this.byId("empSalary").getValue().trim();

            if (
                id === "" ||
                name === "" ||
                city === "" ||
                dept === "" ||
                salary === ""
            ) {

                MessageBox.error("Please fill all fields");
                return;

            }

            if (isNaN(id)) {

                MessageBox.error("Employee ID must be numeric");
                return;

            }

            if (isNaN(salary)) {

                MessageBox.error("Salary must be numeric");
                return;

            }

            const oModel = this.getView().getModel();

            const aEmployees = oModel.getProperty("/employees");

            aEmployees[this.selectedIndex] = {

                id: id,
                name: name,
                city: city,
                dept: dept,
                salary: salary

            };

            oModel.setProperty("/employees", aEmployees);

            MessageToast.show("Employee Updated Successfully");

            this.selectedIndex = null;

            this.onClear();

        },
        onOpenDialog : function(oEvent){
            const oButton = oEvent.getSource();

            const oContext = oButton.getBindingContext();
            if(!this.oDialog){
                Fragment.load(
                    {
                        name: "com.parth.fragmentdemo.fragments.EditEmployee",
                        controller : this
                    }
                ).then(function (oDialog) {

                    this.oDialog = oDialog;
                    this.getView().addDependent(this.oDialog);
                    this.oDialog.setBindingContext(oContext);
                    this.oDialog.open();
                
                }.bind(this));
            }else{
                this.oDialog.open()
                this.oDialog.setBindingContext(oContext);
            }
        },
        onCloseDialog: function () {

            this.oDialog.close();
        
        }

    });

});