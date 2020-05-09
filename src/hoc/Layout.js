import React, { Fragment } from 'react';

import Footer from '../components/Footer/Footer';
// import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';

export default function Layout(props) {

    return (
      
        <Fragment>
            <Header elmclass={props.elmclass.active} />
            {/* <Header id={props.id} /> */}
            {/* <Hero /> */}
            <main id="main">
                {props.children}
            </main>
            <Footer />
        </Fragment>
    );
}