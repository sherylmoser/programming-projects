
for (let i = 0; i < 16; i++) {
    $('#boxContainer').append('<canvas class="boxes" width="125" height="125"></canvas>');
}

$('.boxes').on('click', function() {
    $(this).toggleClass('clickedBox')
})