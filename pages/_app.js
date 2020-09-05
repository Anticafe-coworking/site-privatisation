import App from 'next/app';
import Page from '../components/Page';
import "../components/style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
// import Meta from '../components/Meta';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>

                {/* <Meta /> */}
                {/* <Page> */}
                <Component {...pageProps} />
                {/* </Page> */}

            </div>
        );
    }
}

export default MyApp;