import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import SkillCategoriesTbody from './skill_categories_tbody';

export default class SkillCategogriesTable extends AdvancedTable {

    createTbody(tid, content) {
        return <SkillCategoriesTbody tid={tid} tbody={content} />;
    }

}