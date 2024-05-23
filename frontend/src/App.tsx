import { useState } from "react";
import "./App.scss";

function App() {
	const [url, setUrl] = useState<string>("");

	const handleCheckAccessibility = async () => {
		try {
			const response = await fetch("http://localhost:3000/single", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url }),
			});
			const data = await response.json();
			console.log(data);
		} catch (error: any) {
			console.error(error.message);
		}
	};

  	return (
		<>
			<div className="header">
				<h1>ValidAll</h1>
				<div className="text">
					Get your websites accessibility tested here!
				</div>
				<div className="language-selector">
					ENG
				</div>
			</div>
			<div className="body">
				<form onSubmit={(event) => event.preventDefault()} className="form">
					<label className="label" htmlFor="url">Your website URL</label>
					<div className="input-container">
						<input value={url} onChange={(event) => setUrl(event.target.value)} className="input" type="text" />
						<button onClick={handleCheckAccessibility} className="button">Check accessibility</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default App;
