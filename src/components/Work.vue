<template>
<section class='work__section' id='projects'>
    <div class='section__header'>
        <h1>projects</h1>
    </div>
    <div class='work__card'>
        <div class='work__card-header'>
            <h3>
                <a href='http://lets-find.herokuapp.com' target='_blank' rel="noopener noreferrer">Let's Find</a>
            </h3>
        </div>
        <div class='work__card-body'>
            <p>Lost and found app connecting people to their lost items through community interactivity.</p>
            <p><span class='built'>Built with:</span> NodeJS, MySQL, Google API, and deployed to Heroku.</p>
        </div>
    </div>
    <hr>
    <div class='work__card'>
        <div class='work__card-header'>
            <h3>
                <a href='https://friend-finder-dave.herokuapp.com' target='_blank' rel="noopener noreferrer">Friend Finder</a>
            </h3>
        </div>
        <div class='work__card-body'>
            <p>Friend matching app that connects you to your bestest science friends.</p>
            <p><span class='built'>Built with:</span> NodeJS, MySQL, Skeleton, and deployed to Heroku.</p>
        </div>
    </div>
    <hr>
    <div class='work__card'>
        <div class='work__card-header'>
            <h3>
                <a href='https://novakdr.github.io/giftastic/' target='_blank' rel="noopener noreferrer">Showtastic Gifinimation</a>
            </h3>
        </div>
        <div class='work__card-body'>
            <p>Gif delivery app that provides only the best television gifs of your choosing.</p>
            <p><span class='built'>Built with:</span> Giphy API.</p>
        </div>
    </div>
    <hr>
    <div class='work__card'>
        <div class='work__card-header'>
            <h3>
                <a href='https://github.com/novakdr/burger' target='_blank' rel="noopener noreferrer">Eat-Da-Burger</a>
            </h3>
        </div>
        <div class='work__card-body'>
            <p>Burger naming app that updates user input in realtime.</p>
            <p><span class='built'>Built with:</span> NodeJS, Handlebars, Bulma, and MySQL.</p>
        </div>
    </div>
    <hr>
    <div class='work__card'>
        <div class='work__card-header'>
            <h3>
                <a href='https://github.com/novakdr/bamazon' target='_blank' rel='noopener noreferrer'>Bamazon</a>
            </h3>
        </div>
        <div class='work__card-body'>
            <p>CLI faux storefront that a user can purchase items from and that manager can update stock.</p>
            <p><span class='built'>Built with:</span> NodeJS, MySQL, and Inquirer.</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Work'
}
</script>

<style scoped>
.work__section {
    font-family: var(--body-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 73rem;
    width: 100vw;
    background: white;
    margin: 0 auto;
}

.section__header {
    text-transform: uppercase;
    margin-top: 2.5rem;
    color: var(--body-color);
}

.section__header > h1 {
    font-weight: 700;
    font-size: 2.5rem;
}

hr {
    display: none;
    border: 1px solid rgb(211,211,211);
    width: 50vw;
    margin: 2rem 0;
}

.work__card {
    width: 60vw;
    margin: 0 auto;
    margin-top: 2rem;
}

.work__card-header > h3 {
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
}

.work__card-header > h3 > a {
    text-decoration: none;
    color: var(--accent-color);
    font-weight: 600;
}

.work__card-body {
    color: var(--body-color);
    font-size: 1.4rem;
}

.built {
    font-weight: 600;
}

/* PHONE MEDIA QUERY */
@media screen and (min-width: 320px) and (max-width: 480px) {
    
    .work__section {
        height: 105rem;
    }

    .section__header > h1 {
        font-size: 2rem;
    }

    hr {
        display: block;
    }
    
    .work__card {
        width: 85vw;
    }

    .work__card-header > h3 {
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .work__card-body {    
        font-size: 1.15rem;
        margin-left: .5rem;
        line-height: 175%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .work__section {
        height: 86.5rem;
    }

    .work__card {
        width: 80vw;
        margin-left: 6rem;
    }

    .work__card-body {    
        line-height: 150%;
    }

}
</style>