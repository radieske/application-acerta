import React from 'react';
import { Header } from './style';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <Header>
            <strong>{props.title}</strong>
        </Header>
    )
}

export default PageHeader;