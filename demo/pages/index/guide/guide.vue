<template>
	<view class="content">
		<view class="top"></view>
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:duration="duration">
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../../static/guide/1.png" ></image></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../../static/guide/2.png" ></image></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../../static/guide/3.png" ></image></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img" @tap="launchFlag">
						<image src="../../../static/guide/4.png" ></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				// uni.setStorage({
				// 		key: 'launchFlag',
				// 		data: true,
				// });
				uni.navigateTo({
					url: '/pages/second/second'
				})
				// uni.switchTab({
				// 	url: '/pages/index/index'
				// });
				
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100%;
		height: 100%;
		background-size: 100% auto ;
		padding: 0;
	}
	.top{
		padding-top:  var(--status-bar-height);
	}
	.swiper{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.swiper-item-img image{ 
		width: 750upx;
		height: 1334upx;
	 }
</style>
