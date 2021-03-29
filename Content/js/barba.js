function init() {


    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0,
        rotation: 10,
        xPercent: -5,
        yPercent: -50,
        transformOrigin: 'left center',
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, {
            rotation: 10,
            scaleX: 0,
            xPercent: -5
        }, {
            duration: 0.8,
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'Power4.inOut',
            transformOrigin: 'left center'
        });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, {
            duration: 0.8,
            scaleX: 0,
            xPercent: 5,
            rotation: -10,
            transformOrigin: 'right center',
            ease: 'Power4.inOut'
        });
    }
    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });
    barba.init({
        debug: true,
        transitions: [{
            async leave() {
                await loaderIn();

            },
            enter() {
                loaderAway();
            }
        }]
    })

}

window.addEventListener('load', function() {
    init();
});