import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import SkillColumn from './skill_column';

export default class SkillRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <SkillColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

}
