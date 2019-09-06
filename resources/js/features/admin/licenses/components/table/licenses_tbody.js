import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import LicenseRow from './license_row';

export default class LicensesTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <LicenseRow key={tid + '_body_advanced_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
