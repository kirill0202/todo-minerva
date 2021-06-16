import React from 'react';
import Header from '../Header/index';
import SynonymContainer from '../../containers/SynonymContainer/index';
import FooterContainer from '../../containers/FooterContainer/index';

import './styles.scss';

export default function Content() {
    return (
        <div className="content">
            <Header/>
            <SynonymContainer/>
            <FooterContainer/>
        </div>
    )
}
