import jsPDF from 'jspdf';
import scoring from '../WCAG/scoring';

const makeReport = (reportData: any[]): jsPDF => {
    // Initialize yPosition
    let yPosition = 20;
    
    // Create a new PDF document
    const doc = new jsPDF();

    // Set title
    yPosition = addTitle(doc, 'Accessibility Report', yPosition, 20);

    // Loop through the report data
    let i = 0;
    while ( i < reportData.length ) {
        // Add hostname
        yPosition = addTitle(doc, reportData[i].hostname, yPosition, 18);

        // Add score
        console.log(reportData[i].score);
        switch (reportData[i].score) {
            case 1:
                yPosition = addTitle(doc, scoring.not.title, yPosition, 16);
                yPosition = addParagraph(doc, scoring.not.description, yPosition, 14);
                break;
            case 2:
                yPosition = addTitle(doc, scoring.limited.title, yPosition, 16);
                yPosition = addParagraph(doc, scoring.limited.description, yPosition, 14);
                break;
            case 3:
                yPosition = addTitle(doc, scoring.emergent.title, yPosition, 16);
                yPosition = addParagraph(doc, scoring.emergent.description, yPosition, 14);
                break;
            case 4:
                yPosition = addTitle(doc, scoring.structured.title, yPosition, 16);
                yPosition = addParagraph(doc, scoring.structured.description, yPosition, 14);
                break;
            case 5:
                yPosition = addTitle(doc, scoring.leading.title, yPosition, 16);
                yPosition = addParagraph(doc, scoring.leading.description, yPosition, 14);
                break;
            default:
                break;
        };
        yPosition += 5;

        // Add accessibility title
        yPosition = addTitle(doc, "Accessibility", yPosition, 16);

        // Add WCAG result
        yPosition = addResultToReport(doc, 'WCAG result', reportData[i].questionResults.wcagResult, yPosition);

        // Add accessibility result
        yPosition = addResultToReport(doc, 'Accessibility result', reportData[i].questionResults.accessibilityResult, yPosition);

        // Add Security title
        yPosition = addTitle(doc, "Security", yPosition, 16);

        // Add HTTPS result
        yPosition = addResultToReport(doc, 'HTTPS result', reportData[i].questionResults.httpsResult, yPosition);

        // Add WCAG issues
        yPosition = addWcagIssuesToReport(doc, reportData[i].questionResults.wcagResult.hostIssues, yPosition);

        // Add page break
        if (i < reportData.length - 1) yPosition = addPageBreak(doc, yPosition);

        // Increment i
        i++;
    };

    // Return the PDF document
    return doc; 
};

const addWcagIssuesToReport = (doc: jsPDF, hostIssues: any, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition, 230);

    // Add title
    yPosition = addTitle(doc, 'WCAG issues', yPosition, 16);

    // Loop over the host issues
    hostIssues.forEach((hostIssue: any) => {
        yPosition = addIssueToReport(doc, hostIssue, yPosition);
    });

    return yPosition + 5;
};

const addIssueToReport = (doc: jsPDF, issue: any, yPosition: number): number => {
    // Add title
    yPosition = addTitle(doc, issue.documentTitle, yPosition, 14);

    // Get the issues
    const issues = issue.issues;
    
    // Loop over the issues
    issues.forEach((issue: any) => {
        // Check page break
        yPosition = checkPageBreak(doc, yPosition, 230);

        // yPosition start
        const yPositionStart = yPosition;

        // Add WCAG issues nog verder schrijven
        yPosition = addTitle(doc, `${issue.type}: ${issue.message}`, yPosition, 12);
        yPosition = addParagraph(doc, `${issue.wcag} ${issue.code}`, yPosition, 12);
        yPosition = addParagraph(doc, issue.explanation, yPosition, 12);
        yPosition = addParagraph(doc, issue.appliesTo, yPosition, 12);
        yPosition = addParagraph(doc, issue.context, yPosition, 12);

        // Add border
        doc.roundedRect(15, yPositionStart - 5, 180, yPosition - yPositionStart, 3, 3, 'S');

        // Add spacing
        yPosition += 5;
    });
    return yPosition + 5;
};

const addResultToReport = (doc: jsPDF, title: string, result: any, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition, 240);

    // yPosition start
    const yPositionStart = yPosition;

    // Add result to report
    yPosition = addTitle(doc, title, yPosition, 14);
    yPosition = addParagraph(doc, result.question, yPosition, 12);
    yPosition = addParagraph(doc, result.answer, yPosition, 12);
    yPosition = addParagraph(doc, result.explanation, yPosition, 12);

    // Add url
    yPosition = addLinkElement(doc, 'Click here for more info', result.url, yPosition, 12);

    // Add border
    doc.roundedRect(15, yPositionStart - 7, 180, (yPosition + 3) - yPositionStart, 3, 3, 'S');

    return yPosition + 5;
};

const addTitle = (doc: jsPDF, issueTitle: string, yPosition: number, fontSize: number): number => {
    // Set the font
    doc.setFontSize(fontSize);

    // Split issue title into multiple lines
    const splitIssueTitle = doc.splitTextToSize(issueTitle, 170);

    // Set the document title
    doc.text(splitIssueTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + (splitIssueTitle.length - 1) * 5 + 10;
};

const addParagraph = (doc: jsPDF, paragraph: string, yPosition: number, fontSize: number): number => {
    // Set the font size
    doc.setFontSize(fontSize);

    // Split paragraph into multiple lines
    const splitParagraph = doc.splitTextToSize(paragraph, 170);

    // Add the paragraph to the document
    doc.text(splitParagraph, 20, yPosition);

    return yPosition + (splitParagraph.length - 1) * 5 + 8;
};

const addLinkElement = (doc: jsPDF, text: string, url: string, yPosition: number, fontSize: number): number => {
    // Set the font size
    doc.setFontSize(fontSize);

    // Add the link to the document
    doc.textWithLink(text, 20, yPosition, { url });

    return yPosition + 10;
};

const checkPageBreak = (doc: jsPDF, yPosition: number, maxPosition: number): number => {
    // Check if the position is almost at the end of the page
    if (yPosition > maxPosition) {
        doc.addPage();
        return 30;
    }
    return yPosition;
};

const addPageBreak = (doc: jsPDF, yPosition: number): number => {
    // Add a page break
    doc.addPage();
    return 30;
};

// Export the functions
export {
    makeReport,
};