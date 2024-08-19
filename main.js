$(document).ready(function(){
    document.querySelector('form').addEventListener('click', function(){
    });

    $('form').on('submit', function(e){
        e.preventDefault(); 
        let tarefa = $('input').val()
        let lista = $("lista")
        let item = `<li>${tarefa}</li>`
        $(item).appendTo(lista)
    });

    $('li').click(function() {
        $(this).addClass('feito');
    });

});
