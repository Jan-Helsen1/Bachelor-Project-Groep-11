import React, { useState, useEffect } from "react";
import "./Form.scss";

type Props = {
    url: string;
    multipleUrls: string[];
    isMultiple: boolean;
    setUrl: (url: string) => void;
    setMultipleUrls: (urls: string[]) => void;
    setIsMultiple: (isMultiple: boolean) => void;
    handleCheckAccessibility: (send: boolean) => void;
};

const Form: React.FC<Props> = ({ url, multipleUrls, isMultiple,  setUrl, setMultipleUrls, setIsMultiple, handleCheckAccessibility }: Props) => {
    const [multiple, setMultiple] = useState<string>("Single"); 

    useEffect(() => {
        setIsMultiple(multiple === "Multiple");
    }, [multiple]);

    return (
        <form onSubmit={(event) => event.preventDefault()} className="form">
            <h2 className="title">Test your accessibility</h2>
            <div className="input-container">
                <label className="label" htmlFor="url">
                    URL
                </label>
                <div className="container">
                    <input 
                        name="url" 
                        value={url} 
                        onChange={(event) => setUrl(event.target.value)} 
                        className={`input ${isMultiple ? "multiple" : ""}`}
                        type="text" 
                    />
                    {isMultiple && (
                        <button 
                            onClick={() => setMultipleUrls([...multipleUrls, url])} 
                            className="button"
                        >
                            Add URL
                        </button>
                    )}
                </div>
            </div>
            {isMultiple && multipleUrls.length > 0 &&  (
                <div className="multiple-container">
                    <div className="label">Chosen URL's</div>
                    <div className="multiple-urls">
                        {multipleUrls.map((url, index) => (
                            <div key={index} className="url">
                            { url }
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="button-container">
                <button
                    onClick={() => handleCheckAccessibility(true)}
                    className="button"
                >
                        Check accessibility
                </button>
                <div className="selector-container">
                    <input
                        type="text"
                        value={multiple}
                        onChange={() => {}}
                        className="input"
                        name="selector multiple"
                        readOnly
                    />
                    <div className="selector">
                        <button 
                            onClick={() => setMultiple("Single")} 
                            className={`selector-button ${!isMultiple ? "active" : ""}`}
                        >
                            Single
                        </button>
                        <button 
                            onClick={() => setMultiple("Multiple")} 
                            className={`selector-button ${isMultiple ? "active" : ""}`}
                        >
                            Multiple
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;