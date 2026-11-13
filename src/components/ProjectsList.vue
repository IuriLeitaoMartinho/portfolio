<script setup lang="ts">
import { ref } from 'vue'
import ProjectDetailsOverlay from '@/components/ProjectDetailsOverlay.vue'
import type ProjectData from '@/data/ProjectData'

defineProps<{ projects: ProjectData[] }>()

const showPopup = ref(false)
const popupTitle = ref('')
const popupColor = ref('')
const popupContent = ref('')

function showDetails(item: ProjectData) {
  popupTitle.value = item.name
  popupColor.value = item.accentColor
  popupContent.value = item.htmlDescription
  showPopup.value = true
}
</script>

<template>
  <div>
    <div class="projects-list">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-item"
        :class="{ wide: project.isWide, high: project.isHigh }"
        @click="showDetails(project)"
      >
        <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }"></div>
        <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
          <div class="title-text">{{ project.name }}</div>
        </div>
      </div>
    </div>
    <ProjectDetailsOverlay
      :visible="showPopup"
      :title="popupTitle"
      :html-content="popupContent"
      :color="popupColor"
      @close="showPopup = false"
    />
  </div>
</template>

<style scoped>
.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.project-item-image {
  background-size: cover;
  background-position: 50%;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  transform: scale(1.1);
}
.project-item:hover {
  filter: brightness(120%);
}
.title-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #222;
}
.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 1025px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    grid-auto-rows: minmax(225px, auto);
  }
  .project-item {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}
</style>
