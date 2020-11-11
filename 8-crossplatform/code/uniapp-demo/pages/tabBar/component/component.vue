<template>
	<page-meta>
		<navigation-bar />
	</page-meta>
	<view class="uni-container">
		<!-- 	<view class="uni-header-logo">
			<image class="uni-header-image" src="/static/image/componentIndex.png"></image>
		</view> -->
		<view class="uni-hello-text">
			<text class="hello-text">uni-app内置组件，展示样式仅供参考，文档详见：</text>
			<u-link class="hello-link" :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'"
			 :inWhiteList="true"></u-link>
		</view>
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon" :class="item.open ? 'uni-panel-icon-on' : ''">{{item.pages ? '&#xe581;' : '&#xe470;'}}</text>
			</view>
			<view class="uni-panel-c" v-if="item.open">
				<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
					<text class="uni-navigate-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>

		<view class="toTop">
			<text class="uni-icon uni-icon-arrowup"></text>
			<!-- 这里可以放一个向上箭头，它距离底部tabbar上浮10px-->
		</view>
	</view>
</template>

<script>
	// TODO 修复Android v3 加载过慢问题
	// #ifdef APP-PLUS
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('/static/uni.ttf')"
	});
	// #endif
	import uLink from '@/components/uLink.vue'

	export default {
		components: {
			uLink
		},
		data() {
			return {
				list: [{
						id: 'view',
						name: '视图容器',
						open: false,
						pages: [
							'view',
							'scroll-view',
							'swiper'
							// #ifndef MP-TOUTIAO
							,
							'movable-view',
							'cover-view'
							// #endif
						]
					}, {
						id: 'content',
						name: '基础内容',
						open: false,
						pages: ['text', 'rich-text', 'progress']
					}, {
						id: 'form',
						name: '表单组件',
						open: false,
						pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
							'slider',
							'switch', 'textarea',
							// #ifdef APP-PLUS || MP-WEIXIN || H5
							'editor',
							// #endif
						]
					}, {
						id: 'nav',
						name: '导航',
						open: false,
						pages: ['navigator']
					}, {
						id: 'media',
						name: '媒体组件',
						open: false,
						pages: [
							'image',
							'video',
							// #ifndef MP-ALIPAY || MP-TOUTIAO
							'audio',
							// #endif
						],
					},
					// #ifndef MP-TOUTIAO
					{
						id: 'map',
						name: '地图',
						open: false,
						pages: ['map']

					},
					// #endif
					// #ifndef QUICKAPP-WEBVIEW-UNION
					{
						id: 'canvas',
						name: '画布',
						open: false,
						pages: ['canvas']
					},
					// #endif
					// #ifdef APP-PLUS || H5
					{
						id: 'web-view',
						name: '网页',
						open: false,
						pages: [{
							name: '网络网页',
							url: '/pages/component/web-view/web-view'
						}, {
							name: '本地网页',
							url: '/pages/component/web-view-local/web-view-local'
						}]
					},
					// #endif
					// #ifndef APP-PLUS || H5
					{
						id: 'web-view',
						name: '网页',
						open: false,
						pages: ['web-view']
					},
					// #endif
					// #ifndef H5 || MP-BAIDU || QUICKAPP-WEBVIEW
					{
						url: 'ad',
						name: 'AD组件',
						open: false
					},
					// #endif
				],
				navigateFlag: false
			}
		},
		methods:{
			triggerCollapse(index) {
				const item = this.list[index]
				item.open = !item.open
			},
			goDetailPage(item) {
				console.log(item)
				if(this.navigateFlag) {
					return
				}
				this.navigateFlag = true;
				if(typeof item === 'string') {
					uni.navigateTo({
						url: `/pages/component/${item}/${item}`
					})
				} else {
					uni.navigateTo({
						url: item.url
					})
				}
				
				setTimeout(() => {
					this.navigateFlag = false
				}, 2e3)
			}
		}
	}
</script>

<style>
	@import '../../../common/uni-nvue.css';

	.toTop {
		position: absolute;
		right: 20rpx;
		bottom: calc(var(--window-bottom) + 10px);
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 60rpx;
		background-color: rgba(0, 0, 0, .4);
	}
	.toTop .uni-icon {
		color: #fff;
		font-size: 16px;
	}
</style>
