import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleLink from 'src/components/simple_link';

export default class WorkDetail extends React.Component {

    static propTypes = {
        work: ImmutablePropTypes.map,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.onRefresh(id);
    }

    render() {
        const { work } = this.props;
        let data = {};
        if (work !== undefined && work !== null) {

            // <画像>
            let image_url = work.get('image_url');
            let image_alt = 'None';
            if (image_url === '') {
                image_url = 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"286"%20height%3D"180"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_1624ce18f10%20text%20{%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20}%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_1624ce18f10"><rect%20width%3D"286"%20height%3D"180"%20fill%3D"%23777"><%2Frect><g><%2Fg><%2Fg><%2Fsvg>';
                image_alt = work.get('name');
            }
            data.image_alt = image_alt;
            data.image_url = image_url;
            // </画像>

            // <名称>
            const name = work.get('name');
            data.name = name;
            // </名称>

            // <説明>
            const description = work.get('description');
            data.description = description;
            // </説明>

            // <URL>
            const url = work.get('url');
            let url_obj;
            if (url === '') {
                url_obj = { type: 'link', link: '#', link_disable: true, txt: '非公開' };
                url_obj = <a class='btn btn-primary' href='#' role='button' disabled>非公開</a>;
            } else {
                url_obj = <a class='btn btn-primary' href={url} role='button'>Go the site</a>;
            }
            data.url_obj = url_obj;
            // </URL>

            // <タグ>
            data.tags = [];
            const tags = work.get('tags');
            tags.forEach((tag, i) => {
                data.tags.push(<SimpleLink key={'mytest_work_tags_' + i} className='badge badge-primary mx-1' to={'/tags/' + tag.get('id')} content={tag.get('name')} />);
            });
            // </タグ>
        }

        return (
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='card m-3'>
                        <div className='card-header'>{data.name || 'None'}</div>

                        <div key='main_work' className='card-body'>
                            <div className='work-detail-img text-center mb-4'>
                                <img src={data.image_url} alt={data.image_alt} />
                            </div>
                            <p key='mytest_work_description'>{data.description || 'None'}</p>
                            <p key='my_work_link'>
                                {data.url_obj}
                            </p>
                            <p key='mytest_work_tags'>
                                <span className='border pb-1'>
                                    {data.tags || 'None'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
