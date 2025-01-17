const express = require('express');
const PacienteService = require('../services/pacienteService');

const router = express.Router();

router.get('/', async (req, res) => {
    const paciente = await PacienteService.getAllPaciente();
    res.json(paciente);
})

router.get('/:id', async (req, res) => {
    const paciente  = await PacienteService.getPacienteById(req.params.id);
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
})
router.post('/', async (req, res) => {
    const newPaciente = await PacienteService.createPaciente(req.body);
    if (newPaciente)
        res.status(201).json(newPaciente);
    else
        res.status(404).json({ message: 'Paciente not registred' });
})
router.put('/:id', async (req, res) => {
    const updatePaciente = await PacienteService.updatePaciente(
        req.params.id,req.body);
    if (updatePaciente)
        res.status(201).json(updatePaciente);
    else
        res.status(404).json({ message: 'Paciente not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedPaciente = await PacienteService.deletePaciente(req.params.id);
    if(deletedPaciente){
        res.status(204).send();
    } else {
        res.status(404).json({message:'Paciente dont delete'});
    }
})


module.exports = router;