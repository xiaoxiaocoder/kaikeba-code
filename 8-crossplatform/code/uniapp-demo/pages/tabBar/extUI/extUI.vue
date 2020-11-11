<template>
	<view>
		<text>extUi</text>
		<custom name="uni-app">
			<text>slot text</text>
		</custom>
		<!-- https://uniapp.dcloud.io/frame?id=wxs -->
		<button type="primary" @click="toWxsPage">跳转到WXS Demo页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toWxsPage() {
				uni.navigateTo({
					url: '../../component/wxs'
				})
			}
		}
	}
</script>

<style>

</style>
