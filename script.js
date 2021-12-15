// scroll magic allows to trigger animations when we scroll, controller to initialise 
// .Controller comes from the scroll magic library
let controller = new ScrollMagic.Controller(); 
// CASE SENSTITIVE
let timeline = new TimelineMax();

// timeline helps to chain all the animations and control them as a whole
// .TimelineMax comes from the gsap library

timeline
    // the first parameter is the element
    // 3 is the duration of the animation
    // timeline lets us to go on with other .to's
    .to('#rock2', 3, {y: -200})
    // -=3 to animate together
    .to('#ja', 3, {y: -100}, '-=3')
    // we are pushing the starting position of bg up and then down to 0, so you can't the background behind the layer
    // .to('#bg', 3, {y: 50}, '-=3')
    .fromTo('#bg', {y: -50}, {y: 0}, '-=3')
    // we are moving content so it covers up the bottom of the layers
    // we are moving the content all the way to the top of the page
    .to('#content', 3, {top:'0%'}, '-=3')
    // from to defines starting point of opacity 0 to opacity 1, and how fast it is 
    .fromTo('#content-images', {opacity: 0}, {opacity: 1, duration: 3})
    .fromTo('.text', {opacity: 0}, {opacity: 1, duration: 2})
    .fromTo('footer', {opacity: 0}, {opacity: 1, duration: 2})
    .fromTo('#button1', {opacity: 0}, {opacity: 1, duration: 1});

// add the scene to a controller - we want to hook this to scrolling
let scene = new ScrollMagic.Scene({
    triggerElement: 'body',
    // duration of the whole scroll, how long you have to scroll to get animations
    duration: '160%',
    // where do you want to trigger animation - we want as soon as we get to the body
    triggerHook: 0,
})

// hook up the animation to the scene
.setTween(timeline)
// we pin to the body so the other content can move on top -  we added position absolute
.setPin('body')
// we add it to the controller
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