<template>
    <div class="resume-page">
        <div class="resume" id="resume">
            <aside class="aside">
                <div class="avatar-holder">
                    <img src="@/assets/images/avatar.jpg" alt="serhii avatar" />
                </div>

                <!-- <span class="positon">FRONT-END DEVELOPER</span> -->

                <div class="list-wrapper">
                    <h1 class="h1">
                        Сергій<br />
                        Демчишин
                    </h1>
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
                    <h3 class="h3">Контактна інформація</h3>
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
                    <!-- <h3 class="block-title"></h3> -->
                    <h4 class="sub-title">Вміння</h4>
                    <ul class="list">
                        <li class="list-item">
                            Впевнений користувач ПК, Microsoft Office, Adobe Photoshop, Figma, Adobe
                            InDesign, Adobe XD. Пошукова оптимізація (SEO), HTML, CSS. Знання
                            хостингів WordPress, Бітрікс, OpenCart. Редагування статей, фотографій.
                            Знання програми Canva. Вміння швидко навчатись і
                            розбиратис/самонавчатись в нових технологіях. Англійська рівня A2.
                        </li>
                    </ul>
                </div>
                <div class="info-block">
                    <h3 class="block-title">Досвід</h3>
                    <div class="job-block">
                        <h4 class="job-position">верстальник сайтів</h4>
                        <span class="job-company">nta</span>
                        <div class="job-dates">04.2020 - 12.2022</div>
                        <div class="text-holder">
                            <p>
                                Верстка сторінок для сайту використовуючи HTML, CSS, та їх
                                поптимізація (SEO).
                            </p>
                        </div>
                    </div>

                    <div class="job-block">
                        <h4 class="job-position">Редактор сайту</h4>
                        <span class="job-company">1news</span>
                        <div class="job-dates">01.2019 - 04.2020</div>
                        <div class="text-holder">
                            <p>
                                Пошукова оптимізація, перевірка та редагування контенту, додавання
                                статей, оедагування фотографій, seo оптимізація та просування сайту,
                                модерація відгуків, адміністрація груп у соцмережах.
                            </p>
                        </div>
                    </div>
                    <div class="job-block">
                        <h4 class="job-position">Адміністратор сайту</h4>
                        <span class="job-company">zerkalo</span>
                        <div class="job-dates">01.2018 - 01.2019</div>
                        <div class="text-holder">
                            <p>
                                Пошукова оптимізація, перевірка та редагування контенту, додавання
                                статей, оедагування фотографій, seo оптимізація та просування сайту,
                                модерація відгуків, адміністрація груп у соцмережах. Покращення
                                показників сайту.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="info-block">
                    <h3 class="block-title">Освіта</h3>
                    <div class="job-block">
                        <h4 class="job-position">Львівський торговельно-економічний університет</h4>
                        <div class="job-dates">2015-2017</div>
                        <div class="text-holder">
                            <p>Магістр товарознавства та торговельного підприємництва</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.resume-page {
    max-width: 870px;
    line-height: 1.4;
}
</style>
