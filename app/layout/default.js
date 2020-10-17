import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    ThemeProvider,
} from './../components';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';
import './../styles/plugins/plugins.css';

import {
    RoutedNavbars,
} from './../routes';

const favIcons = [
    { rel: 'icon', type: 'image/x-icon', href: require('../public/favicon.ico') },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('../public/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../public/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../public/favicon-16x16.png') }
];

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <ThemeProvider initialStyle="light" initialColor="primary">
                <Layout sidebarSlim favIcons={ favIcons }>
                    { /* --------- Navbar ----------- */ }
                    <Layout.Navbar>
                        <RoutedNavbars />
                    </Layout.Navbar>

                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        { children }
                    </Layout.Content>
                </Layout>
            </ThemeProvider>
        );
    }
}

export default AppLayout;

//TODO This is the layout file