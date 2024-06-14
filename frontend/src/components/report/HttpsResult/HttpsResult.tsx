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
                <div>
                    <b>Explanation: </b> {results.explanation}
                </div> 
                <a href={results.url}>Click here for more info</a>
            </div>
        </div>
    );
};

export default HttpsResult;