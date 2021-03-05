$(document).ready(function() {
    $('div:not(#wrapp)').append('<div class="close">x</div>');
    $('.close').on('click', function(e) {
        $(this).parent().hide();
    });
});