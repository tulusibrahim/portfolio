let btngo = document.getElementById('btngo')
let option = document.getElementById('option')
let overlay = document.getElementById('overlay')
let nav = document.getElementById('nav')
let backtotop = document.getElementById('backtotop')
gsap.registerPlugin(ScrollTrigger);

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        gsap.to("#nav", { y: -100, duration: .3, ease: 'power1.out' })
    } else {
        gsap.to("#nav", { y: 0, duration: .3, ease: 'power1.out' })
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backtotop.style.opacity = '1'
    } else {
        backtotop.style.opacity = '0'
    }
}

backtotop.addEventListener('click', function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

gsap.to(".toast", {
    scrollTrigger: {
        trigger: "#wrapperproject",
        start: 'center 80%'
    },
    y: '12vh',
    yoyo: true,
    repeat: 1,
    repeatDelay: 300
})

btngo.addEventListener('click', function () {
    let tl = gsap.timeline()
    tl.to('#btnword', { y: 100, duration: 1, ease: 'power4.in' })
        .to('#btnword', { y: 0, duration: 1, ease: 'power4.in', delay: 1 })
    setTimeout(() => {
        window.location.href = '#wrapperproject'
    }, 1100);
})