import {createClient} from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getContentfulEntries = async (contentType) => {
    return await client.getEntries({content_type: contentType});
}