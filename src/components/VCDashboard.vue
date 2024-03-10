<script setup>
import { onMounted, ref } from 'vue'

const ventures = ref([])

const fetchVentures = async () => {
  const resp = await fetch('/api/ventures.json')
  const ventureData = await resp.json()

  ventures.value = ventureData
}

onMounted(fetchVentures)
</script>

<template>
  <div class="vc-dashboard">
    <h1>Venture Portfolio</h1>
    <div v-if="ventures.length">
      <ul>
        <li v-for="venture in ventures" :key="venture.id">
          <h3>{{ venture.name }}</h3>
          <p>Stage: {{ venture.investmentStage }}</p>
          <p>Description: {{ venture.description }}</p>
        </li>
      </ul>
    </div>
    <p v-else>
      No ventures to display
    </p>
  </div>
</template>
