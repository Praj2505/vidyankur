/* ============================================
   VIDYANKUR — Partner Schools city filter
   ============================================ */

(function () {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.school-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.city === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
})();
