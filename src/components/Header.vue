<template>
  <div>
    <div class='menu__slideout'>
        <div class='close__wrapper' v-on:click='menuClose'>
            <div class='close__button'></div>
        </div>
        <a v-on:click='aboutClick'>about</a>
        <a v-on:click='projectsClick'>projects</a>
        <a v-on:click='contactClick'>contact</a>
    </div>
    <header class='masthead'>
        <div class='icon__wrapper' v-on:click='menuOpen'>
            <div class='icon'></div>
        </div>
        <div class='title'>
            <h1>Dave Novak</h1>
        </div>
        <div class='subtitle'>
            <h3>frontend developer</h3>
        </div>
    </header>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        menuOpen: function() {
        document.querySelector('.menu__slideout').classList.add('right');
        },
        menuClose: function () {
            document.querySelector('.menu__slideout').classList.remove('right');
        },
        aboutClick: function () {
            document.getElementById('about').scrollIntoView({behavior: 'smooth'});
            document.querySelector('.menu__slideout').classList.remove('right');
        },
        projectsClick: function() {
            document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
            document.querySelector('.menu__slideout').classList.remove('right');
        },
        contactClick: function() {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            document.querySelector('.menu__slideout').classList.remove('right');
        }
    }
}
</script>

<style scoped>
.masthead {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/img/background.gif');
    background-attachment: fixed;
    position: relative;
    height: 43.75rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: .92;
    z-index: 1;
}

.title {
width: 31.25rem;
margin: 0 auto;
}

.title > h1 {  
    font-family: var(--header-font), sans-serif;
    color: rgba(255, 255, 255, 1);
    font-size: 8rem;
    margin: 0;
    z-index: 9999;
}
    
.subtitle {
    width: 31.25rem;
    margin: 0 auto;
}

.subtitle > h3 {
    display: flex;
    justify-content: flex-end;
    font-family: var(--body-font);
    font-weight: 300;
    font-size: 1.6rem;
    color: var(--accent-color);
    margin: 0;
}

/* HAMBURGER MENU  STYLES */
.icon__wrapper {
    position: absolute;
    top: 1.25rem;
    right: 1.56rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 1;
}

.icon__wrapper .icon, 
.icon__wrapper .icon:before, 
.icon__wrapper .icon:after {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    background-color: white;
    position: relative;
    transition: all .3s ease-in-out;
}

.icon__wrapper .icon:before {
    top: 10px;
}

.icon__wrapper .icon:after {
    bottom: 12px;
}

.icon__wrapper:hover .icon {
    width: 100%;
    background: var(--accent-color);
}
    
.icon__wrapper:hover .icon:before {
    width: 50%;
    transform-origin: left;
    transform: rotate(45deg);
    top: 0;
    background: var(--accent-color);
}

.icon__wrapper:hover .icon:after {
    width: 50%;
    transform-origin: left;
    transform: rotate(-45deg);
    bottom: 50%;
    background: var(--accent-color);
}

/* MENU SLIDEOUT FOR HAMBURGER */
.menu__slideout {
    position: fixed;
    right: -20vw;
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    z-index: 2;
    transition: all .6s ease-in-out;
}

.close__wrapper {
    position: absolute;
    top: 1.56rem;
    left: 1.56rem;
    height: 1.25rem;
    width: 1.25rem;
    display: flex;
    align-items: center;
    margin: .12rem;
    cursor: pointer;
    transition: all .2s ease-in;
}

.close__button,
.close__button:before,
.close__button:after {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    background-color: var(--body-color);
    position: absolute;
    transition: all .3s ease-in-out;
    top: 0;
}

.close__button {
    width: 100%
}

.close__button:before {
    position: absolute;
    right: 0;
    width: 60%;
    transform-origin: right;
    transform: rotate(45deg);
}
    
.close__button:after {
    position: absolute;
    right: 0;
    width: 60%;
    transform-origin: right;
    transform: rotate(-45deg);
}

.close__wrapper:hover {
    cursor: pointer;
}

.close__wrapper:hover .close__button {
    background: transparent;
}

.close__wrapper:hover .close__button:after {
    width: 100%;
    transform-origin: center;
    transform: rotate(45deg);
}

.close__wrapper:hover .close__button:before {
    width: 100%;
    transform-origin: center;
    transform: rotate(-45deg);
}

.menu__slideout > a {
    text-decoration: none;
    font-family: var(--body-font);
    font-size: 1.5rem;
    color: var(--body-color);
}

.menu__slideout > a:hover {
    cursor: pointer;
}

/* SLIDE STYLING FOR MENU */
.right {
    right: 0;
}

/* PHONE MEDIA QUERY */
@media screen and (min-width: 320px) and (max-width: 480px) {
    .masthead {
        height: 100vh;
    }

    .title {
        width: 75vw;
    }

    .title > h1 {
        font-size: 5rem;   
    }

    .subtitle {
        width: 75vw;
    }

    .subtitle > h3 {
        font-size: 1.28rem;
    }

    .icon__wrapper {
        height: 35px;
        width: 35px;
    }

    .icon__wrapper .icon, 
    .icon__wrapper .icon:before, 
    .icon__wrapper .icon:after {
        height: 2px;
    }

    .icon__wrapper .icon:before {
        top: 8px;
    }

    .icon__wrapper .icon:after {
        bottom: 10px;
    }

    .menu__slideout {
        width: 100vw;
        right: -100vw;
    }

    .close__button,
    .close__button:before,
    .close__button:after {
        height: 2px;
    }

    .right {
        right: 0;
    }
}

/* IPAD MEDIA QUERIES */
@media screen and (min-width: 768px) and (max-width: 1366px) {
    .menu__slideout {
        width: 40vw;
        right: -40vw;
        height: 43.75rem;
    }

    .right {
        right: 0;
    }
}
</style>
