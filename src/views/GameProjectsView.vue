<script setup lang="ts">
import ProjectsList from '@/components/ProjectsList.vue'
import projects from '@/data/GameProjectsData'
</script>

<template>
  <div>
    <h1>...\Game-Porting\</h1>
    <div class="paragraph">
      <div style="margin-bottom: 30px">The following games are ports that I contributed to for the Nintendo Switch:</div>
    </div>
    <ProjectsList :projects="projects" />
    <div style="margin-top: 20px">
      You can reach me <span style="font-size: 24px"><router-link to="/contact">here</router-link></span>.
    </div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 1000px;
  margin-bottom: 10px;
}
</style>
