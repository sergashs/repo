<template>
    <div class="resume-page">
        <aside class="aside">
            <div class="avatar-holder">
                <!-- <img src="..." alt="serhii avatar" /> -->
            </div>
            <h1 class="h1">Serhii Demchyshyn</h1>
            <span class="positon">FRONT-END DEVELOPER</span>

            <div class="list-wrapper">
                <h3 class="h3">PERSONAL PROFILE</h3>
                <div class="text-holder">
                    <p>
                        I am a 27 years old developer from Lviv. I'm interested in IT and everything
                        in its or bit. I currently aim to learn as much as i can in a work
                        environment, and to further my own abilities in a professional setting.
                    </p>
                </div>
            </div>

            <div class="list-wrapper">
                <h3 class="h3">HOBBIES AND INTERESTS</h3>
                <ul class="list">
                    <li class="list-item">- bicycling</li>
                    <li class="list-item">- computer games</li>
                    <li class="list-item">- PC building</li>
                    <li class="list-item">- mobile technologies</li>
                </ul>
            </div>

            <div class="list-wrapper">
                <h3 class="h3">CONTACT INFORMATION</h3>
                <ul class="list">
                    <li class="list-item">
                        phone: <a href="tel:+3800632398944">+380 (063) 239 89 44</a>
                    </li>
                    <li class="list-item">
                        mail: <a href="mailto:sergas123456@gmail.com">sergas123456@gmail.com</a>
                    </li>
                    <li class="list-item">
                        telegram: <a href="https://t.me/serhii_isnt_alone">@serhii_isnt_alone</a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="main">
            <div class="info-block">
                <h3 class="block-title">SKILLS</h3>
                <h4 class="sub-title">Programming Skills:</h4>
                <ul class="list">
                    <li class="list-item">HTML</li>
                    <li class="list-item">CSS (SCSS/SaSS);</li>
                    <li class="list-item">CSS Frameworks: BOOTSTRAP, Tailwind,</li>
                    <li class="list-item">CSS animation;</li>
                    <li class="list-item">Gsap</li>
                    <li class="list-item">Canvas</li>
                    <li class="list-item">Gulp</li>
                    <li class="list-item">JavaScript</li>
                    <li class="list-item">Vue.JS (2,3), Nuxt</li>
                    <li class="list-item">GIT</li>
                    <li class="list-item">Rest API, GraphQL</li>
                </ul>
                <h4 class="sub-title">Other Skills:</h4>
                <ul class="list">
                    <li class="list-item">Adobe Photoshop, Figma, Adobe InDesign, Adobe XD</li>
                    <li class="list-item">A2 - Level of English</li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
};
</script>

<style scoped lang="scss">
.resume-page {
    width: 100%;
    max-width: 750px;
    background: white;
}
</style>
