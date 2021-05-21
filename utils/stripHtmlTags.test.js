import stripHtmlTags from "./stripHtmlTags";

describe("StripHtmlTags Test Suite", function() {
    it("Returns the text stripped from HTML Tags", function() {
        const taggedString = '<h1><p>Test Data</p></h1>';

        const strippedTags = stripHtmlTags(taggedString);

        expect(strippedTags).toBe('Test Data');
    });
});