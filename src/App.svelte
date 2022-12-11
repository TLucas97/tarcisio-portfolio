<script>
  import Header from "./components/Header.svelte";
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import Contact from "./pages/Contact.svelte";
  import Projects from "./pages/Projects.svelte";
  import Skills from "./pages/Skills.svelte";
  import Experience from "./pages/Experience.svelte";
  import PhoneView from "./components/PhoneView.svelte";
</script>

<div class="mobile-view">
  <Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />
    <Route path="/experience" component={Experience} />
  </Router>
</div>

<div class="desktop-view">
  <Router>
    <PhoneView>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
    </PhoneView>
  </Router>
</div>

<style lang="scss">
  .mobile-view {
    display: none;

    @media (max-width: 600px) {
      display: block;
    }
  }

  .desktop-view {
    display: block;

    @media (max-width: 600px) {
      display: none;
    }
  }
</style>
