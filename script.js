let controller = new ScrollMagic.Controller(); 
// VERY CASE SENSTITIVE
let timeline = new TimelineMax();

timeline
.to('.rock2', 3, {y: -200})
.to('.ja', 3, {y: -100}, '-=3')
.fromTo('.bg', {y: -50}, {y: 0}, '-=3')
.to('.content', 3, {top:'0%'}, '-=3')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration: 3})
.fromTo('.text', {opacity: 0}, {opacity: 1, duration: 2});

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '160%',
    triggerHook: 0,
})

.setTween(timeline)
.setPin('section')
.addTo(controller);