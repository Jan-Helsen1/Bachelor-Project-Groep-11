import jsPDF from 'jspdf';

const makeReport = (reportData: any): jsPDF => {
    // Initialize yPosition
    let yPosition = 20;
    
    // Create a new PDF document
    const doc = new jsPDF();

    // Set title
    yPosition = addTitle(doc, 'Accessibility Report', yPosition);

    // Loop over different pages
    reportData.forEach((data: any, index: number) => {
        // Set page URL
        yPosition = addSubTitle(doc, `Summary: ${data.documentTitle}`, yPosition);

        // Add issues
        data.issues.forEach((issue: any, index: number) => {
            // Set issue title
            yPosition = addIssueTitle(doc, `${issue.type}: ${issue.message}`, yPosition);

            // Set paragraphs per issue
            yPosition = addParagraph(doc, `${issue.wcag} ${issue.code}`, yPosition);
            yPosition = addParagraph(doc, issue.explanation, yPosition);
            yPosition = addParagraph(doc, issue.appliesTo, yPosition);
            yPosition = addParagraph(doc, issue.context, yPosition);
            yPosition += 5;
        });

        // Add spacing between pages
        yPosition += 10;
    });

    // Return the PDF document
    return doc;
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

// Export the functions
export {
    makeReport,
};