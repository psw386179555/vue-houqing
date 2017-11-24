<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'app'
	,updated(){
		// console.log('updated')
		// console.log(this)
	}
	,beforeCreate(){
		// console.log(this.$router.history.current);

	}
	
}
</script>
<style type="text/css" src="../static/css/reset.css"></style>
<style type="text/css" src="../static/fonts/font.css"></style>
<style type="text/css" src="../static/fonts/font-awesome.css"></style>

