import "./HttpsResult.scss";

type Props = {
    results: any;
};

const HttpsResult: React.FC<Props> = ({ results }: Props) => {

    return (
        <div className="https-container">
            <h4 className="test-title">Test HTTPS</h4>
            <div className="question-container">
                <b>Question: </b>{results.question}
            </div>
            <div className="answer-container">
                <b>Answer: </b>{results.answer}
            </div>
            <div className="explanation-container">
                <b>Explanation: </b> {results.explanation}
            </div>
            <div className="score-container">
                <b>Score: </b>{results.score}
            </div>
        </div>
    );
};

export default HttpsResult;