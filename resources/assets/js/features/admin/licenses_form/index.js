import React from 'react';
import apiToken from 'src/components/api_token';

export default class LicensesForm extends React.Component {

    render() {
        return (
            <div className='card m-3'>
                <div className='card-header'>Add License</div>
                <div className='card-body'>
                    <form action='/api/licenses' method='post'>
                        <input type='hidden' name='api_token' value={apiToken} />
                        <div className='form-group row'>
                            <label htmlFor='getDate' className='col-sm-2 col-form-label'>取得年月</label>
                            <div className='col-sm-10'>
                                <input type='number' name='get_at' min={100000} max={999999} className='form-control' id='getDate' placeholder='When? (yyyyMM)' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='getLicense' className='col-sm-2 col-form-label'>資格名</label>
                            <div className='col-sm-10'>
                                <input type='text' name='name' className='form-control' id='getLicense' placeholder='What?' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-primary'>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
