<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Helpers from '@/helpers'

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  'img/projects/project-1-icon.png',
  'img/projects/project-2-icon.png',
  'img/projects/project-3-icon.png',
  'img/projects/project-4-icon.png',
  'img/projects/project-6-icon.png',
  'img/projects/project-7-icon.png',
  'img/projects/project-8-icon.png',
])
</script>

<template>
  <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css" />
  <AppHeader />
  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <AppFooter />
</template>
