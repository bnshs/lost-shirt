$('.futbolka__link').on('click', function(e) {
    e.preventDefault()
    $('.futbolka__link').removeClass('futbolka__link--active')
    $('.information__general').removeClass('information__general--show')
    $(this).addClass('futbolka__link--active')
    $($(this).attr('href')).addClass('information__general--show')
})