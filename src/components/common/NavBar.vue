<script>
export default {
  name: 'NavBar',
  data: () => ({
    links: [
      {
        route: "index",
        text: "Home"
      },
      {
        route: "overview",
        text: "Overview"
      },
      {
        route: "benefits",
        text: "Benefits"
      },
      {
        route: "contact",
        text: "Contact"
      }
    ]
  })
};
</script>

<template>
  <div class="header">

    <ul class="menu">
      <li v-for="link in links" :key="link.route" class="menu-item">
        <router-link
          :to="{ name: link.route }"
          class="menu-text"
          :id="link.text"
        >
          <span>{{ link.text }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
