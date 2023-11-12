<template>
  <div>
    <div class="container">
      <InputSearch placeholder="Search your game By NAME OR PROVIDER" v-model="data.input" @input="onInput" />

      <div class="row">
        <div v-for="game in data.searchResult" :key="game.id" class="col">
          <CardGame :data="game" />
        </div>
      </div>
      <p class="text" v-if="data.loading">Loading data</p>
      <p class="text" v-if="data.games && data.games.length > 0 && data.searchResult.length <= 0">No matches found</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

const data = reactive({
  games: undefined,
  searchResult: [],
  input: "",
  loading: false
});

async function getGames() {
  data.loading = true;

  setTimeout(() => {
    $fetch("/api/games")
      .then((response) => {
        data.games = response?.gamesData;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        data.loading = false;
        data.searchResult = data.games;
      });
  }, 1000);
}

function onInput(event) {
  const inputValue = event.target.value.toLowerCase();

  if (inputValue.trim() === "") {
    data.searchResult = data.games;
    return;
  }

  const result = data.games.filter((el) => {
    const titleMatch = el.title.toLowerCase().includes(inputValue) && el.title.toLowerCase().length >= 3;
    const providerMatch = el.provider.toLowerCase().includes(inputValue) && el.provider.toLowerCase().length >= 3;

    return titleMatch || providerMatch;
  });

  data.searchResult = result;
}

onMounted(() => {
  getGames();
});
</script>

<style lang="scss" scodep>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;

  @media (max-width: 1281px) {
    margin-left: -4px;
    margin-right: -4px;
  }

  .col {
    width: 16.6%;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 16px;

    @media (max-width: 1281px) {
      padding-left: 4px;
      padding-right: 4px;
      margin-bottom: 16px;
    }

    @media (max-width: 993px) {
      width: 25%;
    }

    @media (max-width: 769px) {
      margin-bottom: 8px;
    }

    @media (max-width: 576px) {
      width: 33.33333333%;
    }

    @media (max-width: 480px) {
      width: 50%;
    }
  }
}

.text {
  text-align: center;
}
</style>
