import jsPDF from 'jspdf';

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
        yPosition = addSubTitle(doc, reportData[i].hostname, yPosition, 18);

        // Add WCAG result
        yPosition = addWcagResultsToReport(doc, reportData[i].questionResults.wcagResult, yPosition);

        // Add HTTPS result
        yPosition = addHttpsResultsToReport(doc, reportData[i].questionResults.httpsResult, yPosition);

        // Add page break
        if (i < reportData.length - 1) yPosition = addPageBreak(doc, yPosition);

        // Increment i
        i++;
    };

    // Return the PDF document
    return doc; 
};

const addWcagResultsToReport = (doc: jsPDF, wcagResult: any, yPosition: number): number => {
    // Add title
    yPosition = addIssueTitle(doc, "Accessibility", yPosition, 16);

    // yPosition start
    const yPositionStart = yPosition;

    // Add WCAG result nog verder schrijven
    yPosition = addIssueTitle(doc, 'WCAG result', yPosition, 14);
    yPosition = addParagraph(doc, wcagResult.question, yPosition, 12);
    yPosition = addParagraph(doc, wcagResult.answer, yPosition, 12);
    yPosition = addParagraph(doc, wcagResult.explanation, yPosition, 12);

    doc.roundedRect(15, yPositionStart - 10, 180, yPosition - yPositionStart, 3, 3, 'S');

    return yPosition + 5;
};

const addHttpsResultsToReport = (doc: jsPDF, httpsResult: any, yPosition: number): number => {
    // Add title
    yPosition = addIssueTitle(doc, "Security", yPosition, 16);

    // yPostion start
    const yPositionStart = yPosition;

    // Add HTTPS result nog verder schrijven
    yPosition = addIssueTitle(doc, 'HTTPS result', yPosition, 14);
    yPosition = addParagraph(doc, httpsResult.question, yPosition, 12);
    yPosition = addParagraph(doc, httpsResult.answer, yPosition, 12);
    yPosition = addParagraph(doc, httpsResult.explanation, yPosition, 12);

    doc.roundedRect(15, yPositionStart - 10, 180, yPosition - yPositionStart, 3, 3, 'S');

    return yPosition + 5;
};

const addTitle = (doc: jsPDF, title: string, yPosition: number, fontSize: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);

    // Set the font size
    doc.setFontSize(fontSize);

    // Set the document title
    doc.text(title, 20, yPosition);

    // Add spacing to title 
    return yPosition + 10;
};

const addSubTitle = (doc: jsPDF, subTitle: string, yPosition: number, fontSize: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(fontSize);

    // Set the document title
    doc.text(subTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + 10;
};

const addIssueTitle = (doc: jsPDF, issueTitle: string, yPosition: number, fontSize: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(fontSize);

    // Split issue title into multiple lines
    const splitIssueTitle = doc.splitTextToSize(issueTitle, 170);

    // Set the document title
    doc.text(splitIssueTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + (splitIssueTitle.length - 1) * 5 + 10;
};

const addParagraph = (doc: jsPDF, paragraph: string, yPosition: number, fontSize: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(fontSize);

    // Split paragraph into multiple lines
    const splitParagraph = doc.splitTextToSize(paragraph, 170);

    // Add the paragraph to the document
    doc.text(splitParagraph, 20, yPosition);

    return yPosition + (splitParagraph.length - 1) * 5 + 8;
};

const checkPageBreak = (doc: jsPDF, yPosition: number): number => {
    // Check if the position is almost at the end of the page
    if (yPosition > 270) {
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