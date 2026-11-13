<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>
      <router-link to="/game-projects">What I've done</router-link>
      <router-link to="/other-projects">What I've been part of</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contacts</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
}
.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}
a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}
.router-link-exact-active {
  border: 0 solid #dcdcdc;
  border-bottom-width: 2px;
}

/* Phones: centered, smaller links so the five fit on two rows. */
@media only screen and (max-width: 620px) {
  .nav-bar {
    text-align: center;
    padding: 12px 8px 4px;
    line-height: 1.6em;
    font-size: 0.85em;
  }
  a {
    margin: 0 6px;
    padding: 6px 0;
  }
}
</style>
