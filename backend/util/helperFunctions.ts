import messages from '../WCAG/messages';

const formatIssues = (issues: any) => {
    return issues.map((issue: any) => {
        const principles = messages[issue.type];
        // console.log(principles);
        const firstDotIndex = issue.code.indexOf('.');
        const resultString = issue.code.substring(firstDotIndex + 1);
        
        // checks for principle if no found returns undefined
        const result = principles[resultString];

        // if principle found return the principle message
        // else if try to remove last group of characters and check again
        // else return standard message
        if (result) {
            return {
                context: issue.context,
                message: issue.message,
                explanation: result.explanation,
                appliesTo: result.appliesTo,
                type: issue.type,
                wcag: issue.code.substring(0, firstDotIndex),
                code: issue.code.substring(firstDotIndex + 1),
            };
        }
        else {
            const resultString2 = resultString.substring(0, resultString.lastIndexOf('.'));
            const result2 = principles[resultString2];
            if (result2) {
                return {
                    context: issue.context,
                    message: issue.message,
                    explanation: result2.explanation,
                    appliesTo: result2.appliesTo,
                    type: issue.type,
                    wcag: issue.code.substring(0, firstDotIndex),
                    code: issue.code.substring(firstDotIndex + 1),
                };
            }
            else {
                return {
                    context: issue.context,
                    message: issue.message,
                    explanation: "No explanation found",
                    appliesTo: "No applies to found",
                    type: issue.type,
                    wcag: issue.code.substring(0, firstDotIndex),
                    code: issue.code.substring(firstDotIndex + 1),
                };
            };
        };
    });
};

export {
    formatIssues,
}