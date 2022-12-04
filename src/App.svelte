<script>
  import Header from "./components/Header.svelte";
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import Contact from "./pages/Contact.svelte";
  import Projects from "./pages/Projects.svelte";
  import Skills from "./pages/Skills.svelte";
  import Experience from "./pages/experience.svelte";
</script>

<Router>
  <Header />
  <Route path="/" component={Home} />
  <Route path="contact" component={Contact} />
  <Route path="projects" component={Projects} />
  <Route path="skills" component={Skills} />
  <Route path="experience" component={Experience} />
</Router>
