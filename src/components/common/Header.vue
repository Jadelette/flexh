<script>
import NavBar from "./NavBar";

export default {
  name: "Header",
  components: { NavBar }
};
</script>

<template>
  <div class="header">
    <div>
      <img src="../../assets/logo.svg" class="logo" />
    </div>
    <NavBar />
  </div>
</template>
