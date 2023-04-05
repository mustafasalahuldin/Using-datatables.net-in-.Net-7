import DataTable from 'datatables.net-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-responsive-bs4';

// this one is not working!
export default class app {

    constructor() {
        $(() => {
            $('#example').DataTable({
                fixedHeader: true,
                responsive: true,
                //searchHighlight: true,
                //filter: 'applied',
                fixedColumns: true,
                searching: true,
                paging: false,
                order: [[1, 'asc']],
                columns: [

                    { orderable: false, width: '4.5%', responsivePriority: 0 },
                    { orderable: true, width: '5%', responsivePriority: 0 },
                    { orderable: true, width: '24%', responsivePriority: 0 },
                    { orderable: true, width: '2.5%', responsivePriority: 0 },
                    { orderable: true, width: '10%', responsivePriority: 0 },
                    { orderable: true, width: '9%', responsivePriority: 0 }
                ],
                autoWidth: false
            });
        });
    }
}