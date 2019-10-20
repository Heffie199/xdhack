<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad(){
				this.loadExecution()
			},
			methods: {
				loadExecution: function(){
					/**
					 * 获取本地存储中launchFlag的值
					 * 若存在，说明不是首次启动，直接进入首页；
					 * 若不存在，说明是首次启动，进入引导页；
					 */
					try {
					    const value = uni.getStorageSync('launchFlag');
					    if (value) {
					        if (value == true) {
					            uni.switchTab({
					            	url: '/pages/tabs/tabA/tabA'
					            })
					        } else {
					            uni.redirectTo({
					                url: './guide/guide'
					            });
					        }
					    } else {
					   //      uni.setStorage({
					   //          key: 'launchFlag',
					   //          data: true,
					   //          success: function() {
								// 	console.log('存储launchFlag');
								// }
					   //      });
					        uni.redirectTo({
					            url: './guide/guide'
					        });
							// uni.switchTab({
							// 	url: '/pages/tabs/tabA/tabA'
							// })
					    }
					} catch(e) { 
						// error 
						// uni.setStorage({ 
						// 	key: 'launchFlag', 
						// 	data: true, 
						// 	success: function () {
						// 		console.log('error时存储launchFlag');
						// 	} 
						// }); 
						uni.redirectTo({ url: './guide/guide' }); 
					}
					return;
					uni.navigateTo({
						url: '/pages/first/first'
					})
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
