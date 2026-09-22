(() => {
  const audio = document.getElementById('ambient-music');
  const button = document.getElementById('audio-toggle');
  if (!audio || !button) return;

  const STORAGE_KEY = 'ishkara_audio_muted';
  const preferredMuted = localStorage.getItem(STORAGE_KEY) === 'true';
  audio.volume = 0.24;
  audio.muted = preferredMuted;

  const iconSound = button.querySelector('[data-icon="sound"]');
  const iconMuted = button.querySelector('[data-icon="muted"]');

  function syncButton(animate = false) {
    const muted = audio.muted;
    button.classList.toggle('is-muted', muted);
    button.setAttribute('aria-pressed', muted ? 'true' : 'false');
    button.setAttribute('aria-label', muted ? 'Activer la musique' : 'Couper la musique');
    button.title = muted ? 'Activer la musique' : 'Couper la musique';
    if (iconSound) iconSound.hidden = muted;
    if (iconMuted) iconMuted.hidden = !muted;

    if (animate) {
      button.classList.remove('is-switching');
      void button.offsetWidth;
      button.classList.add('is-switching');
      setTimeout(() => button.classList.remove('is-switching'), 420);
    }
  }

  async function startMusic() {
    if (audio.dataset.started === 'true') return;
    audio.dataset.started = 'true';
    try {
      await audio.play();
    } catch (_) {
      audio.dataset.started = 'false';
    }
  }

  button.addEventListener('click', async () => {
    audio.muted = !audio.muted;
    localStorage.setItem(STORAGE_KEY, String(audio.muted));
    syncButton(true);
    if (!audio.muted) await startMusic();
  });

  const beginOnInteraction = async () => {
    await startMusic();
    document.removeEventListener('pointerdown', beginOnInteraction, true);
    document.removeEventListener('keydown', beginOnInteraction, true);
  };

  document.addEventListener('pointerdown', beginOnInteraction, true);
  document.addEventListener('keydown', beginOnInteraction, true);

  syncButton(false);
})();