import { useState } from "react";
import "./Overview.scss";
import Form from "../form/Form";
import YellowBox from "../../reusable/Yellow-box/Yellow-box";

type Props = {
	setShowReport: (showReport: boolean) => void;
	setReportData: (reportData: any) => void;
};

const HomeOverview: React.FC<Props> = ({ setShowReport, setReportData }: Props) => {
    const [multipleUrls, setMultipleUrls] = useState<string[]>([]);

    const handleCheckAccessibility = async (send: boolean) => {
		try {
			if (send && multipleUrls.length > 0) {
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
			else {
				alert("Please add at least one URL");
			}
		} catch (error: any) {
			console.error(error.message);
		};
	};

    return (
        <>
			<div className="body">
				<div className="grid-container">
					<div className="grid-item div1">
						<h1 className="title">What is ValidAll? What is digital inclusion? Discover everything here!</h1>
					</div>
					<div className="grid-item div2">
						<YellowBox title={'What is digital inclusion'} content={'The world in which we live is becoming more digital day by day. Many people risk to be excluded.'} />
					</div>
					<div className="grid-item form-container div3">
						<Form
							multipleUrls={multipleUrls}
							setMultipleUrls={setMultipleUrls}
							handleCheckAccessibility={handleCheckAccessibility}
						/>
					</div>
					<div className="grid-item div4">
						<YellowBox 
							title={'About DigitAll'} 
							content={'DigitAll is a coalition of companies, social organisations and government bodies working together for more digital inclusion in Belgium. Discover who we are and get to know our initiatives to improve digital inclusion.'} 
						/>
					</div>
					<div className="grid-item div5">
						<YellowBox
							title="Charter"
							content="To enhacne digital inclusion, DigitAll created a charter with 9 engagements."
						/>
					</div>
					<div className="grid-item div6">
						<YellowBox 
							title="Partners DigitAll"
							content="Digitall thrives by the commitment from companies, governments and social organisations."
						/>
					</div>
				</div>
			</div>
        </>
    );
};

export default HomeOverview;