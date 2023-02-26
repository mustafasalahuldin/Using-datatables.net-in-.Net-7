import 'datatables.net-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-responsive-bs4';

// this one is not working!
export default class app {

    constructor() {
        $(() => {
            $('#example').DataTable();
        });
    }
}