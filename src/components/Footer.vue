<template>
 <footer>
    <div class='footer__container'>
        <div class='footer__tag'>
            <p>Made with <i class="fab fa-vuejs"></i> and <i class="far fa-heart"></i> by Dave Novak &copy 2018</p>
        </div>
        <div class='footer__social'>
            <a href='https://github.com/novakdr' target='_blank' rel='noopener noreferrer'><i class="fab fa-github"></i></a>
            <a href='https://www.linkedin.com/in/novakdr' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin-in"></i></a>
            <a href='https://docs.google.com/document/d/1nt5sAai5CdDBq_g6vRmD3wAPZjSAAWMWepVknfpJZMs/edit?usp=sharing' target='_blank' rel='noopener noreferrer'><i class="far fa-file"></i></a>
            <a href='https://www.instagram.com/lhommeabsurde/' target='_blank' rel='noopener noreferrer'><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    display: flex;
    align-items: center;
    background: var(--body-color);
    color: white;
    font-family: var(--body-font);
    height: 10rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: -9999;
}

.footer__tag {
    font-size: 1.4rem; 
    opacity: .7;
}

.fa-heart {
    color: var(--accent-color);
}

.fa-vuejs {
    color: #64b587;
}

.footer__container {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.footer__social {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
    opacity: .7;
}

.footer__social > a {
    text-decoration: none;
    color: white;
}

.footer__social > a:hover {
    color: var(--accent-color);
    cursor: pointer;
    transition: all .5s;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    footer {
        height: 12rem;
    }

    .footer__container {
        flex-direction: column;
    }

    .footer__tag {
        display: none;
    }

    .footer__social {
        width: 90vw;
        font-size: 2.8rem;
        justify-content: space-around;
    }

    .footer__social > p {
        margin: 0;
    }
}

/* IPAD QUERIES */
@media screen and (min-width: 768px) and (max-width: 1366px) {

    .footer__container {
        flex-direction: column;
    }

    .footer__tag {
        display: none;
    }

    .footer__social {
        width: 90vw;
        font-size: 3rem;
        justify-content: space-around;
    }

    .footer__social > p {
        margin: 0;
    }

}
</style>