import pa11y from "pa11y";

const getPa11yResults = async (url: string) => {
    const options = {
        log: {
            debug: console.log,
            error: console.error,
            info: console.log,
        },
        runner: ["axe"],
    };

    try {
        console.log("begin crawl")
        const results = await pa11y(url, options);
        console.log("results: ", results);
        return results;
    } catch (error: any) {
        return error;
    }
};

export {
    getPa11yResults
};