import DataTables from 'datatables.net';
// this one is not working
export default class app {

    constructor() {
        $(document).ready(() => {
            $('#example').DataTable();
        });
    }
}