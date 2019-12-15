import React from 'react';

export default class Privacy extends React.Component {
    render() {
        return (
            <div className='m-3 text-center'>
                <h3>訪問者のプライバシーに関する情報</h3>
                <article>
                    <h4>Google Analytics に関する情報</h4>
                    <p>
                        このサイトでは、より良い情報掲載のためにGoogle Analyticsを使用しています。Google Analyticsでは、Cookieを使用しています。
                        CookieはGoogleがあなたのブラウザに対して書き込み、読み込みする場合があります。その結果、Cookieによって得られる複数の情報は、自動的にGoogleに送信されます。
                        また、同時に端末のIPアドレスや、閲覧中のページのURLなども送信されます。これらの情報はGoogleによって様々な用途に利用されます。
                        利用用途は、あなたのGoogleアカウントでの設定内容により変わります。詳しい内容は、<a href="https://policies.google.com/technologies/partner-sites">Google による説明</a>
                        をご覧ください。
                    </p>

                    <h4>セキュリティに関する情報</h4>
                    <p>当サイトでは、セキュリティ向上のため複数のCookieをあなたのブラウザに設定したり、それを読み取ったりします。</p>

                    <p>当サイトを閲覧することをもって以上のことに同意されたとみなします。同意されない場合にはページを閉じてください。</p>
                </article>
            </div>
        );
    }
}
