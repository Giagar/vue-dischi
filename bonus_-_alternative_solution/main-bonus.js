new Vue({
	el: "#root",

	data: {
		optionsList: [],
		albumsList: [],
		genre: "",
	},

	mounted() {
		axios
		.get("https://flynn.boolean.careers/exercises/api/array/music")
		.then(res => {
			res = res.data.response;

			// creating a copy of data which gets modified everytime I select an option
			this.albumsList = res;

			// creating a list of options without duplicates
			res.forEach(album => {
				if(!this.optionsList.includes(album.genre)) {
					this.optionsList.push(album.genre)
				}
			})
		})
	},

})