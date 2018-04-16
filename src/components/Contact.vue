<template>
<section class='contact__section' id='contact'>
    <div class='contact__header'>
        <h1>contact</h1>
    </div>
    <div class='contact__container'>
        <p class='contact__lead'>Shoot me an Email</p>
        <a href='mailto:novakdr23@gmail.com'>novakdr23@gmail.com</a>
    </div>
</section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
.contact__section {
    font-family: var(--body-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 21rem;
    width: 100vw;
    background: white;
    margin: 0 auto;
}

.contact__header {
    text-transform: uppercase;
    margin-top: 2.5rem;
    color: var(--body-color);
}

.contact__header > h1 {
    font-weight: 700;
    font-size: 2.5rem;
}

.contact__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact__lead {
    font-weight: 400;
    font-size: 2rem;
    color: var(--body-color);
    margin: 0;
    margin-bottom: .8rem;
    margin-top: 2rem;
}

.contact__container > a {
    text-decoration: none;
    color: var(--accent-color);
    font-size: 2.8rem;
    font-weight: 400;
}

/* PHONE MEDIA QUERIES */
@media screen and (min-width: 320px) and (max-width: 480px) {

    .contact__section {
        height: 18rem;
    }

    .contact__header > h1 {
        font-size: 2rem;
    }

    .contact__lead {
        font-size: 1.4rem;
    }

    .contact__container > a {
        font-size: 1.7rem;
    }
}    
</style>