import Issue from "../Issue/Issue";
import "./Overview.scss";

type Props = {
    reportData: any[];
    setShowReport: (showReport: boolean) => void;
};

const ReportOverview: React.FC<Props> = ({ reportData, setShowReport }: Props) => {

    return (
        <div className="report-body">
            <div className="body-header">
                <h2 className="title">Report</h2>
                <button onClick={() => setShowReport(false)} className="return-button">
                    Go back
                </button>
            </div>
            <div className="report">
                {reportData.map((data: any, index: number) => {
                    return (
                        <div className="page-container" key={index}>
                            <h3>{data.pageUrl}</h3>
                            <div className="issue-container">
                                { data.issues.map((issue: any, index: number) => (
                                    <Issue key={index} issue={issue} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default ReportOverview;