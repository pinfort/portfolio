import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import LicenseColumn from './license_column';

export default class LicenseRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <LicenseColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

}
