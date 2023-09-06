import Notice from "@models/notice";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const notice = await Notice.find({}).populate('creator')

        return new Response(JSON.stringify(notice), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all notice", { status: 500 })
    }
} 