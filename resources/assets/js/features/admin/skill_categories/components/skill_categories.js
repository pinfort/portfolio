import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SkillCategoriesTable from './table/skill_categories_table';

export default class SkillCategories extends React.Component {

    static propTypes = {
        categories: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.categories === null || this.props.categories === undefined ) {
            this.props.onRefresh();
        }
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': '名称' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '削除' }),
        )
    );

    render() {
        const { categories } = this.props;
        let display_categories = [];
        if (categories !== undefined && categories !== null) {
            categories.map(row => {
                let formatted_row = [];

                // <1カラム目: 名称>
                const name = row.get('name');
                const name_obj = { type: 'txt', isLink: false, txt: name };
                formatted_row.push(name_obj);
                // </1カラム目: 名称>

                // <2カラム目: 削除ボタン>
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
                // </2カラム目: 削除ボタン>

                display_categories.push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (categories.size === 0) {
                display_categories.push([
                    { type: 'txt', isLink: false, txt: 'None' },
                    { type: 'txt', isLink: false, txt: 'x' },
                ]);
            }
        }

        display_categories = fromJS(display_categories); // to immutable

        return (
            <div className='card m-3'>
                <div className='card-header'>Skills</div>

                <div key={'main_skills'} className='card-body'>
                    <SkillCategoriesTable key={'skill_categories_table_wrap'} tid={'skill_categories_table'} tclass='table table-hover' thead={this.thead} tbody={display_categories} />
                </div>
            </div>
        );
    }

}
