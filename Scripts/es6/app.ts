import 'datatables.net-bs4';
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
                searchHighlight: true,
                filter: 'applied',
                fixedColumns: true,
                searching: true,
                paging: false,
                order: [[1, 'asc']],
                columns: [

                    { orderable: false, width: '4.5%' },
                    { orderable: true, width: '5%' },
                    { orderable: true, width: '24%' },
                    { orderable: true, width: '2.5%' },
                    { orderable: true, width: '10%' },
                    { orderable: true, width: '9%' },
                    { orderable: false, width: '5%' },
                    { orderable: false, width: '25%' },
                    { orderable: true, width: '10%' },
                    { orderable: true, width: '5%' }

                ],
                autoWidth: false
            });
        });
    }
}