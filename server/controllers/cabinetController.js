module.exports = {
    getCabinet: async (req, res) => {
        const db = req.app.get('db');
        let response = await db.getCabinet({})
        res.status(200).send(response)
    }
}