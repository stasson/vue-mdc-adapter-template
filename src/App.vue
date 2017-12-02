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

<<style>
:root {
--mdc-theme-primary: #212121;
--mdc-theme-secondary: #41B883;
--mdc-theme-background: #FFFFFF;
}
</style>
