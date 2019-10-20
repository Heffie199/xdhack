<template>
	<view class="content">
		<view class="title">名字</view>
		<view class="choice-wrap">
			<view class="choice">怎么称呼时装妈妈呢？</view>
		</view>
		<view class="title">身高</view>
		<view class="choice-wrap">
			<view class="choice">不会泄漏你们的秘密的 (￣▽￣)ノ</view>
		</view>
		<view class="title">体重</view>
		<view class="choice-wrap">
			<view class="choice">不会泄漏你们的秘密的 (￣▽￣)ノ</view>
		</view>
		<view class="title">三围</view>
		<view class="choice-wrap">
			<view class="choice">不会泄漏你们的秘密的 (￣▽￣)ノ</view>
		</view>
		<view class="title">怀孕的时间点</view>
		<view class="choice-wrap">
			<view class="choice">不会泄漏你们的秘密的 (￣▽￣)ノ</view>
		</view>
		<view class="next-button" @tap="goToNext">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToNext(){
				uni.redirectTo({
					url:"../first/first"
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
		margin-bottom: 44upx;
	}
	.choice{
		font-size: 28upx;
		color: #B1B1B1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 484upx;
		height: 68upx;
		margin: 0 auto 30upx auto;
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
