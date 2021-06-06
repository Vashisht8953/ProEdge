const express = require('express');
const axios = require('axios');
const app = express();

app.get("/result/:roll", async (req, res) => {
    let list = req.params.roll.split(',');
    let result = [];
    await Promise.all (list.map (async (li) => { 
        let status = await axios.get(`http://proedge.me/test.php?rollnumber=${li}`)
        result.push({roll: li, result:await status.data})
    }))
    res.send(result);
    result = [];
})

app.listen(5656);