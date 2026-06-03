sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.parth.formatterdemo",
		defaults: {
			page: "ui5://test-resources/com/parth/formatterdemo/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/parth/formatterdemo/",
				never: "test-resources/com/parth/formatterdemo/"
			},
			loader: {
				paths: {
					"com/parth/formatterdemo": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.parth.formatterdemo"
			},
			"integration/opaTests": {
				title: "Integration tests for com.parth.formatterdemo"
			}
		}
	};
});
