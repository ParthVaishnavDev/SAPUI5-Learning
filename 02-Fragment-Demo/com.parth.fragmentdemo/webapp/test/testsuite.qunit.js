sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.parth.fragmentdemo",
		defaults: {
			page: "ui5://test-resources/com/parth/fragmentdemo/Test.qunit.html?testsuite={suite}&test={name}",
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
				only: "com/parth/fragmentdemo/",
				never: "test-resources/com/parth/fragmentdemo/"
			},
			loader: {
				paths: {
					"com/parth/fragmentdemo": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.parth.fragmentdemo"
			},
			"integration/opaTests": {
				title: "Integration tests for com.parth.fragmentdemo"
			}
		}
	};
});
