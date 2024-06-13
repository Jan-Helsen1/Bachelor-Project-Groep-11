import React from "react";
import HttpsResult from "../HttpsResult/HttpsResult";
import "./SecurityOverview.scss";

type Props = {
    data: any;
};

const SecurityOverview: React.FC<Props> = ({ data }: Props) => {
    return (
        <div className="security-container">
            <h3 className="security-title">Security</h3>
            <div className="test-container">
                <HttpsResult results={data.questionResults.httpsResult} />
            </div>
        </div>
    );
};

export default SecurityOverview;