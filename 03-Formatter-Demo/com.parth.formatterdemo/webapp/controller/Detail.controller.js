sap.ui.define([
	"com/parth/formatterdemo/controller/BaseController",
	"com/parth/formatterdemo/model/formatter",
	"sap/ui/model/json/JSONModel"
], function (BaseController, formatter, JSONModel) {
	"use strict";

	return BaseController.extend("com.parth.formatterdemo.controller.Detail", {

		formatter: formatter,

		onInit: function () {
			this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			const sEmpId = oEvent.getParameter("arguments").empId;
			const aEmployees = this.getOwnerComponent().getModel().getProperty("/employees");
			const oEmployee = aEmployees.find(function (oEmp) {
				return oEmp.id === sEmpId;
			});

			this.setModel(new JSONModel(oEmployee || {}));
		}

	});
});
