import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import WorksTbody from './works_tbody';

export default class WorksTable extends AdvancedTable {

    createTbody(tid, content) {
        return <WorksTbody tid={tid} tbody={content} />;
    }

}