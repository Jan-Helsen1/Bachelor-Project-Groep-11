import React from "react";
import "./Scoring.scss";

type Props = {
    score: number;
};

const Scoring: React.FC<Props> = ({ score }: Props) => {

    const scoring = (): string => {
        return `(Score: ${score}/5)`;
    }
    
    switch (score) {
        case 1:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is not inclusive in terms of Accessibility {scoring()}</h3>
                    <p className="description">At the moment, your product is not accessible to all users. You need to invest in the accessibility of your products and services if you want everybody to be able to use them.</p>
                </div>
            );
        case 2:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is limited inclusive in terms of Accessibility {scoring()}</h3>
                    <p className="description">You've taken the first steps to make your digital products and services easy to use. But there is still a lot of room for improvement before everyone can easily access your digital products and services.</p>
                </div>
            );
        case 3:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is emergent inclusive in terms of Accessibility {scoring()}</h3>
                    <p className="description">You're on your way to ensuring your products and services are easily accessible to everyone. If you increase your focus on accessibility, more people will be able to use your digital products and services with ease.</p>
                </div>
            );
        case 4:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is structured inclusive in terms of Accessibility {scoring()}</h3>
                    <p className="description">Your digital offering is already performing well in terms accessibility. Keep investing if you want to lead the way to a more digitally inclusive society.</p>
                </div>
            );
        case 5:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is leading the way in terms of Accessibility {scoring()}</h3>
                    <p className="description">Good job! Your digital offering is accessible to all! Keep focusing on accessibility to continue serving all of your users optimally in the future.</p>
                </div>
            );
        default:
            return (
                <div className="scoring">
                    <h3 className="title">Your product is not inclusive in terms of Accessibility {scoring()}</h3>
                    <p className="description">At the moment, your product is not accessible to all users. You need to invest in the accessibility of your products and services if you want everybody to be able to use them.</p>
                </div>
            );
    };
};

export default Scoring;