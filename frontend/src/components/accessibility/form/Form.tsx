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
    const [multiple, setMultiple] = useState<string>("single"); 

    useEffect(() => {
        setIsMultiple(multiple === "multiple");
    }, [multiple]);

    return (
        <form onSubmit={(event) => event.preventDefault()} className="form">
            <h2 className="title">Iets van tekst of uitleg</h2>
            <div className="input-container">
                <label className="label" htmlFor="url">
                    Your website URL
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
                            onClick={() => setMultipleUrls([...multipleUrls, ""])} 
                            className="button"
                        >
                            Add URL
                        </button>
                    )}
                </div>
                <input 
                    name="url" 
                    value={url} 
                    onChange={(event) => setUrl(event.target.value)} 
                    className="input" 
                    type="text" 
                />
            </div>
            <div className="button-container">
                <button 
                    onClick={() => handleCheckAccessibility(false)} 
                    className="button"
                >
                        Check accessibility
                </button>
                <div className="selector">
                    <input type="text" value={multiple} onChange={() => {}} />
                    <div className="container">
                        <button 
                            onClick={() => setMultiple("single")} 
                            className={`selector-button ${!isMultiple ? "active" : ""}`}
                        >
                            Single
                        </button>
                        <button 
                            onClick={() => setMultiple("multiple")} 
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