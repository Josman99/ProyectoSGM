const express = require('express');
const PersonalMService = require('../services/PersonalMService');

const router = express.Router();

router.get('/', async (req, res) => {
    const personalM = await PersonalMService.getAllPersonalM();
    res.json(personalM);
})

router.get('/:id', async (req, res) => {
    const personalM  = await PersonalMService.getPersonalMById(req.params.id);
    if (personalM) {
        res.json(personalM);
    }
    else {
        res.status(404).json({ message: 'personal not found' });
    }
})
router.post('/', async (req, res) => {
    const newPersonal = await PersonalMService.createPersonalM(req.body);
    if (newPersonal)
        res.status(201).json(newPersonal);
    else
        res.status(404).json({ message: 'Personal not registred' });
})
router.put('/:id', async (req, res) => {
    const updatePersonalM = await PersonalMService.updatePersonalM(
        req.params.id,req.body);
    if (updatePersonalM)
        res.status(201).json(updatePersonalM);
    else
        res.status(404).json({ message: 'Personal not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedPersonalM = await PersonalMService.deletePersonalM(req.params.id);
    if(deletedPersonalM){
        res.status(204).send();
    } else {
        res.status(404).json({message:'Personal dont delete'});
    }
})

module.exports = router;