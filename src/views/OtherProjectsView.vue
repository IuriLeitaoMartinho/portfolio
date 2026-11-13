<script setup lang="ts">
import ProjectsList from '@/components/ProjectsList.vue'
import projects from '@/data/OtherProjectsData'
</script>

<template>
  <div>
    <h1>...\Co-Development\</h1>
    <div class="paragraph">
      <div style="margin-bottom: 30px">
        Games I've worked on, created tools for different development purposes and integrated into the design process.
      </div>
    </div>
    <ProjectsList :projects="projects" />
    <div style="margin-top: 20px">
      You can reach me <span style="font-size: 24px"><router-link to="/contact">here</router-link></span>.
    </div>
  </div>
</template>
