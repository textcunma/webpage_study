<template>
	<div class="flex flex-col h-screen justify-between">
		<HeaderView />
		<div class="w-80 sm:w-1/2 m-10 mx-auto">
			<HomeConView class="mb-auto"/>
		</div>
		<FooterView />
	</div>
</template>

<script lang="ts">
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	import HomeConView from '@/components/HomeConView.vue';

	export default {
		name: 'HomeView',	// index.tsと名称をリンクさせる
		components: {
			HeaderView,
			HomeConView,
			FooterView
		}
	}
</script>