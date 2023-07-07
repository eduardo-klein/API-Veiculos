const veiculosModel = require('../models/Veiculo');

exports.getVeiculos = async () =>{
    return await veiculosModel.listarVeiculos();
};

exports.postVeiculo = async (data) =>{
    const veiculoModel = new veiculosModel();
    return await veiculoModel.salvarVeiculo(data);
};

exports.putVeiculo = async (id, data) =>{
    const veiculoModel = new veiculosModel();
    return await veiculoModel.updateVeiculo(id, data);
};

exports.getVeiculo = async (id) =>{
    return await veiculosModel.buscaVeiculo(id);
};

exports.deleteVeiculo = async (id) =>{
    const veiculoModel = new veiculosModel();
    const veiculo =  await veiculosModel.buscaVeiculo(id);
    return await veiculoModel.apagaVeiculo(veiculo);
};