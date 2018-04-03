import React from 'react';

import AdvancedColumn from 'src/components/table/advanced_column';
import DeleteButtonContainer from '../../containers/table/delete_button_container';
import VisibleButtonContainer from '../../containers/table/visible_button_container';

export default class AccountColumn extends AdvancedColumn {

    createButtonColumn(content, k) {
        let ret_val;
        switch (content.get('button_type')) {
        case 'delete':
            ret_val = <DeleteButtonContainer key={k+ '_delete_button'} k={k+ '_delete_button_child'} content={content} children={content.get('children')} />;
            break;
        case 'visible':
            ret_val = <VisibleButtonContainer key={k+ '_visible_button'} target_id={content.get('target_id')} visible={content.get('visible')} />;
            break;
        default:
            break;
        }
        return ret_val;
    }

}
