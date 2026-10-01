(() => {
  try {
    const progress = JSON.parse(localStorage.getItem('ishkara_progress'));
    if (!progress?.tribe || !progress?.clan) return;
    if (!tribes?.[progress.tribe]?.clans?.[progress.clan]) return;
    renderDossier(progress.tribe, progress.clan);
  } catch (_) {}
})();