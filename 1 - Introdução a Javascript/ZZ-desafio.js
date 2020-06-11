    //Lista feita no início dos estudos.
    //Exercício 1
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    }
    function mostraEnderecoExerc1(){
        alert("O usuário mora em "  
            +endereco.cidade+" / "
            +endereco.uf+", no bairro "
            +endereco.bairro+", na rua "
            +endereco.rua+" no nº "
            +endereco.numero+"."
        )
    }
    //Exercício 2
    function mostraParExerc2(){
        var x = document.getElementById('numero1').value;
        var y = document.getElementById('numero2').value;
        if (x==y){
            console.log("Os números são iguais seu Bocó!");
        }else if( x < y ){
            for(var p=x; p<=y; p++){
                (p % 2)==0? console.log(p+" é par!"):'';
              //console.log(p+" "+result);
            }
        }else{
            for(var p=y; p<=x; p++){
                (p % 2)==0? console.log(p+" é par!"):'';
            }
        }
    }
    //Exercício 3
    function temHabilidadeExerc3() {
        tentativa = "Javascaript";
        var skills = ["Javascript", "ReactJS", "React Native"];
        console.log((skills.indexOf(tentativa)>=0)?"Tem "+tentativa : "Não tem "+tentativa);
    }

    //Exercício 4

    function descobreNivelExerc4() {
        var anos = document.getElementById('anosExperiencia').value;
        if(anos<=1){
            console.log(anos+" anos de experiencia é Iniciante")
        }else if(anos<=3){
            console.log(anos+" anos de experiencia é Intermediário")
        }else if(anos<=7){
            console.log(anos+" anos de experiencia é Avançado")
        }else if(anos>7){
            console.log(anos+" anos de experiencia é Jedi")
        }
    }

    //Exercício 5
    var usuarios = [
    {
    nome: "Jorge",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Camila",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];
    function mostraHabilidadesExerc5(){
        dev = document.getElementById('usuario').value;
        for ( var usuario of usuarios ){
            var devNome = usuario.nome;
            var devHabilidade = usuario.habilidades.join();
            if (devNome == dev){
                alert("O dev "+devNome+" possue as seguintes habilidades: "+devHabilidade+".");
            }
    }
    }
