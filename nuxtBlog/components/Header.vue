<template>
  <div class="header">
    <div class="container-fluid">
      <div class="inner-holder">
        <strong class="logo">
          <a href="#">Serhii D.</a>
        </strong>
        <nav>
          <ul class="main-menu">
            <li><router-link to="/">home</router-link></li>
            <li><a href="#">projects</a></li>
            <li><router-link to="/about">about</router-link></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
        <a
          class="open-menu d-xl-none"
          href="#"
          :class="{ open: menuOpen }"
          @click.prevent="openMenu()"
        >
          <span></span>
          <span></span>
          <span class="sr-only">Open Mobile Nav</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) {
        document.body.classList.add('menu-opened')
      } else {
        document.body.classList.remove('menu-opened')
      }

      this.fadeInterval()
    },
    fadeInterval() {
      const menuLinks = document.querySelectorAll('.main-menu li')

      function animate() {
        menuLinks.forEach((element, i) => {
          if (document.body.classList.contains('menu-opened')) {
            setTimeout(function () {
              element.classList.add('animate-fade')
            }, i * 300)
          } else {
            setTimeout(function () {
              element.classList.remove('animate-fade')
            }, i * 100)
          }
        })
      }
      setTimeout(animate(), 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  .inner-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.7rem 0;
    border-bottom: 0.1rem solid $porcelain;
  }

  .logo {
    font-family: $syncopate;
    font-weight: 700;
    font-size: 2.4rem;

    a {
      text-decoration: none;
    }
  }

  nav {
    @include media-breakpoint-down(lg) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $white;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: $transition;
    }

    .menu-opened & {
      @include media-breakpoint-down(lg) {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transition: $transition;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-weight: 500;

      @include media-breakpoint-up(lg) {
        display: flex;
      }

      @include media-breakpoint-down(lg) {
        font-size: 4rem;
        text-align: center;
      }

      li {
        @include media-breakpoint-down(lg) {
          margin-bottom: 3rem;
          opacity: 0;
        }

        &.animate-fade {
          opacity: 1;
          transition: 1s ease-in;
        }
      }

      a {
        display: inline-flex;
        position: relative;
        text-decoration: none;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0;
          transform: scaleX(0);
          bottom: -0.3rem;
          left: 0;
          border-bottom: solid 0.2rem;
          transform-origin: bottom right;
          transition: transform 0.4s ease-out;
        }

        &:hover {
          &::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }

        @include media-breakpoint-up(xxl) {
          margin-left: 10rem;
        }

        @include media-breakpoint-up(lg) {
          margin-left: 5rem;
        }
      }
    }
  }

  .open-menu {
    position: relative;
    width: 30px;
    height: 30px;
    display: block;
    font-size: 0;
    line-height: 0;
    z-index: 100;

    span {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      border-bottom: 0.1rem solid $black;
      height: 0;
      transition: $transition;

      &:nth-child(1) {
        margin-top: -0.5rem;

        .menu-opened & {
          margin-top: 0;
          animation: anim-btn-menu2 0.3s 0.3s ease forwards;
        }
      }

      &:nth-child(2) {
        margin-top: 0.5rem;

        .menu-opened & {
          margin-top: 0;
          animation: anim-btn-menu1 0.3s 0.3s ease forwards;
        }
      }
    }

    @keyframes anim-btn-menu1 {
      100% {
        transform: rotate(45deg);
      }
    }
    @keyframes anim-btn-menu2 {
      100% {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
