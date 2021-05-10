<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import 'vant/lib/index.css'
export default {
	name: 'App',
	components: {

	}
}
</script>

<style scoped>
	.container{
		width:100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
</style>
