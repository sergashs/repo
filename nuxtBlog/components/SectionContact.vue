<template>
  <div class="section-contact">
    <div class="container-fluid">
      <h2>contact us</h2>
      <div class="text-holder">
        <p>
          If you are interested in our work and want to hire a project, contact
          us and ask for a price.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-wrapper">
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="you@email.com"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="+1 408 123 4567"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Message" class="form-control" />
              </div>
              <a href="#" class="btn-send"
                >send
                <span class="icon-holder">
                  <img src="@/assets/images/icon-02.svg" alt="#" />
                </span>
              </a>
            </form>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <ul>
            <li>
              <span>Our E-mail</span>

              <a href="mailto:contact@architectural.com"
                >contact@architectural.com</a
              >
            </li>
            <li>
              <span>Our Phone</span>
              <a href="tel:+14085684657">+1 408 568 4657</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionContact',
}
</script>

<style lang="scss" scoped>
.section-contact {
  padding-top: 10rem;
  padding-bottom: 10rem;
  overflow: hidden;

  @include media-breakpoint-down(md) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  h2 {
    margin-bottom: 5rem;
    font-family: $syncopate;
    font-weight: 700;
    font-size: 4.8rem;
    letter-spacing: 0.04rem;

    @include media-breakpoint-down(md) {
      margin-bottom: 2.5rem;
      font-size: 2.9rem;
    }
  }

  .text-holder {
    max-width: 99.5rem;
    margin-bottom: 10rem;
    font-size: 3.6rem;
    line-height: 1.21;
    letter-spacing: 0.04rem;

    @include media-breakpoint-down(md) {
      font-size: 2rem;
      margin-bottom: 5rem;
    }
  }

  .form-group {
    margin-bottom: 5rem;

    @include media-breakpoint-down(md) {
      margin-bottom: 2.5rem;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 2.4rem;
    letter-spacing: 0.04rem;

    @include media-breakpoint-down(md) {
      font-size: 1.8rem;
    }

    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 2.5rem;
      }

      span {
        display: inline-flex;
        margin-bottom: 1rem;
      }

      a {
        color: $silver-chalice;
      }
    }
  }

  .row {
    @include media-breakpoint-up(md) {
      @include grid-gutter(10rem);
    }

    @include media-breakpoint-up(xl) {
      @include grid-gutter(22.7rem);
    }

    > div[class^='col-'] {
      &:first-child {
        @include media-breakpoint-up(md) {
          border-right: $porcelain solid 0.1rem;
        }
      }
    }
  }

  .form-wrapper {
    margin-bottom: 5rem;

    .btn-send {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      font-size: 2.4rem;

      @include media-breakpoint-down(md) {
        font-size: 1.8rem;
      }

      .icon-holder {
        margin-left: 1rem;
      }
    }
  }
}
</style>
