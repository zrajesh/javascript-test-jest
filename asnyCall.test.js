import fetch from 'node-fetch';
import getPeople from './asyncCall';

it("calls swapi to get people", (done) => {
    getPeople(fetch)
    .then(data => {
        expect(data.count).toEqual(87)
        done();
    })
});

