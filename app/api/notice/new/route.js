import Notice from "@models/notice";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { 
        userId,
        notice, 
        tag,
        details,
        department,
        school, 
    } = await request.json();

    try {
        await connectToDB();
        const newNotice = new Notice({ creator: 
            userId, 
            notice, 
            tag,
            details,
            department,
            school,
         });

        await newNotice.save();
        return new Response(JSON.stringify(newNotice), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Notice", { status: 500 });
    }
}
