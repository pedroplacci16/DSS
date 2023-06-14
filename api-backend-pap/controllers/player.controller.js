const { Op } = require('sequelize');
const {sequelize} = require('C:/Users/Pedro Placci/Desktop/Practica Local DDS Parcial/Simulacro/Simulacro3K2-base/Simulacro3K2-base/api-backend-pap/base-orm/sequelize-init.js')
const PlayerController = {
    get: async (req, res) => {
        try {
            console.log('Llego');
            const data = await sequelize.models.Player.findAll()
            console.log(data);
            res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({error: error.message})
        }

    },
    getByFiltro: async (req, res) => {
        try {
            const filtro = req.query.filtro
            const orden = req.query.orden
            let where = {}
            if (filtro !== '' && filtro !== undefined){
                where = {
                    [Op.or]: [
                        { full_name: { [Op.startsWith]: filtro }},
                        { nickname: { [Op.startsWith]: filtro }},
                        { email: { [Op.startsWith]: filtro }}
                    ]
                }
                }
            let ordera = []
            if (orden !== '' && orden !== undefined){
                ordera = [[orden]];
                 }
            const data = await sequelize.models.Player.findAll({where, order: ordera});
            res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({error: error.message})
        }

    }
}
module.exports = PlayerController;