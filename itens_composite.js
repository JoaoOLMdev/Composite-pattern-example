"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Espada implementando a interface
class Espada {
    constructor(nome, dano) {
        this.nome = nome;
        this.dano = dano;
    }
    salvar() {
        return { tipo: "Espada", nome: this.nome, dano: this.dano };
    }
}
// Baú implementando a interface
class Bau {
    constructor(nome) {
        this.nome = nome;
        this.itens = [];
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
    salvar() {
        return {
            tipo: "Bau",
            nome: this.nome,
            itens: this.itens.map((item) => item.salvar()),
        };
    }
}
// Criando objetos
const espada = new Espada("Espada de Fogo", 50);
const bau = new Bau("Bau do Tesouro");
bau.adicionarItem(new Espada("Espada de Gelo", 40));
bau.adicionarItem({ salvar: () => ({ tipo: "Poção", nome: "Poção de Cura", raridade: "Comum" }) });
// Lista de itens (tratados uniformemente)
const objetos = [espada, bau];
// Salvar todos os objetos
try {
    const dadosParaSalvar = objetos.map((objeto) => objeto.salvar());
    fs_1.default.writeFileSync("objetos_composite.json", JSON.stringify(dadosParaSalvar, null, 2));
    console.log("Objetos salvos com sucesso!");
}
catch (error) {
    console.error("Erro ao salvar objetos:", error);
}
