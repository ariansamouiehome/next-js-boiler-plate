import fs from "fs";

export default async (req, res) => {
    const fs = require('fs');
    const array = fs.readFileSync('emailList.txt').toString();

    try {
        return res.status(200).json({ data:JSON.parse(array) });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}