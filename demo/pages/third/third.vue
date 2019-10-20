<template>
	<view class="content">
		<view class="title">请选出你最喜欢的穿搭</view>
		
			<view class="choice-wrap">
				<view class="choice" @tap="goToStart">
					<image src="../../static/test/img1.png"></image>
				</view>
				<view class="choice" @tap="goToStart">
					<image src="../../static/test/img2.png"></image>
				</view>
			</view>
			<view class="choice-wrap">
				<view class="choice" @tap="goToStart">
					<image src="../../static/test/img3.png"></image>
				</view>
				<view class="choice" @tap="goToStart">
					<image src="../../static/test/img4.png"></image>
				</view>
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
				uni.switchTab({
					url:"../tabs/tabA/tabA"
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
	.choice-wrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 80upx;
		margin-bottom: 20upx;
		/* flex-wrap: wrap; */
	}
	.choice{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.choice image{
		width: 285upx;
		height: 316upx;
	}
	
</style>
