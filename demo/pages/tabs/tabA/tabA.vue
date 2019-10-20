<template>
	<view>
		<view class="header-top">
			<view class="header-top-bg"></view>
			<view class="search-area">
				<image src="../../../static/icon/search.png"></image>
				<view class="search-area-input">大家都在搜“孕期穿什么”</view>
			</view>
			<image src="../../../static/banner.png" class="banner"></image>
		</view>
			<view class="tab-second">
				<view class="tab-second-unit">
					<image src="../../../static/home/icon1.png"></image>
					<view class="tab-second-unit-title">搭配指南</view>
				</view>
				<view class="tab-second-unit">
					<image src="../../../static/home/icon2.png"></image>
					<view class="tab-second-unit-title">爱心回收</view>
				</view>
				<view class="tab-second-unit">
					<image src="../../../static/home/icon3.png"></image>
					<view class="tab-second-unit-title">妈咪讨论版</view>
				</view>
				<view class="tab-second-unit">
					<image src="../../../static/home/icon4.png"></image>
					<view class="tab-second-unit-title">线上咨询</view>
				</view>
			</view>
			<view class="tab-third">
				<view class="tab-third-unit">
					<view class="tab-third-unit-title">热门</view>
					<image src="../../../static/down.png" ></image>
				</view>
				<view class="tab-third-unit">
					<view class="tab-third-unit-title">最新</view>
					<image src="../../../static/down.png" ></image>
				</view>
				<view class="tab-third-unit">
					<view class="tab-third-unit-title">生活场景</view>
					<image src="../../../static/down.png" ></image>
				</view>
				<view class="tab-third-unit">
					<view class="tab-third-unit-title">穿着风格</view>
					<image src="../../../static/down.png" ></image>
				</view>
				<view class="tab-third-unit">
					<view class="tab-third-unit-title">怀孕周期</view>
					<image src="../../../static/down.png" ></image>
				</view>
			</view>
			<view class="list">
				<view class="unit">
					<image class="unit-img" src="../../../static/example/aa.jpg" ></image>
					<view class="">KIMONO</view>
					<view  class="">$ 60.00</view>
				</view>
				<view class="unit">
					<image class="unit-img" src="../../../static/example/bb.jpg" ></image>
					<view class="">chloe chen</view>
					<view class="">$ 189.00</view>
				</view>
				<view class="unit">
					<image class="unit-img" src="../../../static/example/cc.jpg" ></image>
					<view class="">DAZZLE</view>
					<view  class="">$ 89.00</view>
				</view>
				<view class="unit">
					<image class="unit-img" src="../../../static/example/dd.jpg" ></image>
					<view class="">OYSHO</view>
					<view class="">$ 179.00</view>
				</view>
				<view class="unit">
					<image class="unit-img" src="../../../static/example/ee.jpg" ></image>
					<view class="">ifidol</view>
					<view  class="">$ 89.00</view>
				</view>
				<view class="unit">
					<image class="unit-img" src="../../../static/example/ff.jpg" ></image>
					<view class="">REVERB</view>
					<view class="">$ 79.00</view>
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
		padding-top: 20upx;
	}
	.header-top-bg{
		width:750upx;
		height:428upx;
		background:linear-gradient(157deg,rgba(130,177,237,1) 0%,rgba(176,115,253,1) 100%);
		padding-top: var(--status-bar-height);
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.search-area{
		width: 612upx;
		height: 58upx;
		background: #E5E5E5;
		/* margin-bottom: 40upx; */
		margin: var(--status-bar-height) auto 40upx auto;
		display: flex;
		align-items: center;
		border-radius: 25upx;
		padding: 0 80upx;
		box-sizing: border-box;
	}
	.search-area image{
		width: 50upx;
		height: 50upx;
	}
	.search-area-input{
		color: #B2B2B2;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.banner{
		width: 678upx;
		height: 348upx;
		border-radius: 30upx;
		background: #FFD8Bc;
		margin: 0 auto;
	}
	.tab-second{
		padding: 0 70upx 20upx 70upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2upx solid #EDE7E7;
		margin: 20upx auto;
	}
	.tab-second-unit image{
		width: 114upx;
		height: 114upx;
	}
	.tab-second-unit-title{
		font-size: 24upx;
		color: #787878;
	}
	.tab-third{
		padding: 0 70upx 20upx 70upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2upx solid #EDE7E7;
		margin-bottom: 30upx;
	}
	.tab-third-unit{
		display: flex;
		align-items: center;
	}
	.tab-third-unit-title{
		color: #4A4A4A;
		font-size: 20upx;
	}
	.tab-third-unit image{
		width: 16upx;
		height: 16upx;
		margin-left: 8upx;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0 42upx;
	}
	.unit{
		display: flex;
		flex-direction: column;
		flex: 40%;
		flex-shrink: 0;
		flex-grow: 0;
		margin-bottom: 20upx;
	}
	.unit view{
		text-align: center;
		color: #4A4A4A;
		font-size: 22upx;
	}
	.unit-img{
		width: 300upx;
		height: 328upx;
		margin-bottom: 20upx;
		/* width: 150upx; */
		/* height: 164upx; */
	}
</style>
