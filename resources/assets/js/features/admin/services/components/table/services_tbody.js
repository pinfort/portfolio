import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import ServiceRow from './service_row';

export default class ServicesTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <ServiceRow key={tid + '_body_advanced_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
