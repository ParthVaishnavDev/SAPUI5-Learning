sap.ui.define([
	"com/parth/formatterdemo/controller/BaseController",
	"com/parth/formatterdemo/model/formatter",
	"sap/m/SelectDialog",
	"sap/m/StandardListItem",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, formatter, SelectDialog, StandardListItem, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("com.parth.formatterdemo.controller.Main", {

		formatter: formatter,

		onInput: function () {
			if (!this._oDialog) {
				this._oDialog = new SelectDialog({
					title: "Select Department",
					items: [
						new StandardListItem({ title: "HR" }),
						new StandardListItem({ title: "IT" })
					],
					confirm: function (oEvent) {
						const sDept = oEvent.getParameter("selectedItem").getTitle();
						this.byId("int").setValue(sDept);
					}.bind(this)
				});
			}

			this._oDialog.open();
		},

		onSearch: function (oEvent) {
			const sValue = oEvent.getParameter("newValue");
			const oBinding = this.byId("empTable").getBinding("items");
			const aFilters = [];

			if (sValue) {
				aFilters.push(new Filter("name", FilterOperator.Contains, sValue));
			}

			oBinding.filter(aFilters);
		},

		onView: function (oEvent) {
			const oEmployee = oEvent.getSource().getBindingContext().getObject();

			this.getRouter().navTo("detail", {
				empId: oEmployee.id
			});
		}

	});
});

