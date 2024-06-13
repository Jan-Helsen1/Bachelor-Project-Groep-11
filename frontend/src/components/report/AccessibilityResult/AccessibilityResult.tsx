import React from "react";
import "./AccessibilityResult.scss";

type Props = {
    results: any;
};

const AccessibilityResult: React.FC<Props> = ({ results }: Props) => {
    return (
        <div className="result-container">
            <h4 className="test-title">Test WCAG</h4>
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
        </div>
    );
};

export default AccessibilityResult;