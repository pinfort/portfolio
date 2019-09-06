import React from 'react';

import AdvancedTable from 'src/components/table/advanced_table';
import SkillsTbody from './skills_tbody';

export default class SkillsTable extends AdvancedTable {

    createTbody(tid, content) {
        return <SkillsTbody tid={tid} tbody={content} />;
    }

}