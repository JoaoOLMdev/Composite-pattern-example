import fs from "fs";


class Espada {
  constructor(public nome: string, public dano: number) {}
}

class Bau {
  itens: any[] = [];
  constructor(public nome: string) {}

  adicionarItem(item: any) {
    this.itens.push(item);
  }
}

const espada = new Espada("Espada de Fogo", 50);
const bau = new Bau("Bau do Tesouro");
bau.adicionarItem(new Espada("Espada de Gelo", 40));
bau.adicionarItem({ nome: "Poção de Cura", raridade: "Comum" });

const objetos = [espada, bau];

try {
  fs.writeFileSync("objetos.json", JSON.stringify(objetos, null, 2));
  console.log("Objetos salvos com sucesso!");
} catch (error) {
  console.error("Erro ao salvar objetos:", error);
}
