sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.parth.myapp",
		defaults: {
			page: "ui5://test-resources/com/parth/myapp/Test.qunit.html?testsuite={suite}&test={name}",
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
				only: "com/parth/myapp/",
				never: "test-resources/com/parth/myapp/"
			},
			loader: {
				paths: {
					"com/parth/myapp": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.parth.myapp"
			},
			"integration/opaTests": {
				title: "Integration tests for com.parth.myapp"
			}
		}
	};
});
