(() => {
  const selectors = ['#kickass-menu', '#kickass-profile-menu', '#kickass-has-been-initialized-yes-yes-yes', '.KICKASSELEMENT', '.planeOpt'];
  const removeGame = () => {
    if (window.KICKASSGAME && typeof window.KICKASSGAME.destroy === 'function') {
      window.KICKASSGAME.destroy();
      window.KICKASSGAME = false;
    }
    document.querySelectorAll(selectors.join(',')).forEach((node) => node.remove());
    document.querySelectorAll('script[src]').forEach((script) => {
      const src = script.src.toLowerCase();
      if (src.includes('plane.js') || src.includes('kickass')) script.remove();
    });
  };
  removeGame();
  new MutationObserver(removeGame).observe(document.documentElement, { childList: true, subtree: true });
})();