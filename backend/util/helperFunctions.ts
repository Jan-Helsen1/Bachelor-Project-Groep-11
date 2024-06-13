import messages from '../WCAG/messages';
import questions from '../WCAG/questions';
import pa11y from 'pa11y';
import https from 'https';
import { TLSSocket } from 'tls';

// Pa11y options
const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

const runTests = async (urls: string[]) => {
    // Sort urls per hostname
    // This is done to prevent multiple requests to the same hostname
    const sortedUrls = sortUrlsByHostname(urls);

    // Run tests for each hostname
    // Run tests for each hostname
    const results = await Promise.all(
        sortedUrls.map(async (sortedUrl) => {
            return await runTestsForHostname(sortedUrl.hostname, sortedUrl.urls);
        })
    );

    return results;
};

const runTestsForHostname = async (hostname: string, urls: string[]) => {
    // Run wcag test
    const wcagResult = await runWcagTest(urls);

    // Run https test
    const httpsResult = await runHttpsTest(urls[0]);

    // Return the results
    return {
        hostname: hostname,
        urls,
        questionResults: {
            wcagResult,
            httpsResult,
        },
    };
};

const runWcagTest = async (urls: string[]) => {
    // Wcag result
    const wcagResult = { 
        question: questions.wcag.question,
        answer: null,
        explanation: null,
        score: 0,
        hostIssues: []
    };

    // Run pa11y on the URL's
    const pa11yPromises = urls.map(async (url) => {
        const pa11yResult = await pa11y(url, options);

        // Extract the document title, issues, and page URL
        const { documentTitle, issues } = pa11yResult;

        // Format the issues
        const formattedIssues = formatIssues(issues);

        // Add the issues to the wcagResult
        wcagResult.hostIssues.push({ documentTitle , issues: formattedIssues });
    });

    // Wait for all pa11y promises to resolve
    await Promise.all(pa11yPromises);

    // Wcag answer for question
    // Score berekening nog toevoegen
    const allIssues = wcagResult.hostIssues.flatMap((hostIssue: any) => hostIssue.issues);
    if (allIssues.length === 0) {
        wcagResult.answer = questions.wcag.answers.answer5.answer;
        wcagResult.explanation = questions.wcag.answers.answer5.explanation;
    }
    else {
        const lowestWcagIssue = allIssues.reduce((acc: any, issue: any) => {
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

    return wcagResult;
};

const runHttpsTest = (url: string): Promise<any> => {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Create the httpsResult object
        const httpsResult = { 
            question: questions.https.question,
            answer: "Not found",
            explanation: "Not found",
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
                }
                else {
                    httpsResult.answer = questions.https.answers.answer5.answer;
                    httpsResult.explanation = questions.https.answers.answer5.explanation;
                }
                resolve(httpsResult); // Resolve the promise with httpsResult
                return undefined;
            },
        };

        // Try to run the https request
        try {
            const request = https.request(url, httpsOptions, (res) => {
                if (res.statusCode === 200) {
                    // Handle the response if needed
                    if (res.socket instanceof TLSSocket && res.socket.encrypted) {
                        httpsResult.answer = questions.https.answers.answer5.answer;
                        httpsResult.explanation = questions.https.answers.answer5.explanation;
                    }
                    else {
                        httpsResult.answer = questions.https.answers.answer1.answer;
                        httpsResult.explanation = questions.https.answers.answer1.explanation;
                    }
                    resolve(httpsResult); // Resolve the promise with httpsResult
                } else {
                    // Handle other status codes if needed
                    reject("HTTPS test unsuccessful"); // Reject the promise with an error
                }
            });

            request.on("error", (error) => {
                console.error(error); // Log the error
                reject(error); // Reject the promise with the error
            });

            request.end();

        } catch (error) {
            console.error(error); // Log the caught error
            reject(error); // Reject the promise with the caught error
        }
    });
};

const sortUrlsByHostname = (urls: string[]) => {
    // Create a new map to store the sorted URLs
    const sortedUrls = new Map<string, string[]>();

    // Loop over the URLs
    urls.forEach((url) => {
        // Get the hostname of the URL
        const hostname = new URL(url).hostname;

        // Check if the hostname is already in the map
        if (!sortedUrls.has(hostname)) {
            sortedUrls.set(hostname, []);
        }

        // Add the URL to the hostname
        sortedUrls.get(hostname).push(url);
    });

    // Return the sorted URLs as an array of objects
    return Array.from(sortedUrls, ([hostname, urls]) => {
        return {
            hostname: hostname,
            urls: urls
        };
    });
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

export {
    runTests
}