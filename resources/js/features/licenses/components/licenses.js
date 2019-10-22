import React from 'react';
import { List, Map, fromJS } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SimpleTable from 'src/components/table/simple_table';

export default class Licenses extends React.Component {

    static propTypes = {
        licenses: ImmutablePropTypes.list,
    }

    componentWillMount() {
        if ( this.props.licenses === null || this.props.licenses === undefined ) {
            this.props.onRefresh();
        }
    }

    render() {
        const { licenses } = this.props;
        let tbody = [];
        if (licenses === undefined || licenses === null) {
            tbody.push([]);
        } else {
            licenses.map(row => {
                let formatted_row = [];

                // <1カラム目: 取得年月>
                const get_at = row.get('get_at');
                const get_year = get_at.slice(0, -2);
                const get_month = get_at.slice(-2);
                const get_at_str = get_year + '/' + get_month;
                const get_at_obj = { 'isTitle': false, 'isLink': false, 'txt': get_at_str };
                formatted_row.push(get_at_obj);
                // </1カラム目: 取得年月>

                // <2カラム目: 資格名>
                // TODO: リンク追加可能にする
                const name = row.get('name');
                const name_obj = { 'isTitle': false, 'isLink': false, 'txt': name };
                formatted_row.push(name_obj);
                // </2カラム目: 資格名>

                // 行を追加
                tbody.push(formatted_row);
            });

            // 何もない時に表示するやつ
            if (licenses.size === 0) {
                tbody.push([
                    { 'isTitle': false, 'isLink': false, 'txt': '*/*' },
                    { 'isTitle': false, 'isLink': false, 'txt': 'None' },
                ]);
            }
        }

        tbody = fromJS(tbody); // to immutable

        return (
            <div className='m-3'>
                <h3 className='text-center'>Licenses</h3>
                <SimpleTable tid='licenses_table' tclass='table' tbody={tbody} />
            </div>
        );
    }

}
