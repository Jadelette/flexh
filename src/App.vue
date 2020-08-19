<script>
import Header from './components/common/Header';


export default {
  name: 'App',
  components: {Header}
}
</script>

<template>
  <div id="app">
    <Header />
   <main class="grid-width" :class="{ 'no-padding': !user }" id="main">
			<router-view />
		</main>
  </div>
</template>

