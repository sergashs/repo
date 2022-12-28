<template>
  <div class="section-mosaic">
    <div class="container-fluid">
      <div class="inner-holder">
        <img src="@/assets/images/illustration-01.jpg" alt="illustration-01" />
        <div class="row g-0">
          <div class="col-6 col-lg-3 col-xl-2">
            <div class="illustration-block"></div>
          </div>
          <div class="col-3 col-xl-2 d-none d-lg-flex">
            <div class="illustration-block"></div>
          </div>
          <div class="col-3 col-xl-2 d-none d-lg-flex">
            <div class="illustration-block"></div>
          </div>
          <div class="col-6 col-lg-3 col-xl-2">
            <div class="illustration-block"></div>
          </div>
          <div class="col-3 col-xl-2 d-none d-xl-flex">
            <div class="illustration-block"></div>
          </div>
          <div class="col-3 col-xl-2 d-none d-xl-flex">
            <div class="illustration-block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionMosaic',
}
</script>

<style lang="scss" scoped>
.section-mosaic {
  padding-bottom: 20rem;

  @include media-breakpoint-down(md) {
    padding-bottom: 10rem;
  }

  .inner-holder {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10rem;
      width: 100%;
      height: 0;
      border-bottom: 0.1rem solid $porcelain;

      @include media-breakpoint-down(md) {
        bottom: -5rem;
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .row {
    position: relative;
    min-height: 42rem;

    & > [class^='col'] {
      position: relative;
      display: flex;
      flex-direction: column;

      .illustration-block {
        margin-left: -1.5rem;
      }

      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1.8rem;
          height: 100%;
          background: $white;
        }
      }

      &:nth-child(1) {
        .illustration-block {
          min-height: 40%;
          background: transparent;
          border-bottom: 1.8rem solid $white;
        }
      }

      &:nth-child(2) {
        justify-content: flex-end;

        .illustration-block {
          min-height: 30%;
          background-color: $white;
        }
      }

      &:nth-child(3) {
        .illustration-block {
          min-height: 40%;
          background-color: $white;
          border-bottom: 1.8rem solid $white;
        }
      }

      &:nth-child(4) {
        justify-content: flex-end;

        @include media-breakpoint-down(lg) {
          &::after {
            display: none;
          }
        }

        .illustration-block {
          min-height: 30%;
          background: transparent;
          border-top: 1.8rem solid $white;
        }
      }

      &:nth-child(5) {
        justify-content: flex-end;

        .illustration-block {
          min-height: 60%;
          border-top: 1.8rem solid $white;
        }
      }

      &:nth-child(6) {
        justify-content: flex-end;

        .illustration-block {
          min-height: 30%;
          background: transparent;
          border-top: 1.8rem solid $white;
        }
      }

      .illustration-block {
        background-color: $white;
      }
    }
  }
}
</style>
