import React, { useState } from "react";
import IssuesPopup from "../IssuesPopup/IssuesPopup";
import "./WcagResult.scss";

type Props = {
    results: any;
};

const WcagResult: React.FC<Props> = ({ results }: Props) => {
    const [showIssues, setShowIssues] = useState<boolean>(false);

    return (
        <div className="wcag-container">
            <div className="header-container">
                <h4 className="test-title">Test WCAG</h4>
                <button onClick={() => setShowIssues(prevValue => !prevValue)} className="issues-button">
                    Show issues
                </button>
            </div>
            <div className="question-container">
                <b>Question: </b>{results.question}
            </div>
            <div className="answer-container">
                <b>Answer: </b>{results.answer}
            </div>
            <div className="explanation-container">
                <div>
                    <b>Explanation: </b> {results.explanation}
                </div> 
                <a href={results.url}>Click here for more info</a>
            </div>
            <div className="score-container">
                <b>Score: </b>{results.score}
            </div>
            { showIssues && (
                <IssuesPopup isOpen={showIssues} hostIssues={results.hostIssues} setIsOpen={setShowIssues} />
            )}
        </div>
    );
};

export default WcagResult;