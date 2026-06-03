sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
	"use strict";

	return {
		createDeviceModel: function () {
			const oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode(BindingMode.OneWay);
			return oModel;
		},

		createEmployeeModel: function () {
			const oModel = new JSONModel({
				employees: [
					{
						id: "101",
						name: "Parth",
						salary: 50000
					},
					{
						id: "102",
						name: "Rahul",
						salary: 2000
					},
					{
						id: "103",
						name: "Amit",
						salary: 70000
					}
				]
			});
			oModel.setDefaultBindingMode(BindingMode.TwoWay);
			return oModel;
		}
	};
});
