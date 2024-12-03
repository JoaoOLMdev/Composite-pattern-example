import fs from "fs";


interface Item {
  salvar(): any;
}

class Espada implements Item {
  constructor(public nome: string, public dano: number) {}

  salvar() {
    return { tipo: "Espada", nome: this.nome, dano: this.dano };
  }
}

class Bau implements Item {
  itens: Item[] = [];

  constructor(public nome: string) {}

  adicionarItem(item: Item) {
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

const espada = new Espada("Espada de Fogo", 50);
const bau = new Bau("Bau do Tesouro");
bau.adicionarItem(new Espada("Espada de Gelo", 40));
bau.adicionarItem({ salvar: () => ({ tipo: "Poção", nome: "Poção de Cura", raridade: "Comum" }) });

const objetos: Item[] = [espada, bau];

try {
  const dadosParaSalvar = objetos.map((objeto) => objeto.salvar());
  fs.writeFileSync("objetos_composite.json", JSON.stringify(dadosParaSalvar, null, 2));
  console.log("Objetos salvos com sucesso!");
} catch (error) {
  console.error("Erro ao salvar objetos:", error);
}
