import { useState } from "react";
import "./Overview.scss";
import Form from "../form/Form";

type Props = {
	setShowReport: (showReport: boolean) => void;
	setReportData: (reportData: any) => void;
};

const AccessibilityOverview: React.FC<Props> = ({ setShowReport, setReportData }: Props) => {
    const [url, setUrl] = useState<string>("");
    const [multipleUrls, setMultipleUrls] = useState<string[]>([]);
    const [isMultiple, setIsMultiple] = useState<boolean>(false);

    const handleCheckAccessibility = async (send: boolean) => {
		try {
			if (send && !isMultiple) {
				const response = await fetch("http://localhost:3000/single", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ url }),
				});
				const data = await response.json();
				setReportData(data.results);
				setShowReport(true);
			}
			else if (send) {
				const response = await fetch("http://localhost:3000/multiple", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ urls: multipleUrls }),
				});
				const data = await response.json();
				console.log(data);
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
				<div>
					The crawler will only do one page so you need to enter the different page url's
				</div>
				<Form
                    url={url}
                    multipleUrls={multipleUrls}
                    isMultiple={isMultiple}
                    setUrl={setUrl}
                    setMultipleUrls={setMultipleUrls}
                    setIsMultiple={setIsMultiple}
                    handleCheckAccessibility={handleCheckAccessibility}
                />
			</div>
        </>
    );
};

export default AccessibilityOverview;