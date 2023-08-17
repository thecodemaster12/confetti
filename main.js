const jsConfetti = new JSConfetti()

const confetti = document.getElementById('confetti');

confetti.addEventListener('click', () => {
    jsConfetti.addConfetti({
        confettiColors: ['red', 'green'],
        confettiRadius: 10,
        confettiNumber: 500,
        // emojis: ['']
    })
})