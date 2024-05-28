import "./Issue.scss";
import React, { useState } from "react";

type Props = {
    issue: any;
};

const Issue: React.FC<Props> = ({ issue }: Props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    const makeStringCapitalized = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="issue">
            <div onClick={() => setShowDetails(prevValue => !prevValue)} className="issue-header">
                <h4 className="title">{makeStringCapitalized(issue.type)}: {issue.message}</h4>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#636363" viewBox="0 0 256 256">
                        <path d="M216.49,127.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,1,1,17-17L128,199l71.51-71.52A12,12,0,0,1,216.49,127.51Zm-97,17a12,12,0,0,0,17,0l80-80a12,12,0,0,0-17-17L128,119,56.49,47.51a12,12,0,0,0-17,17Z"></path>
                    </svg>
                </div>
            </div>
            <div className={`details ${showDetails && "show"}`}>
                <div className="code">{issue.code}</div>
                <samp>{issue.context}</samp>
            </div>
        </div>
    );
};

export default Issue;