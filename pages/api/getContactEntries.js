export default async (req, res) => {
    const fs = require('fs');
    const array = fs.readFileSync('contacts.txt').toString();

    try {
        return res.status(200).json({ data:JSON.parse(array) });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}