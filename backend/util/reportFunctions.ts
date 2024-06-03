import jsPDF from 'jspdf';

const makeReport = (reportData: any): jsPDF => {
    // Initialize yPosition
    let yPosition = 10;
    
    // Create a new PDF document
    const doc = new jsPDF();

    // Set title
    yPosition = addTitle(doc, 'Accessibility Report', yPosition);

    // Set subtitle
    yPosition = addSubTitle(doc, 'Report Summary', yPosition);

    return doc;
};

const addTitle = (doc: jsPDF, title: string, yPosition: number): number => {
    // Set the font size
    doc.setFontSize(20);

    // Set the document title
    doc.text(title, 20, yPosition);

    // Add spacing to title 
    return yPosition + 10;
};

const addSubTitle = (doc: jsPDF, subTitle: string, yPosition: number): number => {
    // Set the font size
    doc.setFontSize(16);

    // Set the document title
    doc.text(subTitle, 20, yPosition);

    // Add spacing to title
    return yPosition + 10;
};

export {
    makeReport,
};