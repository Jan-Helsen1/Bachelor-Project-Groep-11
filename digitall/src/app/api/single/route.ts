import { NextRequest, NextResponse } from "next/server";
import pa11y from "pa11y";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    const { url } = await req.json();

    try {
        console.log("begin crawl")
        const results = await pa11y(url);
        console.log("results: ", results);
        return NextResponse.json(results);
    } catch (error: any) {
        console.log("error: ", error);
        return NextResponse.json(error);
    }
};