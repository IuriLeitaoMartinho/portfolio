<script setup lang="ts">
import { ref } from 'vue'

const email = 'leitao.martinho@gmail.com'
const showCopied = ref(false)

function flashCopied() {
  showCopied.value = true
  setTimeout(() => {
    showCopied.value = false
  }, 2000)
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    flashCopied()
  } catch (err) {
    console.error('Failed to copy email: ', err)
    // Fallback for older browsers
    fallbackCopyTextToClipboard(email)
  }
}

function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
    document.execCommand('copy')
    flashCopied()
  } catch (err) {
    console.error('Fallback: Could not copy text: ', err)
  }
  document.body.removeChild(textArea)
}
</script>

<template>
  <div class="footer">
    <div class="center">
      <button :class="['email-copy-btn', { copied: showCopied }]" @click="copyEmail">
        {{ showCopied ? 'Copied!' : email }}
      </button>
      - <a href="https://www.linkedin.com/in/iurimartinho/" target="_blank">Linkedin</a>
      - <a href="https://github.com/IuriLeitaoMartinho" target="_blank">Github</a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #383838;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}
.center,
.left,
.right {
  padding-top: 10px;
  text-align: center;
}
.email-copy-btn {
  background: none;
  border: none;
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
}
.email-copy-btn:hover {
  opacity: 0.8;
}
.email-copy-btn.copied {
  color: #4caf50;
  font-weight: 700;
  text-decoration: none;
}

@media only screen and (min-width: 620px) {
  .footer {
    padding: 0;
  }
  .left,
  .right {
    padding: 20px;
  }
  .center {
    padding: 0;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
}
</style>
