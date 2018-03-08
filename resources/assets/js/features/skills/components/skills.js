import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SimpleTable from 'src/components/table/simple_table';
import SimpleList from 'src/components/list/simple_list';

export default class Skills extends React.Component {

    static propTypes = {
        content: ImmutablePropTypes.list,
        categories: ImmutablePropTypes.map,
    }

    componentWillMount() {
        if ( this.props.content === null || this.props.content === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': '名称' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '程度' }),
        )
    );

    render() {
        const { content } = this.props;
        let categories = {};
        if (content !== undefined && content !== null) {
            content.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('name');
                const name_obj = { 'isTitle': false, 'isLink': false, 'txt': name };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: 程度>
                const status = row.get('status');
                const status_obj = { 'isTitle': false, 'isLink': false, 'txt': status };
                formatted_row.push(status_obj);
                // </2カラム目: 程度>

                // 該当するカテゴリに行を追加
                let category_name = row.get('skills').get('name');
                if (categories[category_name] === undefined || categories[category_name] === null) {
                    categories[category_name] = [];
                }
                categories[category_name].push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (content.size === 0) {
                categories.nothing = [];
                categories.nothing.push([
                    { 'isTitle': false, 'isLink': false, 'txt': 'None' },
                    { 'isTitle': false, 'isLink': false, 'txt': 'None' },
                ]);
            }
        }

        categories = fromJS(categories); // to immutable

        let lists = [];

        categories.entrySeq().forEach(e => (
            lists.push(<SimpleList
                key={'skills_list_' + e[0] + '_wrap'}
                list_id={'skills_list_' + e[0]}
                contents={
                    List([
                        e[0],
                        <SimpleTable key={'skills_' + e[0] + '_table_wrap'} tid={'skills_' + e[0] + '_table'} tclass='table table-hover' thead={this.thead} tbody={e[1]} />,
                    ])
                }
            />)
        ));

        return (
            <div className='card m-3'>
                <div className='card-header'>Skills</div>

                <div key={'main_skills'} className='card-body'>
                    {lists}
                </div>
            </div>
        );
    }

}
