const express = require('express');
const path = require('path');
const app = express();
const port = 3300;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/lottery', (req, res) => {
    let lottery = [
        { cotent: "大吉", weight: 0.1 },
        { cotent: "大凶", weight: 0.2 },
        { cotent: "中吉", weight: 0.2 },
        { cotent: "小吉", weight: 0.3 },
        { cotent: "凶", weight: 0.3 },
        { cotent: "吉", weight: 1 },
        { cotent: "凶", weight: 0.3 },
    ];
    let result = [];

    let random = Math.random();
    let sum = 0;
    for (let j = 0; j < lottery.length; j++) {
        sum += lottery[j].weight;
        if (random < sum) {
            result.push(lottery[j].cotent);
            break;
        }
    }

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
