<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="inner-holder">
        <strong class="logo">Serhii D.</strong>
        <ul class="menu">
          <li><a href="#">home</a></li>
          <li><a href="#">projects</a></li>
          <li><a href="#">clients</a></li>
          <li><a href="#">gallery</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">contact</a></li>
        </ul>
        <ul class="social-menu">
          <li>
            <a href="#">
              <img src="@/assets/images/instagram.svg" alt="#" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/facebook.svg" alt="#" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/instagram.svg" alt="#" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-bar">
      <p>Architectural © 2021</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  .inner-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
    padding-bottom: 10rem;
    border-top: 0.1rem solid $porcelain;

    @include media-breakpoint-up(xl) {
      flex-direction: row;
      justify-content: space-between;
    }

    @include media-breakpoint-down(md) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .logo {
    display: block;
    margin-bottom: 3rem;
    font-family: $syncopate;
    font-size: 2.4rem;
    letter-spacing: 0.04rem;

    @include media-breakpoint-up(xl) {
      margin-bottom: 0;
    }
  }

  .bottom-bar {
    padding-top: 3.9rem;
    padding-bottom: 3.9rem;
    font-weight: 500;
    font-size: 1.8rem;
    background: $porcelain;
    text-align: center;
    color: $silver-chalice;
    letter-spacing: 0.04rem;

    @include media-breakpoint-down(md) {
      padding-top: 2.8rem;
      padding-bottom: 2.8rem;
      font-size: 1.6rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu {
    margin-bottom: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 500;
    font-size: 1.8rem;

    @include media-breakpoint-down(lg) {
      margin-bottom: 1.5rem;
    }

    @include media-breakpoint-up(xl) {
      margin-bottom: 0;
    }

    @include media-breakpoint-down(md) {
      font-size: 1.6rem;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      text-align: center;
    }

    li {
      @include media-breakpoint-down(lg) {
        margin-bottom: 1.5rem;
      }

      &:not(:last-child) {
        margin-right: 5rem;

        @include media-breakpoint-down(xl) {
          margin-right: 2.5rem;
        }

        @include media-breakpoint-down(sm) {
          margin-right: 0;
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
      }
    }
  }

  .social-menu {
    li {
      transition: $transition;

      &:not(:last-child) {
        margin-right: 3rem;
      }

      &:hover {
        opacity: 0.6;
        transition: $transition;
      }
    }
  }
}
</style>
