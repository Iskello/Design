
//Функція відправки запиту на сервер
const postData = async (url, data) => {		
	let res = await fetch(url, {
		method: 'POST',
		body: data
	});

	return await res.text();
};


//Функція для отримання карток товару
const getResource = async (url) => {		
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

export {postData, getResource};