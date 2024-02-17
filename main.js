$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const addTarefa = $('#novaTarefa').val();
        
        if(addTarefa.trim() !== '') {
            $('#lista-tarefa').append(`<ul><li><span class='nomeTarefa'> ${addTarefa}</span></li><div class="bttn-tarefa"><button class="bttn-concluido">concluido</button><button class="bttn-excluir">excluir</button></div></ul>`)
        $('#novaTarefa').val('');
        
        }

        $(document).on('click', '.bttn-concluido', function() {
            $(this).closest('ul').find('.nomeTarefa').toggleClass('complete');
        });

        $(document).on('click', '.bttn-excluir', function() {
            $(this).closest('ul').remove();
        })
    })
})