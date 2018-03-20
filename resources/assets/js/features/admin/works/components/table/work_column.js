import React from 'react';

import AdvancedColumn from 'src/components/table/advanced_column';
import DeleteButtonContainer from '../../containers/table/delete_button_container';

export default class WorkColumn extends AdvancedColumn {

    createButtonColumn(content, k) {
        return <DeleteButtonContainer key={k+ '_delete_button'} k={k+ '_delete_button_child'} content={content} children={content.get('children')} />;
    }

}
