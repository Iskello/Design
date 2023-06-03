const pictureSize = (imgSelector) => {
	const blocks = document.querySelectorAll(imgSelector);

	function showImg (block) {
		const img = block.querySelector('img');
		// something.png => something-1.png
		//slice(0, -4) відрізає 4 символи з кінця, а потім додаємо необхідні символи;
		img.src = img.src.slice(0, -4) + '-1.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'none';
		});
	}

	function hideImg (block) {
		const img = block.querySelector('img');
		// something-1.png => something.png
		//slice(0, -6) відрізає 6 символів з кінця, а потім додаємо необхідні символи;
		img.src = img.src.slice(0, -6) + '.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'block';
		});
	}

	blocks.forEach(block => {
		block.addEventListener('mouseover', () => {
			showImg(block);
		});
		block.addEventListener('mouseout', () => {
			hideImg(block);
		});
	});
};

export default pictureSize;