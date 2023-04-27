<template>
	<div class="flex flex-col h-screen justify-between">
		<HeaderView />
		<div class="w-80 sm:w-1/2 m-10 mx-auto">
			<AboutConView class="mt-10 mb-auto"/>
		</div>
		<FooterView />
	</div>
</template>

<script lang="ts">
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	import AboutConView from '@/components/AboutConView.vue';

	export default {
		name: 'HomeView',	// index.tsと名称をリンクさせる
		components: {
			HeaderView,
			AboutConView,
			FooterView
		}
	}
</script>