"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Espada {
    constructor(nome, dano) {
        this.nome = nome;
        this.dano = dano;
    }
}
class Bau {
    constructor(nome) {
        this.nome = nome;
        this.itens = [];
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
}
const espada = new Espada("Espada de Fogo", 50);
const bau = new Bau("Bau do Tesouro");
bau.adicionarItem(new Espada("Espada de Gelo", 40));
bau.adicionarItem({ nome: "Poção de Cura", raridade: "Comum" });
const objetos = [espada, bau];
try {
    fs_1.default.writeFileSync("objetos.json", JSON.stringify(objetos, null, 2));
    console.log("Objetos salvos com sucesso!");
}
catch (error) {
    console.error("Erro ao salvar objetos:", error);
}
