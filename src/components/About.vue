<template>
<section class='about__section' id='about'>
    <div class='about__header'>
        <h1>about</h1>
    </div>
    <div class='about__container'>
        <img src='../assets/img/avatar.png' alt='a cartoon drawing of the developer'/>
        <div class='about__blurb'>
            <p>I'm a frontend developer with a big hint of social media wizardry on the side. Super passionate about bringing people's ideas to life and creating awesome experiences for everyone.</p>
            <p>I really enjoy building real world things that people can interact with.</p>
            <p>No, I don't play basketball, but I do enjoy it. Yes, I will get you that thing in that high place -- just ask nicely.</p>
            <p>When I'm not coding, you can usually find me hanging out with my fiancee and our cat, enjoying/losing most video and tabletop games, reading comics, discussing philosophical implications of various pop culture stuff, and following all sorts of different (e)Sport leagues.</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
.about__section {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/img/background.gif');
    background-attachment: fixed;
    font-family: var(--body-font);
    height: 47rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.about__header {
    text-transform: uppercase;
    margin-top: 2.5rem;
}

.about__header > h1 {
    font-weight: 700;
    font-size: 2.5rem;
}

.about__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin-top: 2rem;
}

.about__container > img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
}

.about__blurb {
    width: 45rem;
    font-size: 1.4rem;
    line-height: 1.8;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .about__section {
        height: 68.5rem;
        text-align: center;
    }

    .about__header > h1 {
        font-size: 2rem;
    }

    .about__container {
        display: flex;
        flex-direction: column;
    }

    .about__container > img {
        height: 10rem;
        width: 10rem;
        margin-bottom: 1.7rem;
    }

    .about__blurb {
        text-align: center;
        width: 85vw;
        font-size: 1.15rem;
        line-height: 200%;
    }
}

/* IPAD QUERIES */
@media screen and (min-width: 768px) and (max-width: 1366px) {

    .about__section {
        height: 77rem;
    }

    .about__container {
        flex-direction: column;
    }

    .about__container > img {
        height: 14rem;
        width: 14rem;
    }

    .about__blurb {
        width: 34rem;
        font-size: 1.4rem;
        line-height: 2;
        margin-top: 2rem;
        margin-left: 1.7rem;
    }
}
</style>