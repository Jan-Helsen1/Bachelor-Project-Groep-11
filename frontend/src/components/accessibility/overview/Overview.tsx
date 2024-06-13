import { useState } from "react";
import "./Overview.scss";
import Form from "../form/Form";
import YellowBox from "../../reusable/Yellow-box/Yellow-box";

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
				<div className="yellow-container">
					<h1>What is ValidAll? What is digital inclusion? Discover everything here!</h1>
					<YellowBox title={'What is digital inclusion'} content={'The world in which we live is becoming more digital day by day. Many people risk to be excluded.'} />
					<YellowBox title={'About DigitAll'} content={'DigitAll is a coalition of companies, social organisations and government bodies working together for more digital inclusion in Belgium. Discover who we are and get to know our initiatives to improve digital inclusion.'} />
				</div>
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