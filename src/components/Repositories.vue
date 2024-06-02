<template>
  <div>
    <h3 class="author-name">
      <img src="./assets/author-photo.jpg" />
      Desiree Onyinyechi Chukwuji (ClassicalQueen)
    </h3>
    <h4 class="author-description">
      Software and web developer
      <br />
      Below are my GitHub repositories
    </h4>

    <label class="search-bar-container" for="search-bar">
      <input
        id="search-bar"
        placeholder="Enter keyword"
        type="text"
        v-model="searchTerm"
        class="search-bar-input"
      />
      <a href="NotFound.vue"><button class="search-bar-button">Search</button></a>
    </label>

    <div>
      <div>
        <p v-if="loading" class="loading-text">loading...</p>
        <div v-else class="repositories-container">
          <div
            v-for="repo in filteredRepositories.slice(first, first + rows)"
            :key="repo.id"
            class="repository-card"
          >
            <h2 class="repository-name">{{ repo.name }}</h2>
            <router-link :to="`/repository/${repo.id}`" class="explore-link">Explore</router-link>
          </div>
        </div>
      </div>
      <Paginator
        :first="first"
        :rows="rows"
        :totalRecords="repositories.length"
        @page-change="onPageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
// import { Paginator } from 'primevue/paginator';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

const repositories = ref([]);
const loading = ref(true);
const searchTerm = ref('');
const filteredRepositories = ref([]);
const first = ref(0);
const rows = ref(4);

const fetchRepositories = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/ClassicalQueen/repos`, {
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_TOKEN,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch repositories');
    const data = await response.json();
    repositories.value = data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

onMounted(fetchRepositories);

watch([repositories, searchTerm], () => {
  filteredRepositories.value = repositories.value.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const onPageChange = (e) => {
  first.value = e.first;
  rows.value = e.rows;
};
</script>

<style scoped>
.author-name img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
}

.author-name, .author-description {
  color: white;
  text-align: center;
}

.search-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.search-bar-input {
  height: 35px;
  width: 300px;
  text-align: center;
  font-size: 18px;
  background-color: rgba(245, 245, 245, 0.863);
  border-radius: 5px;
}

.search-bar-button {
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.loading-text {
  color: white;
  text-align: center;
}

.repositories-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px auto;
}

.repository-card {
  background-color: hsl(346, 100%, 75%);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
}

.repository-name {
  color: #374151;
  font-size: 24px;
  margin-bottom: 50px;
}

.explore-link {
  background-color: #374151;
  padding: 10px 20px;
  border-radius: 5px;
  color: whitesmoke;
}
</style>
