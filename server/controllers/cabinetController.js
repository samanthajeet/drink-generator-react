module.exports = {
    getCabinet: async (req, res) => {
        const db = req.app.get('db');
        let response = await db.getCabinet({})
        res.status(200).send(response)
    },
    addToCabinet: async( req, res) => {
        const db = req.app.get('db')
        const {ingredient_name ,ingredient_type } = req.body
        let response = await db.addToCabinet({ingredient_name ,ingredient_type})
        res.status(200).send(response)
    },

    deleteFromCabinet: async(req,res) => {
        const db = req.app.get('db');
        const {id} = req.params
        let response = await db.deleteFromCabinet({id})
        res.status(200).send(response)
    }

}