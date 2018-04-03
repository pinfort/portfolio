import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import AccountRow from './account_row';

export default class AccountsTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <AccountRow key={tid + '_body_advanced_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
