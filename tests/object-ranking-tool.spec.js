const rankingTool = require('../src/object-ranking-tool');

const rankObjects = [
    {
        name: 'The Battle of The Bastards',
        rank: 4
    },
    {
        name: 'The Battle of Winterfell',
        rank: 5
    },
    {
        name: 'The Battle of Blackwater Bay',
        rank: 3
    },
];

describe('Object Ranking Tool', () => {
    describe('Ordering the object ranks', () => {
        describe('When an array of objects is not passed in', () => {
            it('Should throw an error with a meaningful error message', () => {
                const orderedRanks = rankingTool.orderByRank();
                expect(orderedRanks[0].name).toBe('The Battle of Blackwater Bay');
            });
        });

        describe('When a valid array of objects is passed in', () => {
            it('Should return that array in ranked order', () => {

            });
        });
    });
});
