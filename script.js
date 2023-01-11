// SCROLL HEADER
const sideBarSame = () => {
  const sideBar = document.querySelector(`.sideBar__compound`);
  window.onscroll = () => {
    if (window.scrollY > 50) {
      sideBar.classList.add('sideBar__compound-active');
    } else {
      sideBar.classList.remove('sideBar__compound-active');
    }
  };
};

sideBarSame();


(function() {
  const smoothScroll = function(anchor, duration) {
    const headerElHeight = document.querySelector('.sideBar').clientHeight;
    let target = document.querySelectorAll('#anchor');    
    let targetPosition =  target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.scrollY;
    let startTime = null;

    const ease = function(t, b, c, d) {
      t /= d / 1;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function(currentTime) {
      if (startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

  };

  const scrollTo = function() {
    const links = document.querySelectorAll('.link-toGo_same');
 
    links.forEach(link => {    
      link.addEventListener('click', function()  {       
        const currentTarget = link.getAttribute('href');
       

        if (!currentTarget) {
          return
        }

        const [link, anchor] = currentTarget.split('#')

        if (anchor) {
          smoothScroll(anchor, 500);
        }
      });
    });
  };
  scrollTo();
  window.addEventListener('load', () => {
    const anchor = document.querySelector('#anchor');
    if (anchor) {
      smoothScroll(anchor, 500);
    }
  })
}());


window.scrollY
