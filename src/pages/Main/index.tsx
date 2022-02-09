import React from 'react';
import Routes from '../../routes/routes';
import Logo from '../../images/logo.svg';

import { Div, Img } from './style';

function LeadList() {
    return (
        <Div>
            <Img src={Logo}/>
            <Routes />
        </Div>
    )
}

export default LeadList;