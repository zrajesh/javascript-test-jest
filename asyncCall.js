import fetch from 'node-fetch';

const getPeople = async fetch => {
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json();
    console.log(data);
    return {
        count: data.count,
        results: data.results
    }
};

export default getPeople

