const express = require('express');
const Tail = require('tail-file');
//const data = require('/var/log/suricata/eve.json');
var fullJson = [];
const all = (req,res) => {
    updateLine();
    console.log(fullJson);
    res.send(fullJson);
}

const updateLine = () => {
    const mytail = new Tail("/var/log/suricata/eve.json", line => {
        fullJson.push(JSON.parse(line));
    });
    //setTimeout(updateLine, 10);
}
module.exports = {all};