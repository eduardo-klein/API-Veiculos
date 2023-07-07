var express = require('express');
const veiculosController = require('../controller/veiculosController.js');

var router = express.Router();

router.get('/veiculos', async (req,res)=>{
    res.render("veiculoLista", {data: await veiculosController.getVeiculos()});
})

router.post('/veiculo', async(req, res)=>{
    if(!req.body){
        res.status(400).json({ message: 'Manda um dado' });
    }
    if(await veiculosController.postVeiculo(req.body)){
        res.status(200).json({ message: 'Salvou' });
    }else{
        res.status(500).json({ message: 'Deu erro' });
    } 
});

router.put('/veiculo/:id', async (req, res) => {
    if(req.params.id && req.body){
        if(await veiculosController.putVeiculo(req.params.id, req.body)){
            res.status(200).json({ message: 'Atualizou' });
            return ;
        }
    }
    res.status(400).json({ message: 'Deu erro' });
    
});

router.get('/veiculo/:id', async (req, res) => {
    if(req.params.id){
        res.send(await veiculosController.getVeiculo(req.params.id))
    }else{
        res.status(400).json({ message: 'Deu erro' });
    }
});

router.delete('/veiculo/:id', async (req, res) => {
    if(req.params.id){
        if(await veiculosController.deleteVeiculo(req.params.id)){
            return res.status(200).json({ message: 'Deletou' });
        }   
    }
    res.status(400).json({ message: 'Deu erro' });
});

module.exports = router;
