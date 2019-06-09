module.exports.orderByRank = (objectsWithRanks, sortOrder) => {
    if (!objectsWithRanks) {
        throw new Error('Please supply a valid array of objects with names and ranks');
    }

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

module.exports.findAverageRank = objectsWithRanks => {
    if (!objectsWithRanks) {
        throw new Error('Please supply a valid array of objects with names and ranks');
    }

    let sumRank = 0;
    objectsWithRanks.forEach(currentObject => sumRank += currentObject.rank);

    const average = sumRank / objectsWithRanks.length;
    return average;
}
