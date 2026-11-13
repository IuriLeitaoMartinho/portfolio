<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
  visible: boolean
  color: string
  title: string
  htmlContent: string
}>()

const emit = defineEmits<{ close: [] }>()

const scroller = ref<HTMLElement | null>(null)
const dialog = ref<HTMLElement | null>(null)
let returnFocusTo: HTMLElement | null = null

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

function lockPage(locked: boolean) {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
  if (locked) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
}

watch(
  () => props.visible,
  async (visible) => {
    lockPage(visible)
    if (visible) {
      returnFocusTo = document.activeElement as HTMLElement | null
      await nextTick()
      if (scroller.value) scroller.value.scrollTop = 0
      // Focus the dialog itself (not the X) so screen readers land in it without drawing a focus ring on open.
      dialog.value?.focus({ preventScroll: true })
    } else {
      returnFocusTo?.focus?.({ preventScroll: true })
      returnFocusTo = null
    }
  },
)

onBeforeUnmount(() => lockPage(false))
</script>

<template>
  <transition name="fade">
    <!-- The overlay is the scroll container, so a long dialog scrolls on its own and the page stays put. -->
    <div v-if="visible" ref="scroller" class="overlay">
      <div
        ref="dialog"
        class="dialog"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        :style="{ 'background-color': color }"
      >
        <div class="dialog-header" :style="{ 'background-color': color }">
          <h1 id="dialog-title" class="dialog-title">{{ title }}</h1>
          <button type="button" class="dialog-close" aria-label="Close" @click="emit('close')">
            <i class="fa fa-times fa-lg fa-fw" aria-hidden="true"></i>
          </button>
        </div>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
            <button type="button" class="dialog-close-button" @click="emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  inset: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}
/* Phones: the dialog fills the screen. */
.dialog {
  position: relative;
  min-height: 100%;
  color: #fff;
}
.dialog:focus {
  outline: none;
}
/* The title bar stays on top while the description scrolls, so the X is always reachable. */
.dialog-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
}
h1.dialog-title {
  flex: 1;
  text-align: center;
  font-size: 1.3em;
  line-height: 1.2em;
  margin: 0;
  padding: 14px 0 14px 56px;
}
.dialog-close {
  flex: none;
  width: 56px;
  height: 56px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2em;
}
.dialog-close:hover {
  opacity: 0.6;
}
.dialog-content {
  padding: 20px;
  background-color: hsla(0, 0%, 100%, 0.953);
  color: #696969;
}
.dialog-bottom {
  text-align: center;
}
.dialog-close-button {
  min-height: 44px;
  padding: 0 24px;
  border: 0;
  background: none;
  color: #696969;
  font: inherit;
  font-size: 1.4em;
  text-decoration: underline;
  cursor: pointer;
}
.dialog-close-button:hover {
  opacity: 0.6;
}

@media only screen and (min-width: 620px) {
  .dialog {
    min-height: 0;
    margin: 80px auto 40px;
    max-width: 1000px;
    padding-bottom: 10px;
  }
  h1.dialog-title {
    font-size: 1.6em;
    padding: 22px 0 22px 56px;
  }
  .dialog-content {
    padding: 40px;
  }
}
</style>
