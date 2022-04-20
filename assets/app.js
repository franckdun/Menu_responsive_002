let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

let tl = gsap.timeline();

toggle.addEventListener('click', function () {
    if (body.classList.contains('open')) {
        //Fermer le menu;
        body.classList.remove('open');
        tl.to('.sep', {
            duration: 0,
            height: 0
        })

        tl.to('.sep_icon', {
            duration: 0,
            opacity: 0
        })
    }
    else {
        //Ouvrir le menu.
        body.classList.add('open');

        tl.to('.sep', {
            duration: 0.75,
            height: '100%',
            delay: 0.5
        });

        tl.to('.sep_icon', {
            opacity: 1,
            duration: 0.25,
            delay: -0.5
        })

        tl.from('.menu_left_inner_item', {
            y: 40,
            opacity: 0,
            stagger: 0.30
        }, "<-0.5")

        tl.from('.menu_right_inner_item', {
            y: 40,
            opacity: 0,
            stagger: 0.30
        }, "<0.5")
    }
})
