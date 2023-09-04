buttonLinks = [
	'https://namu.wiki/w/%EC%88%98%EC%9D%BC%EC%97%AC%EC%9E%90%EC%A4%91%ED%95%99%EA%B5%90',
	'https://suilg-m.goesw.kr/index.do'
];

document.querySelectorAll('button#link').forEach((button, index) => {
	button.addEventListener('click', () => {
		let link = buttonLinks[index] ? buttonLinks[index] : '/';
		document.location.href = link;
	});
});
