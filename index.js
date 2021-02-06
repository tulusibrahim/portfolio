let btngo = document.getElementById('btngo')
let option = document.getElementById('option')
let overlay = document.getElementById('overlay')
let nav = document.getElementById('nav')
let backtotop = document.getElementById('backtotop')
gsap.registerPlugin(ScrollTrigger);

gsap.timeline()
    .from("#photo", { opacity: 0, y: -70, duration: .8 })
    .from("#name", { opacity: 0, x: 50 })
    .from("#btngo", { opacity: 0, y: 50 })



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
    repeatDelay: 3
})

gsap.from(".card", {
    scrollTrigger: {
        trigger: '#wrapperproject',
        start: 'top 50%', //when the top of trigger hits 60% down from the top of viewport
    },
    opacity: 0,
    stagger: {
        each: .3,
        from: "random"
    },
    duration: .3
})

gsap.from(".logo", {
    scrollTrigger: {
        trigger: '#wrapperlogo',
        start: 'top 70%', //when the top of trigger hits 60% down from the top of viewport
    },
    opacity: 0,
    stagger: .2,
    duration: .5
})

gsap.from("#logocontact a", {
    scrollTrigger: {
        trigger: "#contact",
        start: 'center 100%'
    },
    stagger: {
        each: .2,
        from: "edges"
    },
    y: -50,
    opacity: 0,
    duration: .5
})

btngo.addEventListener('click', function () {
    let tl = gsap.timeline()
    tl.to('#btnword', { y: 100, duration: 1, ease: 'power4.in' })
        .to('#btnword', { y: 0, duration: 1, ease: 'power4.in', delay: 1 })
    setTimeout(() => {
        window.location.href = '#wrapperproject'
    }, 1100);
})