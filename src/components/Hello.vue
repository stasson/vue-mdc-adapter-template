<template>
	<mdc-layout-grid class="content">
		<mdc-layout-cell span=12>
		</mdc-layout-cell>
		<mdc-layout-cell span=12>
			<mdc-card>

				<mdc-card-media>
					<div class="banner" style="margin:auto">
						<mdc-grid-list width="120">
							<mdc-grid-tile :src="mdcLogo"/>
							<mdc-grid-tile :src="vueLogo"/>
							<mdc-grid-tile :src="vmaLogo"/>
						</mdc-grid-list>
					</div>
				</mdc-card-media>

				<mdc-card-header :title="title" :subtitle="subtitle" />


				<mdc-card-text>
					<p><em>vue-mdc-adapter</em> is an integration of
					<a href="https://material.io/components/web/">Material Components</a>
					for <a href="https://vuejs.org">Vue.js</a> which follows best practices
					recommended by Google:
					<a href="https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-advanced-approach-using-foundations-and-adapters">Using Foundations and Adapters</a>.
					The project aims at finding the right balance between ease of use and customization, while sticking to the <em>Vue Spirit</em> (approachable, versatile, performant)</p>					 
				</mdc-card-text> 
				<mdc-card-actions>
					<mdc-card-action-button 
						v-for="action in actions" :key="action.name"
						:href="action.href" 
					>{{ action.name }}</mdc-card-action-button>
				</mdc-card-actions>
				</mdc-card>
		</mdc-layout-cell>
	</mdc-layout-grid>
</template>

<script>
import mdcLogo from '../assets/mdc-logo.png'
import vueLogo from '../assets/vue-logo.png'
import vmaLogo from '../assets/vma-logo.png'

export default {
  name: 'hello',
  data () {
	return {
		vueLogo,
		mdcLogo,
		vmaLogo,
		title: 'Welcome to your MDC-Vue App',
		subtitle: 'Material Components for Vue.js',
		actions: [
			{name: 'Getting Started', href: 'https://stasson.github.io/vue-mdc-adapter/#/docs/getting-started'},
		]
	}
  }
}
</script>

<style scoped>
.content {
	padding: 32px;
	min-width: 100px;
	max-width: 800px;
	margin: auto;
}
</style>

