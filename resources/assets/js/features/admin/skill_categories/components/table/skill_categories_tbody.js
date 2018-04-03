import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import SkillCategoryRow from './skill_category_row';

export default class SkillCategoriesTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <SkillCategoryRow key={tid + '_body_advanced_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
