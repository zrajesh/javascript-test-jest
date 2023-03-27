import googleSearch from "./index";

dbMock = [
    'dog.com',
    'animals.com',
    'disney.com',
    'catpictures.com',
    'disneypictures.com',
    'disneymovies.com',
    'disneyhotstar.com',
    'disneyweb.com',
];

describe("googleSearch", () => {
    it("is a google search function", () => {
        // googleSearch('testest', dbMock);
        expect(googleSearch("testest", dbMock)).toEqual([]);
    });
    
    it("works with null and undefined input", () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it("does not return more than 3 matches", () => {
        expect(googleSearch("disney", dbMock).length).toEqual(3);
    });    
});


