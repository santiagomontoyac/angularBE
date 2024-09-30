const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const expanded = question.getAttribute('aria-expanded') === 'true' || false;
    question.setAttribute('aria-expanded', !expanded);
    
    const answer = question.nextElementSibling;
    answer.style.display = expanded ? 'none' : 'block';
  });
});
