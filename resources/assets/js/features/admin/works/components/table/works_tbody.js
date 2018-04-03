import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import WorkRow from './work_row';

export default class WorksTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <WorkRow key={tid + '_body_work_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
