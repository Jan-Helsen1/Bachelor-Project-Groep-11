import React, { useEffect, useState } from "react";
import "./Form.scss";
import Spinner from "../../../components/reusable/Spinner/Spinner.tsx";


type Props = {
    multipleUrls: string[];
    setMultipleUrls: (urls: string[]) => void;
    handleCheckAccessibility: (send: boolean) => void;
};

const Form: React.FC<Props> = ({ multipleUrls, setMultipleUrls, handleCheckAccessibility }: Props) => {
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (multipleUrls.length > 0) {
            console.log("urls: ", multipleUrls);
        }
    }, [multipleUrls])


    const onCheckAccessibility = async () => {
        setIsLoading(true);

        try {
            await handleCheckAccessibility(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddUrl = () => {
        if (url.trim().length === 0) return;
        if (!isValidUrl(url)) {
            alert("Invalid URL");
            return;
        }
        setMultipleUrls([...multipleUrls, url])
    };

    const isValidUrl = (url: string) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    
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
                        placeholder="https://www.yourUrl.be"
                        onChange={(event) => setUrl(event.target.value)}
                        className={`input multiple`}
                        type="text" 
                    />
                    <button 
                        onClick={handleAddUrl} 
                        className="button"
                    >
                        Add URL
                    </button>
                </div>
            </div>
            <div className="multiple-container">
                <div className="label">Chosen URL's</div>
                <div className="multiple-urls">
                    { multipleUrls.length > 0 ? (
                        <>
                            {multipleUrls.map((url, index) => (
                                <div key={index} className="url">
                                    { url }
                                </div>
                            ))}
                        </>
                    ): (
                        <div className="url">
                            No URL's added
                        </div>
                    )}
                    
                </div>
            </div>
            <div className="button-container">
                <button
                    onClick={onCheckAccessibility}
                    className="button"
                    disabled={isLoading}
                >
                    {isLoading ? < Spinner /> : 'Check accessibility'}
                </button>
            </div>
        </form>
    );
};

export default Form;