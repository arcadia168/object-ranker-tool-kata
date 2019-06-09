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
                try {
                    const orderedRanks = rankingTool.orderByRank();
                } catch (parameterError) {
                    expect(parameterError.message).toBe('Please supply a valid array of objects with names and ranks');
                }
            });
        });

        describe('When a valid array of objects is passed in', () => {
            describe('When no sort order is defined, it sorts by ascending by default', () => {
                it('Should return that array in ranked order', () => {
                    const orderedRanks = rankingTool.orderByRank(rankObjects);
                    expect(orderedRanks[0].name).toBe('The Battle of Blackwater Bay');
                });
            })

            describe('When the sort order is passed in', () => {
                it('Should return that array in ranked order', () => {
                    const orderedDescRanks = rankingTool.orderByRank(rankObjects, 'desc');
                    expect(orderedDescRanks[0].name).toBe('The Battle of Winterfell');
                });
            });
        });
    });

    describe('Finding the average rank', () => {
        describe('When an array of objects is not passed in', () => {
            it('Should throw an error with a meaningful error message', () => {
                try {
                    const averageRank = rankingTool.findAverageRank();
                } catch (parameterError) {
                    expect(parameterError.message).toBe('Please supply a valid array of objects with names and ranks');
                }
            });
        });

        describe('When a valid array of objects is passed in', () => {
            it('Returns the average rank of the array of ranked objects', () => {
                const averageRank = rankingTool.findAverageRank(rankObjects);
                expect(averageRank).toBe(4);
            });
        });
    });
});
