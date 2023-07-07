class Veiculo{
    constructor(_id, ano, modelo, fabricante, placa){
        this._id = _id;
        this.ano = ano;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.placa = placa;
    } 

    static async listarVeiculos(){
        const  db = require("./db.js");
        return await db.findAll("Veiculos");
    }

    static async buscaVeiculo(id){
        const db = require("./db.js");
        return await db.findOne("Veiculos", id);
    }

    async salvarVeiculo(data){
        const db = require("./db.js");
        var resp = await db.insertOne("Veiculos", data);
        this._id = resp.id;
        return resp.id;
    }

    async updateVeiculo(id, data){
        const db = require("./db.js");
        var resp = await db.updateOne("Veiculos", data, {_id: id});
        this._id = resp.id;
        return resp.id;
    }

    async apagaVeiculo(data){
        const db = require("./db.js");
        return await db.deleteOne("Veiculos",data);
    };
}

module.exports = Veiculo;