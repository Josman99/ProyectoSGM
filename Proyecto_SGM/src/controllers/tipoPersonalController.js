const express = require('express');
const TipoPersonalService = require('../services/tipoPersonalService');

const router = express.Router();

router.get('/', async (req, res) => {
    const tipoPersonal = await TipoPersonalService.getAllTipoPersonal();
    res.json(tipoPersonal);
})

router.get('/:id', async (req, res) => {
    const tipoPersonal  = await TipoPersonalService.getTipoPersonalById(req.params.id);
    if (tipoPersonal) {
        res.json(tipoPersonal);
    }
    else {
        res.status(404).json({ message: 'personal not found' });
    }
})
router.post('/', async (req, res) => {
    const newTipoPersonal = await TipoPersonalService.createTipoPersonal(req.body);
    if (newTipoPersonal)
        res.status(201).json(newTipoPersonal);
    else
        res.status(404).json({ message: 'Personal not registred' });
})
router.put('/:id', async (req, res) => {
    const updateTipoPersonal = await TipoPersonalService.updateTipoPersonal(
        req.params.id,req.body);
    if (updateTipoPersonal)
        res.status(201).json(updateTipoPersonal);
    else
        res.status(404).json({ message: 'Personal not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedTipoPersonal = await TipoPersonalService.deleteTipoPersonal(req.params.id);
    if(deletedTipoPersonal){
        res.status(204).send();
    } else {
        res.status(404).json({message:'Personal dont delete'});
    }
})

module.exports = router;