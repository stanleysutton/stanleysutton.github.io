particlesJS.load('particles-js', 'particles.json', function () {
  console.log('particles.js loaded!');
});

function toggleJob(card) {
  card.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('applicationForm');
  const cooldownMessage = document.getElementById('cooldownMessage');
  const submitButton = document.getElementById('submitButton');

  const COOLDOWN_HOURS = 24;
  const lastSubmission = localStorage.getItem('lastSubmissionTime');
  const now = Date.now();

  if (lastSubmission && now - parseInt(lastSubmission) < COOLDOWN_HOURS * 60 * 60 * 1000) {
    cooldownMessage.style.display = 'block';
    submitButton.disabled = true;
    submitButton.style.opacity = 0.6;
    submitButton.textContent = '⏳ Cooldown Active';
    form.addEventListener('submit', (e) => e.preventDefault());
  } else {
    form.addEventListener('submit', () => {
      localStorage.setItem('lastSubmissionTime', Date.now().toString());
    });
  }
});
