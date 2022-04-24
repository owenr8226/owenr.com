<script>
  import Dock from './dock/Dock.svelte';
  import { onMount } from "svelte";
  import { loadFull } from "tsparticles";
  import { LightParticlesConfig } from "./config/light-particles";

  let ParticlesComponent;

  onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
  });

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
</script>

<main>
  <Dock />
  <svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    options="{LightParticlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
  />
</main>

<style>
  main {
    max-width: 100vw;
    height: 100vh;
    background-color: "#fcfcfc";
    background-size: cover;
    background-position: center center;
  }
</style>
