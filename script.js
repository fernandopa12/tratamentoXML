$('button#btn').click(function(){
    
    carregarDados();
    $('div#listagem').css('display','block');
    
})

$('button#btn-esconder').click(function(){
    $('div#listagem').css('display','none');
})

function carregarDados() {

    $.ajax({
        url: '_xml/produtos.xml'
    }).then(sucesso, falha);
    function sucesso(arquivo) {
        var elemento;
        elemento = "<ul>";
        $(arquivo).find('produto').each(function () {
            var nome = $(this).find('nomeproduto').text();
            var tempoentrega = $(this).find('tempoentrega').text();
            elemento += "<li class='nome'>" + nome + "</li>";
            elemento += "<li class='tempoentrega'>" + tempoentrega + "</li>";
        });

        elemento += "</ul>";

        $('div#listagem').html(elemento);
    }
    function falha() {

    }
}