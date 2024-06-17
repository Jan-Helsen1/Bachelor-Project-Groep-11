import React, { useState } from "react";
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
        setUrl("");
    };

    const handleDeleteUrl = (index: number) => {
        const urls = multipleUrls.filter((_, i) => i !== index);
        setMultipleUrls(urls);
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
                                <div onClick={() => handleDeleteUrl(index)} key={index} className="url">
                                    { url } <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
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