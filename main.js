$(document).ready(function(){
    document.querySelector('feito').addEventListener('click', function(){

    })

    $('li').click(function() {
        $(this).addClass('feito');
    });

    $('feito').on('submit', function(e){
        e.preventDefault()
    })
})