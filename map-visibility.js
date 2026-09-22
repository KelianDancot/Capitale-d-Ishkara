(() => {
  const mapScreen = document.getElementById('map-screen');
  const actions = document.querySelector('.top-actions');
  const synopsis = document.getElementById('lore-button');
  if (!mapScreen || !actions || !synopsis) return;

  const STORAGE_KEY = 'ishkara_map_ui_opacity';
  const stored = Number(localStorage.getItem(STORAGE_KEY));
  const initial = Number.isFinite(stored) && stored >= 0 && stored <= 100 ? stored : 100;

  const control = document.createElement('div');
  control.className = 'map-visibility-control';
  control.id = 'map-visibility-control';
  control.innerHTML = `
    <button class="map-visibility-toggle" type="button" aria-label="Masquer les repères de la carte" title="Afficher / masquer les repères">
      <svg data-eye="visible" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"></path>
        <circle cx="12" cy="12" r="2.7"></circle>
      </svg>
      <svg data-eye="hidden" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3l18 18"></path>
        <path d="M9.9 5.3A9.8 9.8 0 0 1 12 5c6 0 9.5 7 9.5 7a17.4 17.4 0 0 1-3.1 3.8"></path>
        <path d="M6.2 6.2C3.9 8 2.5 12 2.5 12s3.5 7 9.5 7a9.7 9.7 0 0 0 3.1-.5"></path>
      </svg>
    </button>
    <input class="map-visibility-slider" type="range" min="0" max="100" step="1" value="${initial}" aria-label="Visibilité des repères de la carte">
  `;

  synopsis.insertAdjacentElement('afterend', control);

  const slider = control.querySelector('.map-visibility-slider');
  const toggle = control.querySelector('.map-visibility-toggle');
  let lastVisibleValue = initial > 5 ? initial : 100;

  function apply(value, persist = true) {
    const normalized = Math.max(0, Math.min(100, Number(value) || 0));
    const opacity = normalized / 100;
    slider.value = String(normalized);
    mapScreen.style.setProperty('--map-overlay-opacity', opacity.toFixed(2));
    mapScreen.classList.toggle('map-ui-nearly-hidden', normalized <= 5);
    control.classList.toggle('is-hidden', normalized <= 5);
    toggle.setAttribute('aria-label', normalized <= 5 ? 'Afficher les repères de la carte' : 'Masquer les repères de la carte');
    if (normalized > 5) lastVisibleValue = normalized;
    if (persist) localStorage.setItem(STORAGE_KEY, String(normalized));
  }

  slider.addEventListener('input', () => apply(slider.value));

  toggle.addEventListener('click', () => {
    const current = Number(slider.value);
    apply(current <= 5 ? lastVisibleValue || 100 : 0);
  });

  function syncVisibility() {
    control.hidden = !mapScreen.classList.contains('active');
  }

  const observer = new MutationObserver(syncVisibility);
  observer.observe(mapScreen, { attributes: true, attributeFilter: ['class'] });

  apply(initial, false);
  syncVisibility();
})();
