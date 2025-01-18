const express = require('express');
const EspecialidadService = require('../services/especialidadService');

const router = express.Router();

router.get('/', async (req, res) => {
    const especialidad = await EspecialidadService.getAllEspecialidad();
    res.json(especialidad);
})

router.get('/:id', async (req, res) => {
    const especialidad  = await EspecialidadService.getEspecialidadById(req.params.id);
    if (especialidad) {
        res.json(especialidad);
    }
    else {
        res.status(404).json({ message: 'personal not found' });
    }
})
router.post('/', async (req, res) => {
    const newEspecialidad = await EspecialidadService.createEspecialidad(req.body);
    if (newEspecialidad)
        res.status(201).json(newEspecialidad);
    else
        res.status(404).json({ message: 'Personal not registred' });
})
router.put('/:id', async (req, res) => {
    const updateEspecialidad = await EspecialidadService.updateEspecialidad(
        req.params.id,req.body);
    if (updateEspecialidad)
        res.status(201).json(updateEspecialidad);
    else
        res.status(404).json({ message: 'Personal not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedEspecialidad = await EspecialidadService.deleteEspecialidad(req.params.id);
    if(deletedEspecialidad){
        res.status(204).send();
    } else {
        res.status(404).json({message:'Personal dont delete'});
    }
})

module.exports = router;