import { NextRequest, NextResponse } from "next/server";
import { getPa11yResults } from "../../../../service/single";


export const POST = async (req: NextRequest): Promise<NextResponse> => {
    const { url } = await req.json();

    try {
        console.log("begin crawl")
        const results = await getPa11yResults(url);
        return NextResponse.json(results);
    } catch (error: any) {
        // console.log("error: ", error);
        return NextResponse.json(error);
    }
};