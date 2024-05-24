import "./App.scss";
import { useState } from "react";
import AccessibilityOverview from "./components/accessibility/overview/Overview";
import Header from "./components/reusable/Header/Header";

function App() {
	const [showReport, setShowReport] = useState<boolean>(false);
	const [reportData, setReportData] = useState<any>();

	if (reportData) console.log(reportData);

  	return (
		<>
			<Header />
			<AccessibilityOverview setShowReport={setShowReport} setReportData={setReportData} />
			{ showReport && (
				<div>
					Report
				</div>
			)}
		</>
	);
};

export default App;
