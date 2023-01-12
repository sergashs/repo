<template>
    <div class="resume-page">
        <div class="resume" id="resume">
            <aside class="aside">
                <div class="avatar-holder">
                    <img src="@/assets/images/avatar.jpg" alt="serhii avatar" />
                </div>
                <h1 class="h1">
                    Serhii <br />
                    Demchyshyn
                </h1>
                <span class="positon">FRONT-END DEVELOPER</span>

                <div class="list-wrapper">
                    <h3 class="h3">PERSONAL PROFILE</h3>
                    <div class="text-holder">
                        <p>
                            I am a 27 years old developer from Lviv. I'm interested in IT and
                            everything in its or bit. I currently aim to learn as much as i can in a
                            work environment, and to further my own abilities in a professional
                            setting.
                        </p>
                    </div>
                </div>

                <!-- <div class="list-wrapper">
                    <h3 class="h3">HOBBIES AND INTERESTS</h3>
                    <ul class="list">
                        <li class="list-item">- bicycling</li>
                        <li class="list-item">- computer games</li>
                        <li class="list-item">- PC building</li>
                        <li class="list-item">- mobile technologies</li>
                    </ul>
                </div> -->

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
                            telegram:
                            <a href="https://t.me/serhii_isnt_alone">@serhii_isnt_alone</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <main class="main">
                <div class="info-block">
                    <h3 class="block-title">SKILLS</h3>
                    <h4 class="sub-title">Programming Skills:</h4>
                    <ul class="list">
                        <li class="list-item">HTML, Canvas</li>
                        <li class="list-item">
                            CSS (SCSS/SaSS), Frameworks: BOOTSTRAP, Tailwind; CSS animations;
                        </li>
                        <li class="list-item">JavaScript, Vue.JS (2,3), Nuxt</li>
                        <li class="list-item">Gsap, ChartJs, Vuelidate</li>
                        <li class="list-item">GIT, Gulp, Npm packages</li>
                        <li class="list-item">Rest API, GraphQL</li>
                    </ul>
                    <h4 class="sub-title">Other Skills:</h4>
                    <ul class="list">
                        <li class="list-item">Adobe Photoshop, Figma, Adobe InDesign, Adobe XD</li>
                        <li class="list-item">A2 - Level of English</li>
                    </ul>
                </div>
                <div class="info-block">
                    <h3 class="block-title">EMPLOYMENT HISTORY</h3>
                    <div class="job-block">
                        <h4 class="job-position">junior frontend developer</h4>
                        <span class="job-company">nta</span>
                        <div class="job-dates">January 2022 - december 2022</div>
                        <div class="text-holder">
                            <p>
                                Developing user-facing applications using Vue.js, building modular
                                and reusable components and libraries.
                            </p>
                        </div>
                    </div>
                    <div class="job-block">
                        <h4 class="job-position">Markup developer</h4>
                        <span class="job-company">eliteit</span>
                        <div class="job-dates">July 2021 - december 2021</div>
                        <div class="text-holder">
                            <p>Creating HTML Pages in HTML5/CSS3 and JavaScript/jQuery.</p>
                        </div>
                    </div>
                    <div class="job-block">
                        <h4 class="job-position">Markup developer</h4>
                        <span class="job-company">CGP Systems</span>
                        <div class="job-dates">March 2021 - July 2021</div>
                        <div class="text-holder">
                            <p>Creating HTML Pages in HTML5/CSS3 and JavaScript/jQuery.</p>
                        </div>
                    </div>
                </div>
                <div class="info-block">
                    <h3 class="block-title">EDUCATIONAL HISTORY</h3>
                    <div class="job-block">
                        <h4 class="job-position">Lviv University of Trade and Economics</h4>
                        <div class="job-dates">2015-2017</div>
                        <div class="text-holder">
                            <p>Master of Commodity and Trade Entrepreneurship</p>
                        </div>
                    </div>
                    <div class="job-block">
                        <h4 class="job-position">CURSOR EDUCATION</h4>
                        <div class="job-dates">Oct 2019 - April 2020</div>
                        <div class="text-holder">
                            <p>FRONT-END EDUCATION</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
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

<style lang="scss" scoped>
.resume-page {
    width: 100%;
    max-width: 970px;

    .resume {
        display: flex;
    }

    .aside {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 40%;
        padding: 40px;
        color: white;
        text-align: right;
        background: #3f626b;

        .avatar-holder {
            width: 150px;
            height: 150px;
            margin-bottom: 50px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 30%;
                border-radius: 50%;
            }
        }

        .h1 {
            margin-bottom: 3px;
            font-size: 30px;
            text-transform: uppercase;
            line-height: 1.1;
        }

        .positon {
            display: block;
            margin-bottom: 30px;
            font-weight: 600;
        }

        .list-wrapper {
            margin-bottom: 30px;

            .h3 {
                margin-bottom: 5px;
                font-weight: 600;
                font-size: 16px;
            }

            .text-holder {
                line-height: 1.5;

                p {
                    margin-bottom: 0;
                }
            }
        }

        .list {
            margin: 0;
            padding: 0;
            list-style: none;

            .list-item {
                &:not(:last-child) {
                    margin-bottom: 5px;
                }
            }
        }

        a {
            color: white;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .main {
        width: 60%;
        padding: 30px;
        color: #737373;
        background: white;

        .info-block {
            margin-bottom: 30px;

            .block-title {
                margin-bottom: 15px;
                font-weight: 600;
                font-size: 16px;
                text-transform: uppercase;
            }

            .sub-title {
                margin-bottom: 5px;
                font-weight: 600;
                color: #3f626b;
                font-size: 15px;
            }

            .list {
                margin: 0 0 20px 0;
                padding: 0;
                list-style: none;

                .list-item {
                    &:not(:last-child) {
                        margin-bottom: 5px;
                    }
                }
            }
        }

        .job-block {
            margin-bottom: 20px;

            .job-position {
                margin-bottom: 3px;
                font-weight: 600;
                color: #3f626b;
                text-transform: uppercase;
            }

            .job-company {
                display: block;
                margin-bottom: 4px;
                text-transform: uppercase;
                text-decoration: underline;
            }

            .job-dates {
                font-style: italic;
                text-transform: uppercase;
                font-size: 14px;
            }

            .text-holder {
                line-height: 1.5;

                p {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
