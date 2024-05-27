import "./App.scss";
import { useState } from "react";
import AccessibilityOverview from "./components/accessibility/overview/Overview";
import Header from "./components/reusable/Header/Header";
import ReportOverview from "./components/report/overview/Overview";

function App() {
	const [showReport, setShowReport] = useState<boolean>(false);
	const [reportData, setReportData] = useState<any>();

	if (reportData) console.log(reportData);

  	return (
		<>
			<Header />
			{ showReport ? (
				<ReportOverview reportData={reportData} setShowReport={setShowReport} />
			) : (
				<AccessibilityOverview setShowReport={setShowReport} setReportData={setReportData} />
			)}
		</>
	);
};

export default App;
