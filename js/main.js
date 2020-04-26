function addClassWheniPhone6S() {
    let width = $(window).width();
    let height = $(window).height();
    if (width === 375 && height === 667) {
        document.querySelector('.recommendations div.container').classList.add('iphone6s');
    } else if ((width !== 375 || height !== 667) && document.querySelector('.recommendations div.container').classList.contains('iphone6s')) {
        document.querySelector('.recommendations div.container').classList.remove('iphone6s');
    }
}
addClassWheniPhone6S();