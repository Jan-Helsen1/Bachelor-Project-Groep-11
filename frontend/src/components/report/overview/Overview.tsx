import Issue from "../Issue/Issue";
import "./Overview.scss";

type Props = {
    reportData: any[];
    fileUrl: string;
    setReportData: (reportData: any) => void;
    setShowReport: (showReport: boolean) => void;
};

const ReportOverview: React.FC<Props> = ({ reportData, fileUrl, setReportData, setShowReport }: Props) => {

    const handleGoBack = () => {
        setShowReport(false);
        setReportData([]);
    };

    return (
        <div className="report-body">
            <div className="body-header">
                <h2 className="title">Report</h2>
                <button onClick={handleGoBack} className="return-button">
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
                <div className="download-pdf">
                    <a download="generated-report.pdf" href={fileUrl}>download pdf</a>
                </div>
            </div>
        </div>
    )
};

export default ReportOverview;