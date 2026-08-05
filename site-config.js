// Single source of truth for site-wide values. Edit here to update everywhere.
const CV_URL = "https://drive.google.com/file/d/1J9cAR4VtlBJ6sPhvgyPAr4axlP-jATjj/view?usp=sharing";
const CONTACT_EMAIL = "alireza.modirshanechi@gmail.com";

document.querySelectorAll('[data-cv-link]').forEach(el => { el.href = CV_URL; });
document.querySelectorAll('[data-contact-email]').forEach(el => { el.href = `mailto:${CONTACT_EMAIL}`; });
document.querySelectorAll('[data-contact-email-text]').forEach(el => { el.textContent = CONTACT_EMAIL; });

document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (a.hostname !== location.hostname) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});
