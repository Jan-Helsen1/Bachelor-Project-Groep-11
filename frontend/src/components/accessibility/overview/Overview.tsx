import { useState } from "react";
import "./Overview.scss";
import Form from "../form/Form";

type Props = {
	setShowReport: (showReport: boolean) => void;
	setReportData: (reportData: any) => void;
};

const AccessibilityOverview: React.FC<Props> = ({ setShowReport, setReportData }: Props) => {
    const [multipleUrls, setMultipleUrls] = useState<string[]>([]);

    const handleCheckAccessibility = async (send: boolean) => {
		try {
			if (send) {
				const response = await fetch("http://localhost:3000/api/test", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ urls: multipleUrls }),
				});
				const data = await response.json();
				console.log(data.results);
				setReportData(data.results);
				setShowReport(true);
			}
		} catch (error: any) {
			console.error(error.message);
		};
	};

    return (
        <>
			<div className="body">
				<Form
                    multipleUrls={multipleUrls}
                    setMultipleUrls={setMultipleUrls}
                    handleCheckAccessibility={handleCheckAccessibility}
                />
			</div>
        </>
    );
};

export default AccessibilityOverview;