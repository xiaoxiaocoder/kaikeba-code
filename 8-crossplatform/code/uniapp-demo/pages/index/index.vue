<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				flex-direction: row
				<text>\n横向布局</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item uni-bg-red">A</view>
				<view class="flex-item uni-bg-green">B</view>
				<view class="flex-item uni-bg-blue">C</view>
			</view>
			<view class="uni-title uni-common-mt">
				flex-direction: column
				<text>\n纵向布局</text>
			</view>
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">A</view>
				<view class="flex-item flex-item-V uni-bg-green">B</view>
				<view class="flex-item flex-item-V uni-bg-blue">C</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			uploadImg() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						// 文件列表 res.tempFiles;  文件路径列表 tempFilePaths
						const [imgPath] = res.tempFilePaths;
						this.convertImgToBase64(imgPath)
					}
				});
			},
			convertImgToBase64(imgPath) {
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
						entry.file((file) => {
							const reader = new plus.io.FileReader();
							reader.onloadend = (e) => {
								console.log(e.target.result);
							};
							reader.readAsDataURL(file);
						}, function(e) {
							alert(e.message);
						});

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
