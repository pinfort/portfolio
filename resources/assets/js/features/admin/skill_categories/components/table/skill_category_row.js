import React from 'react';

import AdvancedRow from 'src/components/table/advanced_row';
import SkillCategoryColumn from './skill_category_column';

export default class SkillCategoryRow extends AdvancedRow {

    createColumn(col, i, k) {
        return <SkillCategoryColumn key={k + '_advanced_column_' + i} k={k + '_advanced_column_td_' + i} content={col} />;
    }

}
