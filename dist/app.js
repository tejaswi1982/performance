const media = [...document.querySelectorAll('video, audio')];
const pauseAll = (except) => media.forEach(item => { if (item !== except) item.pause(); });
media.forEach(item => item.addEventListener('play', () => pauseAll(item)));
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseAll(); });
window.addEventListener('pagehide', () => pauseAll());
document.querySelectorAll('a').forEach(link => link.addEventListener('click', () => pauseAll()));
