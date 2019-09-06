import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import LicensesTbody from './licenses_tbody';

export default class LicensesTable extends AdvancedTable {

    createTbody(tid, content) {
        return <LicensesTbody tid={tid} tbody={content} />;
    }

}
