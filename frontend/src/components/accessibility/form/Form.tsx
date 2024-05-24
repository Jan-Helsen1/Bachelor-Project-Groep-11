import "./Form.scss";

type Props = {
    url: string;
    multipleUrls: string[];
    isMultiple: boolean;
    setUrl: (url: string) => void;
    setMultipleUrls: (urls: string[]) => void;
    setIsMultiple: (isMultiple: boolean) => void;
    handleCheckAccessibility: () => void;
};

const Form: React.FC<Props> = ({ url, multipleUrls, isMultiple,  setUrl, setMultipleUrls, setIsMultiple, handleCheckAccessibility }: Props) => {

    return (
        <form onSubmit={(event) => event.preventDefault()} className="form">
            <h2 className="title">Iets van tekst of uitleg</h2>
            <div className="input-container">
                <label className="label" htmlFor="url">
                    Your website URL
                </label>
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
                    onClick={handleCheckAccessibility} 
                    className="button"
                >
                        Check accessibility
                </button>
                <div className="selector">
                    
                </div>
            </div>
        </form>
    );
};

export default Form;