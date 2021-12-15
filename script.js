let controller = new ScrollMagic.Controller(); 
// CASE SENSTITIVE
let timeline = new TimelineMax();

timeline
.to('.rock2', 3, {y: -200})
.to('.ja', 3, {y: -100}, '-=3')
.fromTo('.bg', {y: -50}, {y: 0}, '-=3')
.to('.content', 3, {top:'0%'}, '-=3')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration: 3})
.fromTo('.text', {opacity: 0}, {opacity: 1, duration: 2})
.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 2})
.fromTo('.button1', {opacity: 0}, {opacity: 1, duration: 1});

let scene = new ScrollMagic.Scene({
    triggerElement: 'body',
    duration: '160%',
    triggerHook: 0,
})

.setTween(timeline)
.setPin('body')
.addTo(controller);




/////////

function randomVideo() {

    const videos = new Array();

    videos[0] = ("https://youtu.be/PBqgM0FcNRA");
    videos[1] = ("https://youtu.be/pnCZ3BRH92o");
    videos[2] = ("https://youtu.be/gWBG1j_flrg");
    videos[3] = ("https://youtu.be/Ol8eMfmzpe0");
    videos[4] = ("https://youtu.be/rB4zs73hQIQ");
    videos[5] = ("https://youtu.be/QeJ_-LLUbOc");
    videos[6] = ("https://youtu.be/64a15jJqFDk");
    videos[7] = ("https://youtu.be/HSTFlBpNnvk");
    videos[8] = ("https://youtu.be/4IJI6soiQhI");
    videos[9] = ("https://youtu.be/FM7ALFsOH4g");
    videos[10] = ("https://youtu.be/TFjmvfRvjTc");
    videos[11] = ("https://youtu.be/x-qBNbNuYpI");
    videos[12] = ("https://youtu.be/1967zSpJ4j0");
    videos[13] = ("https://youtu.be/WSQeIEx9_8Y");
    videos[14] = ("https://youtu.be/ELsN-su1_t0");
    videos[15] = ("https://youtu.be/GO-LNZI707s");
    videos[16] = ("https://youtu.be/auyXqyhk4lQ");
    videos[17] = ("https://youtu.be/9y_pcdTH1RU");
    videos[18] = ("https://youtu.be/1kJ6RtiuAS4");
    videos[19] = ("https://youtu.be/KnrGMHhnqrw");
    videos[20] = ("https://youtu.be/wWJ5slLEMwU");
    videos[21] = ("https://youtu.be/DpVfF4U75B8");
    videos[22] = ("https://youtu.be/e97tkGJ28yU");
    videos[23] = ("https://youtu.be/GKZ7hUbCHCY");
    videos[24] = ("https://youtu.be/P2y1_zYhIa8");
    videos[25] = ("https://youtu.be/wKRDTUwdVWg");
    videos[26] = ("https://youtu.be/M_lyQ-OCIYs");
    videos[27] = ("https://youtu.be/vW3RYyGVa5M");
    videos[28] = ("https://youtu.be/B0jMPI_pUec");
    videos[29] = ("https://youtu.be/JDG2m5hN1vo");


    let randomsite = Math.floor(Math.random() * videos.length);

    // window.location = videos[randomsite];

    window.open(videos[randomsite]);

};