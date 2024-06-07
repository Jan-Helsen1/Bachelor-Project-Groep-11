import messages from '../WCAG/messages';
import questions from '../WCAG/questions';
import pa11y from 'pa11y';
import https from 'https';

// Pa11y options
const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

const runSingleUrlTest = async (url: string) => {
    // Run web crawler on the URL
    const results = await pa11y(url, options);

    // Extract the document title, issues, and page URL
    const { documentTitle, issues, pageUrl } = results;

    // if no principle found return standard message
    const returnIssues = formatIssues(issues);

    // Run https test
    const httpsResult = await runHttpsTest(url);

    // Wcag result
    const wcagResult = { 
        question: questions.wcag.question,
        answer: null,
        explanation: null,
        score: 0,
        issues: returnIssues
    };

    // Wcag answer for question
    // Score berekening nog toevoegen
    if (returnIssues.length === 0) {
        wcagResult.answer = questions.wcag.answers.answer5.answer;
        wcagResult.explanation = questions.wcag.answers.answer5.explanation;
    }
    else {
        const lowestWcagIssue = returnIssues.reduce((acc: any, issue: any) => {
            if (parseInt(issue.wcag) < parseInt(acc.wcag)) {
                return issue;
            }
            return acc;
        });
    
        // Switch case for setting the answer and explanation based on the lowest WCAG issue
        switch (lowestWcagIssue.wcag) {
            case "WCAG2A":
                wcagResult.answer = questions.wcag.answers.answer2.answer;
                wcagResult.explanation = questions.wcag.answers.answer2.explanation;
                break;
            case "WCAG2AA":
                wcagResult.answer = questions.wcag.answers.answer3.answer;
                wcagResult.explanation = questions.wcag.answers.answer3.explanation;
                break;
            case "WCAG2AAA":
                wcagResult.answer = questions.wcag.answers.answer4.answer;
                wcagResult.explanation = questions.wcag.answers.answer4.explanation;
                break;
            default:
                break;
        };
    };

    return {
        documentTitle,
        pageUrl,
        issues: returnIssues,
        questionResults: {
            wcagResult,
            httpsResult,
        },
    };
};

const runMultipleUrlTest = async (urls: string[]) => {
    // Run web crawler on the multiple URLs
    const results = await Promise.all(
        urls.map(async (url: string) => {
            return await runSingleUrlTest(url);
        })
    );

    return results;
};

const formatIssues = (issues: any) => {
    return issues.map((issue: any) => {
        // gets the principles object from the messages object
        const principles = messages[issue.type];

        // gets the index of the first dot in the issue code
        const firstDotIndex = issue.code.indexOf('.');

        // removes the wcag number from the issue code
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
                const resultString3 = resultString2.substring(0, resultString2.lastIndexOf('.'));
                const result3 = principles[resultString3];
                if (result3) {
                    return {
                        context: issue.context,
                        message: issue.message,
                        explanation: result3.explanation,
                        appliesTo: result3.appliesTo,
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
        };
    });
};

const runHttpsTest = (url: string): Promise<any> => {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Create the httpsResult object
        const httpsResult = { 
            question: questions.https.question,
            answer: null,
            explanation: null,
            score: 0
        };

        // Create the httpsOptions object
        const httpsOptions = {
            hostname: new URL(url).hostname,
            port: 443,
            method: "GET",
            checkServerIdentity: function(host, cert) {
                if (!cert) {
                    httpsResult.answer = questions.https.answers.answer1.answer;
                    httpsResult.explanation = questions.https.answers.answer1.explanation;
                    resolve(httpsResult); // Resolve the promise with httpsResult
                    return new Error("Not trusted")
                };
                httpsResult.answer = questions.https.answers.answer5.answer;
                httpsResult.explanation = questions.https.answers.answer5.explanation;
                resolve(httpsResult); // Resolve the promise with httpsResult
                return undefined;
            },
        };

        // Try to run the https request
        try {
            const request = https.request(url, httpsOptions, (res) => {
                if (res.statusCode === 200) {
                    // Handle the response if needed
                } else {
                    // Handle other status codes if needed
                }
            });

            request.on("error", (error) => {
                reject(error); // Reject the promise with the error
            });

            request.end();

        } catch (error) {
            reject(error); // Reject the promise with the caught error
        }
    });
};

export {
    runSingleUrlTest,
    runMultipleUrlTest
}