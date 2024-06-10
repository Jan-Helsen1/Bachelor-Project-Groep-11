import "./App.scss";
import { useEffect, useState } from "react";
import AccessibilityOverview from "./components/accessibility/overview/Overview";
import Header from "./components/reusable/Header/Header";
import ReportOverview from "./components/report/overview/Overview";

function App() {
	const [showReport, setShowReport] = useState<boolean>(false);
	const [reportData, setReportData] = useState<any>();
	const [fileUrl, setFileUrl] = useState<string>("");

	useEffect(() => {
		if (reportData) {
			console.log("useState: ", reportData);
			handleGetPdf();
		}
	}, [reportData]);

	const handleGetPdf = async () => {
		try {
			console.log(reportData);
			const response = await fetch("http://localhost:3000/api/pdf", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ reportData }),
			});
			const data = await response.blob();
			const file = window.URL.createObjectURL(data);
			setFileUrl(file);
		} catch (error: any) {
			console.error(error.message);
		};
	};

  	return (
		<>
			<Header />
			{ showReport ? (
				<ReportOverview
					reportData={reportData}
					fileUrl={fileUrl}
					setReportData={setReportData}
					setShowReport={setShowReport}
				/>
			) : (
				<AccessibilityOverview
					setShowReport={setShowReport}
					setReportData={setReportData}
				/>
			)}
		</>
	);
};

export default App;