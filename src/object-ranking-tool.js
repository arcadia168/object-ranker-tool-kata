module.exports.orderByRank = objectsWithRanks => {
    if (!objectsWithRanks) {
        throw new Error('Please supply a valid array of objects with names and ranks');
    }

    // Iterate object keys.
    objectsWithRanks.sort((a, b) => {
        return a.rank - b.rank;
    });

    return objectsWithRanks;
}
