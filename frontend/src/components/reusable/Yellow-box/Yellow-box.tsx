import React from 'react';
import './Yellow-box.scss';

type Props = {
    title: string;
    content: string;
};

const YellowBox: React.FC<Props> = ({ title, content }) => (
    <div className="yellow-box">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

export default YellowBox;
