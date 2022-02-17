"use strict"
let btngo = document.getElementById('btngo')
let option = document.getElementById('option')
let overlay = document.getElementById('overlay')
let nav = document.getElementById('nav')
let backtotop = document.getElementById('backtotop')
let btndownload = document.querySelector(".btndownload")
let downloadicon = document.querySelector(".btndownload i")
let btnform = document.querySelector(".btnform")
let msgForm = document.getElementById('message')
let btnformtext = document.querySelector(".btnform p")
let btnformicon = document.querySelector(".btnform i")
const scriptURL = 'https://script.google.com/macros/s/AKfycbx32DabYp3T4MYXjYMpaRX3GUpm5IO9Io9GYrZH3pvZ7zEd9-FPYvDXGmWHFV01k4qE1A/exec'
const form = document.forms['submit-to-google-sheet']
gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.onscroll = function () {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        gsap.to("#nav", { opacity: 0, duration: .3, ease: 'power1.out' })
    } else {
        gsap.to("#nav", { opacity: 1, duration: .3, ease: 'power1.out' })
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backtotop.style.opacity = '1'
    } else {
        backtotop.style.opacity = '0'
    }
}

party.confetti(runButton, {
    count: party.variation.range(30, 40),
});

function submitToForm() {
    if (msgForm.value == '') {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                form.reset()
                let tl = gsap.timeline()
                tl.set(btnformtext, { y: -100, text: 'Why no message :(' })
                    .to(btnformtext, { y: 0 })
                    .to(btnformtext, { y: -100, delay: 3, duration: 1 })
                    .set(btnformtext, { y: 100, duration: .5 })
                    .set(btnformicon, { display: 'block', x: 0, y: 100 })
                    .to(btnformicon, { y: 0 })
                    .to(btnformtext, { y: 0, text: "Send Message", onComplete: () => btnform.disabled = false }, "-=.5")

            })
            .catch(error => {
                let tll = gsap.timeline()
                tll.set(btnformtext, { y: -100, text: 'Failed :( Click to try again.' })
                    .to(btnformtext, { y: 0, onComplete: () => btnform.disabled = false })
            })
    }
    else {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                form.reset()
                let tl = gsap.timeline()
                tl.set(btnformtext, { y: -100, text: 'Success! :)' })
                    .to(btnformtext, { y: 0 })
                    .to(btnformtext, { y: -100, delay: 3, duration: 1 })
                    .set(btnformtext, { y: 100, duration: .5 })
                    .set(btnformicon, { display: 'block', x: 0, y: 100 })
                    .to(btnformicon, { y: 0 })
                    .to(btnformtext, { y: 0, text: "Send Message", onComplete: () => btnform.disabled = false }, "-=.5")

            })
            .catch(error => {
                let tll = gsap.timeline()
                tll.set(btnformtext, { y: -100, text: 'Failed :( Click to try again.' })
                    .to(btnformtext, { y: 0, onComplete: () => btnform.disabled = false })
            })
    }
}

btnform.addEventListener("click", function (e) {
    e.preventDefault()
    btnform.disabled = true
    let tl = gsap.timeline()
    tl.to(btnformicon, { x: -5, duration: .5 })
        .to(btnformicon, { x: 600, duration: 1, ease: 'bounce' })
        .to(btnformtext, { x: -10, duration: 1 }, "-=.8")
        .to(btnformtext, { x: 600, duration: 1, ease: 'bounce' }, "-=.8")
        .to(btnformicon, { display: 'none' })
        .to(btnformtext, { x: 0, text: 'Loading...', oncComplete: submitToForm }, "-=.5")
})

btndownload.addEventListener('click', function (e) {
    // e.preventDefault()

    let tl = gsap.timeline()
    tl.to(downloadicon, { y: -10, duration: .5 })
        .to(downloadicon, { y: 50, duration: .7 })
        .to(btndownload, { text: "Success!", duration: 1.3 }, '+=.3')
        .to(btndownload, { text: "Thank you :)", duration: 1.3 }, '+=.3')
        .to(btndownload, { disabled: true })
})


function loading() {

    function wordss() {
        let tlwords = gsap.timeline({ repeat: -1 })

        tlwords.to(".ganti2", { text: "Tulus Anugrah Ibrahim.", duration: 1.7, repeat: 1, yoyo: true, repeatDelay: 1 })
            .to(".ganti2", { text: "a Student.", duration: 1, repeat: 1, yoyo: true, repeatDelay: 1 })
            .to(".ganti2", { text: "a Developer.", duration: 1, repeat: 1, yoyo: true, repeatDelay: 1 })
        // .to(".ganti2", { text: "a Designer.", duration: 2, repeat: 1, yoyo: true })
    }

    gsap.timeline()
        .to("#desc", { visibility: 'visible', duration: .1 })
        .to("#title span", { text: "Welcome.", duration: 1.7 })
        .from("#nav #link", { opacity: 0 })
        .from("#photo", { opacity: 0, y: -70, duration: 1 }, '-=.1')
        .from("#name div", { opacity: 0, x: 50, duration: 1.2, ease: 'sine.out' }, '-=.8')
        .from("#btngo", { opacity: 0, y: 50, duration: .7 }, '-=1')
        .to(".bigtitle", { opacity: 1, duration: 1, onComplete: wordss }, '-=.2')
        .to("#title span", { text: "to the", duration: 1.5, delay: .3 })
        .to("#title span", { text: "Portfolio.", duration: 2 })
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
        start: 'top 50%', //when the top of trigger(#wrapperproject) hits 60% down from the top of viewport
    },
    opacity: 0,
    stagger: {
        each: .3,
        // from: "random"
    },
    duration: .3
})

gsap.from(".logo", {
    scrollTrigger: {
        trigger: '#wrapperlogo',
        start: 'top 70%', //when the top of trigger hits 60% down from the top of viewport
    },
    opacity: 0,
    stagger: .3,
    duration: .5
})

gsap.from("#logocontact a", {
    scrollTrigger: {
        trigger: "#contact",
        start: 'center 100%'
    },
    stagger: {
        each: .4
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