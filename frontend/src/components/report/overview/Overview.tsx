import HttpsResult from "../HttpsResult/HttpsResult";
import WcagResult from "../WcagResult/WcagResult";
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
                <div className="button-container">
                    <a className="report-button" download="generated-report.pdf" href={fileUrl}>download pdf</a>
                    <button onClick={handleGoBack} className="return-button">
                        Go back
                    </button>
                </div>
            </div>
            <div className="report">
                {reportData.map((data: any, index: number) => {
                    return (
                        <div className="page-container" key={index}>
                            <h3 className="page-title">{data.pageUrl}</h3>
                            <div className="test-container">
                                <WcagResult results={data.questionResults.wcagResult} />
                                <HttpsResult results={data.questionResults.httpsResult} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default ReportOverview;