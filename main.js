$(document).ready(function(){
    document.querySelector('form').addEventListener('click', function(){
    });

    $('form').on('submit', function(e){
        e.preventDefault(); 
        let tarefa = $('input').val()
            let lista = $(".lista")
            let item = `<li>${tarefa}</li>`
            $(item).appendTo(lista)
            $('input').val('')
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('feito');
    });
});
