import jsPDF from 'jspdf';

const makeReport = (reportData: any[]): jsPDF => {
    // Initialize yPosition
    let yPosition = 20;
    
    // Create a new PDF document
    const doc = new jsPDF();

    // Set title
    yPosition = addTitle(doc, 'Accessibility Report', yPosition);

    // Loop through the report data
    let i = 0;
    while ( i < reportData.length ) {
        // Add hostname
        yPosition = addSubTitle(doc, reportData[i].hostname, yPosition);

        // Add WCAG result
        yPosition = addIssueTitle(doc, 'WCAG result', yPosition);
        yPosition = addParagraph(doc, reportData[i].questionResults.wcagResult.answer, yPosition);

        // Add HTTPS result
        yPosition = addIssueTitle(doc, 'HTTPS result', yPosition);
        yPosition = addParagraph(doc, reportData[i].questionResults.httpsResult.answer, yPosition);

        // Add page break
        yPosition = addPageBreak(doc, yPosition);

        // Increment i
        i++;
    };

    // Return the PDF document
    return doc; 
};

const addWcagResultsToReport = (doc: jsPDF, wcagResult: any, yPosition: number): number => {
    // Add WCAG result nog verder schrijven
    yPosition = addIssueTitle(doc, 'WCAG result', yPosition);
    yPosition = addParagraph(doc, wcagResult.answer, yPosition);

    return yPosition;
};

const addHttpsResultsToReport = (doc: jsPDF, httpsResult: any, yPosition: number): number => {
    // Add HTTPS result nog verder schrijven
    yPosition = addIssueTitle(doc, 'HTTPS result', yPosition);
    yPosition = addParagraph(doc, httpsResult.answer, yPosition);

    return yPosition;
};

const addTitle = (doc: jsPDF, title: string, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);

    // Set the font size
    doc.setFontSize(20);

    // Set the document title
    doc.text(title, 20, yPosition);

    // Add spacing to title 
    return yPosition + 10;
};

const addSubTitle = (doc: jsPDF, subTitle: string, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(16);

    // Set the document title
    doc.text(subTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + 10;
};

const addIssueTitle = (doc: jsPDF, issueTitle: string, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(14);

    // Split issue title into multiple lines
    const splitIssueTitle = doc.splitTextToSize(issueTitle, 170);

    // Set the document title
    doc.text(splitIssueTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + (splitIssueTitle.length - 1) * 5 + 10;
};

const addParagraph = (doc: jsPDF, paragraph: string, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition);
    
    // Set the font size
    doc.setFontSize(12);

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