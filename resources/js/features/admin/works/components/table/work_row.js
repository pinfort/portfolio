import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import WorkColumn from './work_column';

export default class WorkRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <WorkColumn key={k + '_work_column_' + i} k={k + '_work_column_td_' + i} content={col} />;
    }

}
