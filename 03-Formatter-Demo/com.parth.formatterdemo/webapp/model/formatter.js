sap.ui.define([], function () {
    "use strict";

    return {

        salaryStatus: function (salary) {

            if (salary >= 40000) {
                return "High Salary";
            }

            return "Low Salary";

        },
        formatedStatus: function (salary) {
            if (salary === undefined || salary === null) {
                return "";
            }

            return "$" + salary.toLocaleString();
        }

    };

});