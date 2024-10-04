const main = document.getElementById("main")
const icon = document.getElementById("icon-btn")
const btn = document.getElementById("btn")
const svg = document.getElementById("svg")


main.addEventListener("mouseenter", function(){
    main.style.width = '70%';
    main.style.background = 'var(--hoverbg)';
    main.style.boxShadow = 'var(--shadowHover)'
    icon.style.background = 'var(--iconBTNhover)';
    svg.style.background = 'var(--iconBTNhover)';
    btn.style.background = 'var(--btnHover)';
})


main.addEventListener("mouseleave", function(){
    main.style.width = '50%';
    main.style.background = 'var(--backgroundColor)';
    main.style.boxShadow = 'var(--shadow)'
    icon.style.background = 'var(--iconBTN)';
    svg.style.background = 'var(--iconBTN)';
    btn.style.background = 'var(--btn)';
})

