import React from 'react';
import PropTypes from 'prop-types';
import { List, Map, fromJS } from 'immutable';
import SimpleTable from 'src/components/table/simple_table';

export default class Licenses extends React.Component {

    static propTypes = {
        table: PropTypes.arrayOf(
            PropTypes.objectOf(
                PropTypes.string,
            )
        ),
    }

    thead = List.of(
        List.of(
            Map({ 'isTitle': true, 'isLink': false, 'txt': '取得年月' }),
            Map({ 'isTitle': true, 'isLink': false, 'txt': '資格' }),
        )
    );

    render() {
        const { table } = this.props;
        let tbody = [];
        table.forEach(row => {
            let formatted_row = [];

            // <1カラム目: 取得年月>
            const get_at = row.get_at;
            const get_year = get_at.slice(0, -2);
            const get_month = get_at.slice(-2);
            const get_at_str = get_year + '/' + get_month;
            const get_at_obj = { 'isTitle': false, 'isLink': false, 'txt': get_at_str };
            formatted_row.push(get_at_obj);
            // </1カラム目: 取得年月>

            // <2カラム目: 資格名>
            // TODO: リンク追加可能にする
            const name = row.name;
            const name_obj = { 'isTitle': false, 'isLink': false, 'txt': name };
            formatted_row.push(name_obj);
            // </2カラム目: 資格名>

            // 行を追加
            tbody.push(formatted_row);
        });
        tbody = fromJS(tbody); // to immutable

        return (
            <SimpleTable tid='Licenses' tclass='table table-hover' thead={this.thead} tbody={tbody} />
        );
    }

}
