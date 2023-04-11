$(document).ready(function() {
	// 初始化数据
	$(".slider-wrap").data('sliderIndex', 0)
	// 设置移动函数
	function moveSlider(slider, direction) {
		// 定义索引
		let sliderIndex = slider.data('sliderIndex')
		// 获取list
		let sliderList = slider.find('.slider-list')
		// 获取list  下 item
		let sliderItemLength = sliderList.find('.slider-item').length - 1
		// 定义需要变量
		let ifCase, sliderData, back, backNext
		// switch分发
		switch (direction) {
			case 'left':
				ifCase = sliderIndex < sliderItemLength
				sliderData = sliderIndex + 1
				back = 0
				backNext = 1
				break
			case 'right':
				ifCase = sliderIndex > 0
				sliderData = sliderIndex - 1
				back = sliderItemLength
				backNext = sliderItemLength - 1
				break
		}
		if (ifCase) {
			slider.data('sliderIndex', sliderData)
			if (direction == 'left') {
				let index2 = sliderIndex
				sliderIndex == sliderItemLength - 1 ? index2 = 0 : index2 = sliderIndex
				slider.find('.slider-redian .slider-item').eq(index2).addClass('active').siblings().removeClass(
					'active')
			}
			updateSlider(slider)
		} else {
			// 关闭动画
			// sliderList.css('transition', 'none')
			// slider.data('sliderIndex', back)
			// updateSlider(slider)
			// // 延迟开启动画
			// setTimeout(function() {
			// 	sliderList.css('transition', 'all .5s ease')
			// 	slider.data('sliderIndex', backNext)
			// 	updateSlider(slider)
			// }, 30)
		}
	}
	// 设置更新函数
	function updateSlider(slider) {
		let sliderIndex = slider.data('sliderIndex')
		let count = -sliderIndex * slider.outerWidth()
		slider.find('.slider-list').css('left', count)
		slider.find('.slider-redian .slider-item').eq(sliderIndex).addClass('active').siblings().removeClass(
			'active')
	}

	// 点击事件
	$(".move-left").click(function() {
		moveSlider($('.slider-wrap'), 'left')
	})
	$(".move-right").click(function() {
		moveSlider($('.slider-wrap'), 'right')
	})
})
