module.exports.orderByRank = (objectsWithRanks, sortOrder) => {
    if (!objectsWithRanks) {
        throw new Error('Please supply a valid array of objects with names and ranks');
    }

    // Iterate object keys.
    if (sortOrder === 'desc') {

        objectsWithRanks.sort((firstElement, nextElement) => {
            return nextElement.rank - firstElement.rank;
        });
    } else {
        objectsWithRanks.sort((firstElement, nextElement) => {
            return firstElement.rank - nextElement.rank;
        });
    }

    return objectsWithRanks;
}
