import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import AccountColumn from './account_column';

export default class AccountRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <AccountColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

}
