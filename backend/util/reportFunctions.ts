import jsPDF from 'jspdf';

const makeReport = (reportData: any[]): jsPDF => {
    // Initialize yPosition
    let yPosition = 20;
    
    // Create a new PDF document
    const doc = new jsPDF();

    // console.log(doc.getFontList());

    // doc.setFont("Calibri", "normal", "normal");

    // Set title
    yPosition = addTitle(doc, 'Accessibility Report', yPosition, 20);

    // Loop through the report data
    let i = 0;
    while ( i < reportData.length ) {
        // Add hostname
        yPosition = addTitle(doc, reportData[i].hostname, yPosition, 18);

        // Add WCAG result
        yPosition = addWcagResultsToReport(doc, reportData[i].questionResults.wcagResult, yPosition);

        // Add HTTPS result
        yPosition = addHttpsResultsToReport(doc, reportData[i].questionResults.httpsResult, yPosition);

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

const addWcagResultsToReport = (doc: jsPDF, wcagResult: any, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition, 240);
    
    // Add title
    yPosition = addTitle(doc, "Accessibility", yPosition, 16);

    // yPosition start
    const yPositionStart = yPosition;

    // Add WCAG result nog verder schrijven
    yPosition = addTitle(doc, 'WCAG result', yPosition, 14);
    yPosition = addParagraph(doc, wcagResult.question, yPosition, 12);
    yPosition = addParagraph(doc, wcagResult.answer, yPosition, 12);
    yPosition = addParagraph(doc, wcagResult.explanation, yPosition, 12);

    // Add url
    yPosition = addLinkElement(doc, 'Click here for more info', wcagResult.url, yPosition, 12);

    // Add border
    doc.roundedRect(15, yPositionStart - 7, 180, (yPosition + 3)  - yPositionStart, 3, 3, 'S');

    return yPosition + 5;
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

const addHttpsResultsToReport = (doc: jsPDF, httpsResult: any, yPosition: number): number => {
    // Check page break
    yPosition = checkPageBreak(doc, yPosition, 240);
    
    // Add title
    yPosition = addTitle(doc, "Security", yPosition, 16);

    // yPostion start
    const yPositionStart = yPosition;

    // Add HTTPS result nog verder schrijven
    yPosition = addTitle(doc, 'HTTPS result', yPosition, 14);
    yPosition = addParagraph(doc, httpsResult.question, yPosition, 12);
    yPosition = addParagraph(doc, httpsResult.answer, yPosition, 12);
    yPosition = addParagraph(doc, httpsResult.explanation, yPosition, 12);

    // Add url
    yPosition = addLinkElement(doc, 'Click here for more info', httpsResult.url, yPosition, 12);

    // Add border
    doc.roundedRect(15, yPositionStart - 7, 180, (yPosition + 3) - yPositionStart, 3, 3, 'S');

    return yPosition + 5;
};

const addAccessibilityTestToReport = (doc: jsPDF, accessibilityTest: any, yPosition: number): number => {
    
    return 0;
};

const addTitle = (doc: jsPDF, issueTitle: string, yPosition: number, fontSize: number): number => {
    // Set the font
    // doc.setFont("Calibri", "normal", 600);
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