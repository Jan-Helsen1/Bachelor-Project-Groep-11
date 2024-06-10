import React from "react";
import Modal from "../../reusable/Modal/Modal";
import "./IssuesPopup.scss";
import Issue from "../Issue/Issue";

type Props = {
    isOpen: boolean;
    issues: any;
    setIsOpen: (isOpen: boolean) => void;
};

const IssuesPopup: React.FC<Props> = ({ isOpen, issues, setIsOpen }: Props) => {
    return (
        <Modal isOpen={isOpen}>
            <div className="issues-popup">
                <div className="header-popup">
                    <h2 className="title">Issues</h2>
                    <button onClick={() => setIsOpen(false)} className="close-button">Close</button>
                </div>
                <div className="issues-container">
                    {issues.map((issue: any, index: number) => (
                        <Issue key={index} issue={issue} />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default IssuesPopup;