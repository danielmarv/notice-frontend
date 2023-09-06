import Notice from "@models/notice";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const notice = await Notice.findById(params.id).populate("creator")
        if (!notice) return new Response("Notice Not Found", { status: 404 });

        return new Response(JSON.stringify(notice), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { notice, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing notcie by ID
        const existingNotice = await Notice.findById(params.id);

        if (!existingNotice) {
            return new Response("Notice not found", { status: 404 });
        }

        // Update the prompt with new data
        existingNotice.notice = notice;
        existingNotice.tag = tag;

        await existingNotice.save();

        return new Response("Successfully updated the Notices", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Notice", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Notice.findByIdAndRemove(params.id);

        return new Response("Notice deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting notice", { status: 500 });
    }
};
