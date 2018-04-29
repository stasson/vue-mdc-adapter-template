<template>
	<mdc-layout-app id="app">
		<toolbar slot="toolbar"/>
		<drawer slot="drawer"/>
		<main>
			<router-view />
		</main>		
	</mdc-layout-app>
</template>

<script>
	import Toolbar from './components/Toolbar'
	import Drawer from './components/Drawer'

	export default {
	name: 'app',
	components:{
		Toolbar, Drawer
	}
  }
</script>
