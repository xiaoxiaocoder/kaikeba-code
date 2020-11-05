<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<button type="primary" @click="uploadImg">点击上传图片</button>
<!-- 		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			uploadImg () {
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:  (res) => {
						// 文件列表 res.tempFiles;  文件路径列表 tempFilePaths
						const [imgPath] = res.tempFilePaths;
						this.convertImgToBase64(imgPath)
				    }
				});
			},
			convertImgToBase64(imgPath){
				//#ifdef MP-WEIXIN
				console.log('小程序执行逻辑')
				const fsm = wx.getFileSystemManager();
				const imgBase64 = fsm.readFileSync(imgPath, 'base64')
				console.log(imgBase64)
				//#endif
				
				//#ifdef APP-PLUS
				console.log('原生代码执行逻辑 Android, IOS')
				plus.io.resolveLocalFileSystemURL(imgPath, 
					(entry) => {						
						entry.file(( file ) => {
							const reader = new plus.io.FileReader();
							reader.onloadend =  ( e ) => {
								console.log( e.target.result );
							};
							reader.readAsDataURL( file );
						}, function ( e ) {
							alert( e.message );
						} );
	
					}
				)
				//#endif
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
