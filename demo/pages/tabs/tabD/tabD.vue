<template>
	<view class="content">
		<view class="header-top">
			<view class="header-top-bg"></view>
			<view class="user">
				<image class="user-head" src="../../../static/example/img1.png" ></image>
				<view class="user-info">
					<view class="user-info-name">刘若英</view>
					<view class="user-info-phone">18220181111</view>
					<view class="user-info-content">撸串宝已经5周又20天了哦～～</view>
				</view>
			</view>
		</view>
		<view class="toast">亲爱的刘若英贵宾，距产检的日期还有3天，别忘了排日程！</view>
		<view class="three-number">
			<view class="three-number-unit">
				<view class="three-number-unit-a">99</view>
				<view class="three-number-unit-b">衣柜件数</view>
			</view>
			<view class="three-number-unit">
				<view class="three-number-unit-a">32</view>
				<view class="three-number-unit-b">优惠券</view>
			</view>
			<view class="three-number-unit">
				<view class="three-number-unit-a">68</view>
				<view class="three-number-unit-b">积分</view>
			</view>
		</view>
		<view class="center-button">
			<view class="button-unit">
				<image class="center-button-left" src="../../../static/center/tab1.png"></image>
					<view class="center-button-title">妈妈个人资料</view>
					<image class="center-button-right" src="../../../static/center/rightA.png"></image>
			</view>
		</view>
		<view class="center-button">
			<view class="button-unit">
				<image class="center-button-left" src="../../../static/center/tab2.png"></image>
					<view class="center-button-title">环保衣服记录</view>
					<image class="center-button-right" src="../../../static/center/rightA.png"></image>
			</view>
		</view>
		<view class="center-button">
			<view class="button-unit">
				<image class="center-button-left" src="../../../static/center/tab3.png"></image>
					<view class="center-button-title">衣柜风格设定</view>
					<image class="center-button-right" src="../../../static/center/rightA.png"></image>
			</view>
		</view>
		<view class="center-button">
			<view class="button-unit">
				<image class="center-button-left" src="../../../static/center/tab4.png"></image>
					<view class="center-button-title">智能管家设定</view>
					<image class="center-button-right" src="../../../static/center/rightA.png"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import graceHeader from '../../../graceUIForUniApp/components/graceHeader.vue';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			graceHeader
		},
		methods: {
			
		}
	}
</script>

<style>

	.header-top{
		position: relative;
		text-align: center;
		padding-top: var(--status-bar-height);
	}
	.header-top-bg{
		width:750upx;
		height:328upx;
		background:linear-gradient(157deg,rgba(130,177,237,1) 0%,rgba(176,115,253,1) 100%);
		padding-top: 100upx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.center-button{
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding:0 65upx;
		background: #FFFFFF;
	}
	.button-unit{
		width: 100%;
		padding: 36upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		background: #FFFFFF;
		border-bottom: 1upx solid #E0E0E0;
	}
	.center-button-left{
		width: 50upx;
		height: 50upx;
		margin-right: 20upx;
	}
	.center-button-right{
		width: 40upx;
		height: 40upx;
	}
	.center-button-title{
		font-size: 28upx;
		color: #4C2784;
		flex: 1;
	}
	.three-number{
		padding: 34upx 95upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 20upx solid #F5F5F5;
	}
	.three-number-unit{
		text-align: center;
	}
	.three-number-unit-a{
		color: #4B2B85;
		font-size: 80upx;
		margin-bottom: 8upx;
	}
	.three-number-unit-b{
		font-size: 24upx;
		color: #AEAEAE;
	}
	.toast{
		color: #FFFFFF;
		text-align: center;
		font-size: 24upx;
		padding: 14upx 24upx;
		background: linear-gradient(135deg,rgba(235,209,172,1) 0%,rgba(200,172,122,1) 100%);;
	}
	.user{
		height: 264upx;
		display: flex;
		justify-content: flex-start;
		padding-left: 60upx;
		padding-top: 100upx;
	}
	.user-head{
		width: 132upx;
		height: 132upx;
		border-radius: 100%;
		margin-right: 26upx;
	}
	.user-info{
		text-align: left;
	}
	.user-info-name{
		font-size: 40upx;
		color: #FFFFFF;
	}
	.user-info-phone{
		font-size: 24upx;
		color: #FFFFFF;
	}
	.user-info-content{
		font-size: 24upx;
		color: #FFFFFF;
	}
</style>
