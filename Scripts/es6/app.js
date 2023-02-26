"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("datatables.net-bs4");
//import 'datatables.net-fixedcolumns-bs4';
require("datatables.net-fixedheader-bs4");
require("datatables.net-responsive-bs4");
// this one is not working!
var app = /** @class */ (function () {
    function app() {
        $(function () {
            $.noConflict();
            $('#example').DataTable();
        });
    }
    return app;
}());
exports.default = app;
//# sourceMappingURL=app.js.map