"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
	const [url, setUrl] = useState<string>("");
	
	const options = {
        log: {
            debug: console.log,
            error: console.error,
            info: console.log,
        },
    };

	const handleCheckAccessibility = async () => {
		console.log("test")
		try {
			const response = await fetch("/api/single", {
				method: "POST",
				body: JSON.stringify({ url }),
			});
			const data = await response.json();
			console.log(data);	
		} catch (error: any) {
			
		}
	}

  	return (
    	<main className={styles.main}>
			<div className={styles.header}>
				<h1 className={styles.title}>
					Welcome to be included in this Digitall project!
				</h1>
				<div className={styles.language_selector}>
					NL
				</div>
			</div>
			<div className={styles.body}>	
				<div className={styles.header_body}>
					<h2 className={styles.title}>Find out if your website is accessible!</h2>
				</div>
				<div className={styles.container}>
					<div className={styles.input_container}>
						<label className={styles.label} htmlFor="url">Your website URL</label>
						<input value={url} onChange={(event) => setUrl(event.target.value)} className={styles.input} type="text" />
					</div>
					<div className={styles.button_container}>
						<button onClick={handleCheckAccessibility} className={styles.button}>Check accessibility</button>
					</div>
				</div>
			</div>
    	</main>
  	);
};