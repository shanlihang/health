<script>
	export default {
		onLaunch: function() {
			uni.navigateTo({
				url:'/pages/check/check'
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
page{
	background-color: #393939;
	color:#E0E0E0;
}
</style>
