import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SkillsTable from './table/skills_table';
import SimpleList from 'src/components/list/simple_list';

export default class Skills extends React.Component {

    static propTypes = {
        skills: ImmutablePropTypes.list,
        categories: ImmutablePropTypes.map,
    }

    componentWillMount() {
        if ( this.props.skills === null || this.props.skills === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': '名称' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '程度' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '削除' }),
        )
    );

    render() {
        const { skills } = this.props;
        let categories = {};
        if (skills !== undefined && skills !== null) {
            skills.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('name');
                const name_obj = { type: 'txt', 'isLink': false, 'txt': name };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: 程度>
                const status = row.get('status');
                const status_obj = { type: 'txt', 'isLink': false, 'txt': status };
                formatted_row.push(status_obj);
                // </2カラム目: 程度>

                // <3カラム目: 削除ボタン>
                const del_btn = {
                    type: 'button',
                    className: 'btn btn-light',
                    children: {
                        type: 'font_awesome',
                        className: 'fa fa-times',
                    },
                    target_id: row.get('id'),
                };
                formatted_row.push(del_btn);
                // </3カラム目: 削除ボタン>

                // 該当するカテゴリに行を追加
                let category_name = row.get('skill_category').get('name');
                if (categories[category_name] === undefined || categories[category_name] === null) {
                    categories[category_name] = [];
                }
                categories[category_name].push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (skills.size === 0) {
                categories.nothing = [];
                categories.nothing.push([
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'x' },
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
                        <SkillsTable key={'skills_' + e[0] + '_table_wrap'} tid={'skills_' + e[0] + '_table'} tclass='table table-hover' thead={this.thead} tbody={e[1]} />,
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
