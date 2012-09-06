(function() {
	APP.cst = {
		'TYPE_HAIR': [
		  { name: "короткая", cnt: "330" },
		  { name: "длинная", cnt: "14" },
		  { name: "средняяя", cnt: "50" }
		 ],
		'LOCATION': [
		  { name: "Любой район", cnt: "" },
		  { name: "Советский", cnt: "330" },
		  { name: "Ленинский", cnt: "14" },
		  { name: "Кировский", cnt: "50" },
		  { name: "Октябрьский", cnt: "50" },
		  { name: "Свердловский", cnt: "50" },
		  { name: "Центральный", cnt: "50" },
		 ],
		'SORT': [
			{ name: "от дешевого к дорогому" },
			{ name: "от дорогого к дешевому" },
			{ name: "от высокого рейтинга к низкому" },
			{ name: "от низкого рейтинга к высокому"}
		],

		'CATEGORY': [
			{ name: "тип услуги1" },
			{ name: "тип услуги2" }
		],

		'EMPTY': {},
		'PRICE': [
		  { title: "Парикмакерские", cost: "300", category: false },
		  { title: "Массаж", cost: "700", category: false },
		  { title: "СПА", cost: "1000", category: true },
		  { title: "Маникюр", cost: "1000", category: false },
		 ],
		'DATA_ADD_FORM': {
			title: 'Название',  cost: 'Цена', srv: 'Услуги', category: true
		}
		
	};	
})();
