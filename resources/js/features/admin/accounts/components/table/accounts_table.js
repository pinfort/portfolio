import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import AccountsTbody from './accounts_tbody';

export default class AccountsTable extends AdvancedTable {

    createTbody(tid, content) {
        return <AccountsTbody tid={tid} tbody={content} />;
    }

}
