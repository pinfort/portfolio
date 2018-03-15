import React from 'react';

import AdvancedTbody from 'src/components/table/advanced_tbody';
import SkillRow from './skill_row';

export default class SkillsTbody extends AdvancedTbody {

    createRow(row, i, tid) {
        return <SkillRow key={tid + '_body_advanced_row' + i} k={tid + '_body'} row={row} row_number={i} />;
    }

}
