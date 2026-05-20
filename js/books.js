/* ============================================
   VIDYANKUR — Books page interactions
   - Catalog filter tabs (All / Individual / Bundle / School)
   - "Peek Inside" modal open/close
   ============================================ */

(function () {
  // ----- Filter tabs -----
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.catalog-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });

  // ----- Peek Inside modal -----
  const modal = document.getElementById('peekModal');
  const peekTitle = document.getElementById('peekTitle');
  const peekButtons = document.querySelectorAll('.peek-btn');

  // Maps data-book attribute to a friendly title
  const titles = {
    shivaji: 'Inside · Chhatrapati Shivaji Maharaj',
    prithviraj: 'Inside · Samrat Prithviraj Chauhan',
    pratap: 'Inside · Maharana Pratap',
    bundle: 'Inside · The Mighty Kings of India'
  };
  const bookImages=
  {
    shivaji:{
      rhyme:'assets/shivaji-peekinside/rhyme.png',
      coloring:'assets/shivaji-peekinside/coloring-page.png',
      activity:'assets/shivaji-peekinside/activity.png',
      reward:'assets/shivaji-peekinside/certificate.png'
    },
    pratap:{
      rhyme:'assets/maharana-peekinside/rhyme.png',
      coloring:'assets/maharana-peekinside/coloring-page.png',
      activity:'assets/maharana-peekinside/activity.png',
      reward:'assets/maharana-peekinside/certificate.png'
    }
  }

  function openModal(book) {
    if (!modal) return;
  
  // 1. Update the Title dynamically
  if (peekTitle && titles[book]) {
    peekTitle.textContent = titles[book];
  }

  // 2. Update the Images dynamically
  if (bookImages[book]) {
    document.querySelector('.peek-page-rhyme').style.backgroundImage = `url('${bookImages[book].rhyme}')`;
    document.querySelector('.peek-page-coloring').style.backgroundImage = `url('${bookImages[book].coloring}')`;
    document.querySelector('.peek-page-activity').style.backgroundImage = `url('${bookImages[book].activity}')`;
    document.querySelector('.peek-page-learned').style.backgroundImage = `url('${bookImages[book].reward}')`;
  }
  
  // Open the modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  peekButtons.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.book));
  });

  // Click anywhere with data-close (backdrop or × button) closes the modal
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();
