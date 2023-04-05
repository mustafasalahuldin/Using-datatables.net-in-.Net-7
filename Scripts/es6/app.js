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
            $('#example').DataTable({
                //fixedHeader: true,
                //responsive: true,
                //searchHighlight: true,
                //filter: 'applied',
                //fixedColumns: true,
                searching: true,
                paging: false,
                order: [[1, 'asc']],
                columns: [
                    { orderable: false, width: '4.5%' },
                    { orderable: true, width: '5%' },
                    { orderable: true, width: '24%' },
                    { orderable: true, width: '2.5%' },
                    { orderable: true, width: '10%' },
                    { orderable: true, width: '9%' }
                ],
                autoWidth: false
            });
        });
    }
    return app;
}());
exports.default = app;
//# sourceMappingURL=app.js.map