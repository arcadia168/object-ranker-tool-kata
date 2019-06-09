A simple utility (node module) that can be used to order a list of objects that have both name and rank, as well as finding the average rank.

See tests for examples like the one below:

``` javascript
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

const orderedRanks = rankingTool.orderByRank(rankObjects); // Now in order!
const averageRank = rankingTool.findAverageRank(rankObjects); // It's 4
```
