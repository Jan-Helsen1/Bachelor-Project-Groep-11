import "./Overview.scss";

type Props = {
    reportData: any[];
    setShowReport: (showReport: boolean) => void;
};

const ReportOverview: React.FC<Props> = ({ reportData, setShowReport }: Props) => {
    
    console.log(reportData)

    return (
        <div className="body">
            <div className="body-header">
                <h2>Report</h2>
                <button onClick={() => setShowReport(false)} className="return-button">
                    Go back
                </button>
            </div>
            <div className="report">
                {reportData.map((data: any, index: number) => {
                    return (
                        <div className="page-container" key={index}>
                            <h3>{data.pageUrl}</h3>
                            { data.issues.map((issue: any, index: number) => {
                                return (
                                    <div className="issue-container" key={index}>
                                        <h4>{issue.message}</h4>
                                        <p>{issue.type}</p>
                                        <p>{issue.code}</p>
                                        <samp>{issue.context}</samp>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default ReportOverview;