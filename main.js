$(document).ready(function(){
    document.querySelector('form').addEventListener('click', function(){
    });

    $('form').on('submit', function(e){
        e.preventDefault(); 
        let tarefa = $('input').val()
        if(tarefa){
            let lista = $(".lista")
            let item = `<li>${tarefa}</li>`
            lista.append(item)
            $('input').val('')
        }
    });

    $('li').click(function() {
        $(this).addClass('.feito');
    });
});
