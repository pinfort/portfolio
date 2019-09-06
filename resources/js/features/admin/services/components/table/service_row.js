import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import ServiceColumn from './service_column';

export default class ServiceRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <ServiceColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

}
