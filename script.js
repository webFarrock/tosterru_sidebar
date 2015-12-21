var baseUrl         = document.querySelector('a.user-panel__user-name').getAttribute('href');
var inserAfterEl    = document.querySelector('.layout__navbar');

if(baseUrl && inserAfterEl){

    var additionLinks = [
        {
            'name': 'Мои подписки',
            'link': baseUrl + '/iquestions'
        },
        {
            'name': 'Мои вопросы',
            'link': baseUrl + '/questions'
        },
        {
            'name': 'Мои ответы',
            'link': baseUrl + '/answers'
        },
        {
            'name': 'Мои теги',
            'link': baseUrl + '/tags'
        },
    ];
    
    var additionalLinksHtml = '<ul class="main-menu">';

    additionLinks.forEach(function(item) {
        additionalLinksHtml += '<li class="main-menu__item"><a style="padding-left:54px;" class="main-menu__link" href="'+item.link+'">'+item.name+'</a></li>';
    });
    additionalLinksHtml += '</ul>';

    inserAfterEl.insertAdjacentHTML("beforeEnd", additionalLinksHtml);
}

