<template>
  <div class="section-reviews">
    <div class="container">
      <div class="review">
        <div class="user-avatar">
          <img src="@/assets/images/img-04.jpg" alt="#" />
        </div>
        <div class="user-text">
          <p>“splendid work, impeccable.”</p>
        </div>
        <h3 class="user-name">Mary Toronto</h3>
        <span class="user-position">architect & designer, NY</span>
        <div class="btn-holder">
          <a href="#" class="btn btn-arrow">
            what our customers say
            <span class="icon-holder">
              <img src="@/assets/images/icon-01.svg" alt="#" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionReviews',
}
</script>

<style lang="scss" scoped>
.section-reviews {
  padding-top: 10rem;
  padding-bottom: 10rem;

  @include media-breakpoint-down(md) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .review {
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-avatar {
      width: 27rem;
      height: 27rem;
      margin-bottom: 10rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 5rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .user-text {
      margin-bottom: 10rem;
      text-align: center;
      font-size: 7.2rem;
      letter-spacing: 0.04rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 5rem;
        font-size: 3.7rem;
      }
    }

    .user-name {
      margin-bottom: 2.5rem;
      font-family: $syncopate;
      font-weight: 700;
      font-size: 2.4rem;
      letter-spacing: 0.04rem;

      @include media-breakpoint-down(md) {
        font-size: 2rem;
      }
    }

    .user-position {
      margin-bottom: 10rem;
      font-size: 2.4rem;
      color: $silver-chalice;

      @include media-breakpoint-down(md) {
        font-size: 2rem;
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
