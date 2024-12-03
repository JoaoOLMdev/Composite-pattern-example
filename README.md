### Composite

O Composite é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais

### Exemplo de uso

O padrão Composite fornece a você com dois tipos básicos de elementos que compartilham uma interface comum: folhas simples (onde utilizei em meu codigo itens como exemplo para folha) e contêineres complexos (onde utilizei baús como exemplo para conteiner). Um contêiner pode ser composto tanto de folhas como por outros contêineres. Isso permite a você construir uma estrutura de objetos recursiva aninhada que se assemelha a uma árvore.

### Vantagens

Você pode trabalhar com estruturas de árvore complexas mais convenientemente: utilize o polimorfismo e a recursão a seu favor.

Princípio aberto/fechado. Você pode introduzir novos tipos de elemento na aplicação sem quebrar o código existente, o que agora funciona com a árvore de objetos.

### Desvantagens

Pode ser difícil providenciar uma interface comum para classes cuja funcionalidade difere muito. Em certos cenários, você precisaria generalizar muito a interface componente, fazendo dela uma interface de difícil compreensão.

### Conclusão

O pattern composite funciona muito bem para resolver o problema quando estamos trabalhando com objetos que podem conter outros objetos dentro, seguindo este padrão de arvore mas ele acaba sendo bem engessado por conta de ser feito exclusivamente para utilização de arvores como estrutura, então acaba sendo um pattern com usos bem especificos mas ainda assim resolvendo muito bem o problema que ele fui contruido para solucionar

### Video

https://drive.google.com/file/d/1n_JuY4R1WssbNnVlzTSqMZybW7CBv_tf/view?usp=drive_link
