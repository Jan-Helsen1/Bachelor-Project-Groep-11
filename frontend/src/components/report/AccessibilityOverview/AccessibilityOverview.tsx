import React from "react";
import WcagResult from "../WcagResult/WcagResult";
import "./AccessibilityOverview.scss";
import AccessibilityResult from "../AccessibilityResult/AccessibilityResult";

type Props = {
    data: any;
};

const AccessibilityOverview: React.FC<Props> = ({ data }: Props) => {
    return (
        <div className="accessibility-container">
            <h3 className="accessibility-title">Accessibility</h3>
            <div className="test-container">
                <WcagResult results={data.questionResults.wcagResult} />
                <AccessibilityResult results={data.questionResults.accessibilityResult} />
            </div>
        </div>
    );
};

export default AccessibilityOverview;