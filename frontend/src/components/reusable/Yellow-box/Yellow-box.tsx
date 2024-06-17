import React from 'react';
import './Yellow-box.scss';

type Props = {
    title: string;
    content: string;
    url: string;
};

const YellowBox: React.FC<Props> = ({ title, content, url }) => (
    <a className="yellow-box" href={url}>
        <h2>{title}</h2>
        <p>{content}</p>
        <h3>Read more</h3>
    </a>
);

export default YellowBox;
