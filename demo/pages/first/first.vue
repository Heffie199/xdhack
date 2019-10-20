<template>
	<view class="content">
		<view class="title">怀孕期间最常做的事？</view>
		<view class="choice-wrap">
			<view class="choice" @tap="goToStart">职场工作，上班最自在</view>
			<view class="choice" @tap="goToStart">时尚贵妇，逛街我最爱</view>
			<view class="choice" @tap="goToStart">居家生活，家里最舒服</view>
			<view class="choice" @tap="goToStart">运动瑜伽，是少不了的</view>
		</view>
		<!-- <view class="next-button" @tap="goToStart">完成</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToStart(){
				uni.redirectTo({
					url:"../third/third"
				})
			}
		}
	}
</script>

<style>
	.content{
		text-align: center;
		/* padding-top: clac(var(--status-bar-height) + 150upx); */
		padding-top: 150upx;
	}
	.title{
		font-size: 32upx;
		color: #505050;
		margin-bottom: 48upx;
	}
	.choice{
		font-size: 28upx;
		color: #B1B1B1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 484upx;
		height: 68upx;
		margin: 0 auto 78upx auto;
		background: #F8F8F8;
		border-radius: 20upx;
	}
	.choice-active{
		
	}
	.next-button{
		font-size: 32upx;
		color: #B1B1B1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 484upx;
		height: 68upx;
		margin: 0 auto 78upx auto;
		/* background: #F8F8F8; */
		border: 2upx solid #B1B1B1;
		border-radius: 20upx;
		position: absolute;
		bottom: 60upx;
		left: calc(50% - 242upx);
	}
</style>
