(function () {
    const scrollTo = function (anchor) {
        let target = document.querySelectorAll(`#${anchor}`)[0];
        target.scrollIntoView({behavior: "smooth"})
    };

    const smoothScroll = function () {
        const links = document.querySelectorAll('.navigation__menu_item_link');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                const currentTarget = e.currentTarget.href;

                if (!currentTarget) {
                    return
                }

                const [link, anchor] = currentTarget.split('#')

                if (anchor) {
                    scrollTo(anchor, 500);
                }
            });
        });
    };
    window.addEventListener('load', () => {
        smoothScroll();
    })
}());
