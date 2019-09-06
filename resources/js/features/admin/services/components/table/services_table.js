import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import ServicesTbody from './services_tbody';

export default class ServicesTable extends AdvancedTable {

    createTbody(tid, content) {
        return <ServicesTbody tid={tid} tbody={content} />;
    }

}
