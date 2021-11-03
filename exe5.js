/* Agora você precisará criar um componente que possua um botão “criar relatório”. 
Quando acionado o seu programa deverá 
imprimir um relatório de resultados da disciplina javascript para 20 alunos, 
no formato de tabela. 
Mas vamos complicar um pouco ne? 
veja algumas regras adicionais! 
As notas deverão ser números inteiros entre 0 e 100,
criadas aleatoriamente; (dica: use a função math.radom(), dá um google!)
Cada aluno deve ser representado por um registro composto por numero e 
nota Use uma função construtora chamada Aluno. Se você for bem ousado, 
implemente usando classes; Armazene a nota do aluno como uma variável privada do tipo symbol,
use getters e setters para recuperar a informação. Os registros devem ser armazenados em um array;
A impressão do relatório deve ter: Um título; Os resultados mostrados linha a linha no formato 
“Aluno nr xx – Nota yy [(A/RE)PROVADO]”; e Um rodapé com estatística final no formato 
“APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)”. */



class Aluno {
    constructor() {
            this.id = 0;
            this.alunos = new Array();
        }
        // method
    criaAluno() {
            // criar um objeto temp para guadar info alunos
            var alunos = {}
                // info alunos agregando alunos
            alunos.id = this.id;
            this.id++;

            alunos.nota = parseInt(Math.random() * 100);
            this.alunos.push(alunos);
        }
        // metodo que cria vários alunos
    populaSala(tamSala) {
            // inicio , tamanho da sala e a condição querida;
            for (let i = 0; i < tamSala; i++) {
                this.criaAluno();
            }
        }
        // metodo relatorio
    relatorio() {
        for (let i = 0; i < this.alunos.length; i++) {
            // indexar
            // chama o aluno seguido da posição q é [i]
            console.log(this.alunos[i]);
        }
    }

    gerarEstatistica() {
        var aprovados = 0;
        var reprovados = 0;
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].nota >= 60) {
                aprovados++;
            } else {
                reprovados++;
            }
        }

        var porcentagemAprovado = (aprovados / this.alunos.length) * 100;
        var porcentagemReprovado = (reprovados / this.alunos.length) * 100;
        let tbody = document.getElementById("corpoTabela")
        let novaLinha = tbody.insertRow();
        novaLinha.innerText =
            "Aprovado : " + aprovados +
            "(" + porcentagemAprovado + ")%. Reprovados : " + reprovados + "(" + porcentagemReprovado + "%)."

        console.log("*************")
        console.log(aprovados)
        console.log(reprovados)

        console.log(porcentagemAprovado)
        console.log(porcentagemReprovado)

    }
    listarAlunos() {
        let tbody = document.getElementById("corpoTabela")
        tbody.innerText = '';
        // pegando cada elemento da tabela
        this.alunos.forEach(element => {
            let novaLinha = tbody.insertRow();
            let novaColunaId = novaLinha.insertCell();
            let novaColunaNota = novaLinha.insertCell();
            let novaColunaPorcentagem = novaLinha.insertCell();

            novaColunaId.innerText = element.id;
            novaColunaNota.innerText = element.nota;
            if (element.nota < 60) {
                novaColunaPorcentagem.innerText = "Reprovado"
            } else {
                novaColunaPorcentagem.innerText = "Aprovado"
            }
        })
    }
}



var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    var alunosNotas = new Aluno()

    alunosNotas.populaSala(20);
    alunosNotas.relatorio();
    alunosNotas.listarAlunos();
    alunosNotas.gerarEstatistica();

})