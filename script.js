const headerSame = () => {
    const header = document.querySelector(`.header__compound`);
    window.onscroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('header__compound-active');
      } else {
        header.classList.remove('header__compound-active');
      }
    };
  };
  headerSame();