<script setup lang="ts">
import ProjectsList from '@/components/ProjectsList.vue'
import projects from '@/data/AboutProjectsData'
</script>

<template>
  <div>
    <h1>...\Intro\</h1>
    <div class="paragraph">
      <div>
        I'm <strong>Iuri Martinho</strong>, a programmer who specializes in object-oriented programming (OOP) and games in general.<br />
        I spend my weekends coming up with new game ideas and feeling like I should be doing more.
      </div>
      <div style="margin-top: 20px">
        I've worked on <span style="font-size: 24px"><router-link to="/game-projects">game ports</router-link></span>, on
        <span style="font-size: 24px"><router-link to="/other-projects">gameplay programming</router-link></span>, and
        <span style="font-size: 24px"><router-link to="/resume">here</router-link></span> is my background.
      </div>
      <div style="margin-top: 20px">Below is my proudest achievement so far</div>
      <div style="margin-top: 10px">
        <ProjectsList :projects="projects" />
      </div>
      <div style="margin-top: 20px">
        You can reach me <span style="font-size: 24px"><router-link to="/contact">here</router-link></span>.
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 1000px;
  margin-bottom: 10px;
}
</style>
