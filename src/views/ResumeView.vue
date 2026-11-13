<script setup lang="ts">
import SkillRate from '@/components/SkillRate.vue'

const nerdMonkeys = 'https://store.steampowered.com/search/?developer=Nerd%20Monkeys'
</script>

<template>
  <div>
    <h1>...\Experience\</h1>
    <div class="intro">
      <div class="paragraph">
        An object-oriented gameplay programmer with experience in developing PC and cross-platform prototypes, as well as
        porting games to the Nintendo Switch
        <br /><br />
        Honed my skills in team management, production, and leadership by leading a team responsible for developing and
        porting Nintendo Switch titles
        <br /><br />
        Also experienced with VR and modding, adept at integrating into ongoing projects
        <br /><br />Currently navigating the challenges of adulthood
        <br />
        <div style="margin-top: 20px; margin-bottom: 20px">
          <a class="download-link" href="d/IuriMartinhoResume.pdf" target="_blank"
            ><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a
          >
          <div style="clear: both"></div>
        </div>
      </div>
      <div class="photo"><img src="img/avatar2.png" alt="Photo of Iuri Martinho" /></div>
    </div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>- Lead Programmer @ <a href="https://www.semaeopus.com/" target="_blank">Semaeopus</a></h3>
      <h4>Jun 2023 - Sep 2025</h4>
      <div style="padding-left: 20px">
        <br />
        Managed my team's tasks while enhancing and integrating existing projects, developing and porting WebGL
        applications. Explored blockchain technology and open-source game servers.
        <br /><br />
      </div>
      <div class="tech-stack">Unity, C#, on-chain, WebGL, Go (Golang), ubuntu/linux</div>

      <h3>- Lead Port Programmer @ <a :href="nerdMonkeys" target="_blank">Nerd Monkeys</a></h3>
      <h4>Jan 2022 - Jun 2023</h4>
      <div style="padding-left: 20px">
        <br />
        Managed teams, produced and ported original IP titles, worked in cross-platform development, and created tools
        and prototypes.
        <br /><br />
      </div>
      <div class="tech-stack">
        Unity, Game Maker Studio, Unreal, C#, JavaScript, C++, Agile methodologies, JIRA, Source control
      </div>

      <h3>- Gameplay Programmer @ <a href="https://www.redcatpig.com/" target="_blank">Red Cat Pig</a></h3>
      <h4>Oct 2021 - Jan 2022</h4>
      <div style="padding-left: 20px">
        <br />
        Joined mid-development to meet deadlines, quickly learned internal tools, and contributed to complex car physics
        and online integration.
        <br /><br />
      </div>
      <div class="tech-stack">Unity, Photon Engine, Physics research</div>

      <h3>- Port Programmer @ <a :href="nerdMonkeys" target="_blank">Nerd Monkeys</a></h3>
      <h4>May 2019 - Oct 2021</h4>
      <div style="padding-left: 20px">
        <br />
        Started as an intern, transitioned to a junior role, and eventually became a port programmer. Contributed to the
        production of studio IP titles, completed my first porting process, and developed new prototypes.
        <br /><br />
      </div>
      <div class="tech-stack">Unity, Game Maker Studio, Unreal, C#, C++, Blueprints</div>

      <h3>
        - Project Manager Internship @
        <a href="https://www.akademiasztuki.eu/" target="_blank">Szczecin Art Academy</a>
      </h3>
      <h4>Feb 2019 - May 2019</h4>
      <div style="padding-left: 20px">
        <br />
        Produced a VR serious game prototype during Erasmus to help hospitalized patients with low mobility stimulate
        their muscles using Bluetooth EMG signals in a 3D Unity environment. The project was approved by licensed
        doctors after the prototype stage
        <br /><br />
      </div>
      <div class="tech-stack">Unity, VR, Arduinos</div>

      <h3>- Internship @ <a :href="nerdMonkeys" target="_blank">Nerd Monkeys</a></h3>
      <h4>May 2018 - Sep 2018</h4>
      <div style="padding-left: 20px">
        <br />
        Entered the game industry by creating mobile prototypes with specific objectives and goals.
        <br /><br />
      </div>
      <div class="tech-stack">Unity, C#</div>

      <h3>- Being a Human</h3>
      <h4>1998 - today</h4>
      <div style="padding-left: 20px">
        An optimistic kid raised by their grandparents, with a keen interest in adrenaline and challenges.
        <br /><br />
      </div>
      <div class="tech-stack">Anything with two wheels, Cooking, Souls veteran</div>

      <h2>Skills</h2>
      <div class="skill-set">
        <h3>- Software</h3>
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Project Management" :rate="5" />
        <SkillRate name="Quality Assurance" :rate="4" />
        <SkillRate name="GameMaker" :rate="4" />
        <SkillRate name="Unreal" :rate="3" />
        <SkillRate name="Cooking" :rate="3" />
      </div>
      <div class="skill-set">
        <h3>- Languages</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Lua" :rate="4" />
        <SkillRate name="WebGL" :rate="4" />
        <SkillRate name="Blueprints" :rate="3" />
        <SkillRate name="C++" :rate="3" />
        <SkillRate name="JavaScript" :rate="3" />
        <SkillRate name="Go (Golang)" :rate="2" />
      </div>
      <div style="clear: both"></div>

      <h2>Education</h2>
      <h3>- <a href="https://eticalgarve.com/" target="_blank">ETIC_Algarve</a></h3>
      <div>Higher National Diploma - Videogames</div>
      <br />
      <div>
        Game Design, 2D Art, C# in Unity, Advanced programming, Spriting and Animations, Design and interfaces,
        Production and marketing, project management
      </div>
      <h3>- <a href="https://agr-tc.pt/wp/" target="_blank">Middle School Tomás Cabreira</a></h3>
      <div>Specialized Artistic Course in Communication Design</div>
      <br />
      <div>
        Adobe suite, blender, cinema 4D, brand creation, graphic design, video editing and editorial skills.
      </div>

      <h2>Languages</h2>
      <h4>Native Portuguese and fluent English</h4>
      <h2>❤️</h2>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 1.8em;
  margin: 0;
  padding: 0;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0;
  padding: 0;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1em;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  font-style: italic;
}
/* Intro text and photo: side by side when there is room, stacked otherwise. */
.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  column-gap: 40px;
}
.paragraph {
  flex: 1 1 360px;
  max-width: 700px;
}
.download-link {
  float: left;
  margin-right: 50px;
}
.full-content div {
  max-width: 800px;
}
.skill-set h3 {
  padding-bottom: 10px;
}
.photo {
  flex: 0 1 300px;
  margin: 30px auto 0;
  text-align: center;
}
.photo img {
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 1;
}
.tech-stack {
  font-style: italic;
  font-size: 0.8em;
}

@media only screen and (min-width: 620px) {
  .photo {
    margin: 30px 0 0;
  }
  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
