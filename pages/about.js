/**
 * next-tutorial -> about
 * Created by Tim Raveling on 3/24/20
 * Copyright 2020 Firemark Foundry LLC
 */

import React, { Component } from 'react';
import Layout from '../components/Layout';

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <p>About is working!</p>
            </Layout>
        );
    }
}

export default AboutPage;
