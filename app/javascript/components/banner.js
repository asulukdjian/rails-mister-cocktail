import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["your cocktail Bible"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
