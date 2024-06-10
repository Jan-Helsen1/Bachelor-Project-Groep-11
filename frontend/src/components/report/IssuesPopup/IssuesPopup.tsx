import React from "react";
import Modal from "../../reusable/Modal/Modal";
import "./IssuesPopup.scss";
import Issue from "../Issue/Issue";

type Props = {
    isOpen: boolean;
    hostIssues: any;
    setIsOpen: (isOpen: boolean) => void;
};

const IssuesPopup: React.FC<Props> = ({ isOpen, hostIssues, setIsOpen }: Props) => {
    return (
        <Modal isOpen={isOpen}>
            <div className="issues-popup">
                <div className="header-popup">
                    <h2 className="title">Issues</h2>
                    <button onClick={() => setIsOpen(false)} className="close-button">Close</button>
                </div>
                <div className="issues-container">
                    {hostIssues.map((hostIssue: any, index: number) => (
                        <div key={index}>
                            <h3 className="page-title">{hostIssue.documentTitle}</h3>
                            {hostIssue.issues.map((issue: any, index: number) => (
                                <Issue key={index} issue={issue} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default IssuesPopup;