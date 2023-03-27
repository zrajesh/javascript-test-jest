const googleDatabase = [
    'cats.com',
    'receipe.com',
    'flowers.com',
    'animals.com',
    'superheroes.com',
    'pictures.com',
    'superheropictures.com',
    'flowerpictures.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

console.log(googleSearch("flowers", googleDatabase));


export default googleSearch;
