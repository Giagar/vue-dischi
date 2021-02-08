new Vue({
	el: "#root",
	data: {
		originalList: [],
		optionsList: [],
		albumsList: [],
		genre: "",
	},
	mounted() {
		axios
		.get("https://flynn.boolean.careers/exercises/api/array/music")
		.then(res => {
			res = res.data.response;
			// storing data
			this.originalList = res;

			// creating a copy of data which gets modified everytime I select an option
			this.albumsList = res;

			// creating an immutable list of options without duplicates
			res.forEach(album => {
				if(!this.optionsList.includes(album.genre)) {
					this.optionsList.push(album.genre)
				}
			})

		})
	},

	methods: {
		
		// it updates the albumList based on the chosen option
		handleSelection() {
			// no genre is selected, therefore all the albums are displayed
			if(this.genre === "") {
				this.albumsList = this.originalList;
			
			// only albums matching the genre are displayed
			} else {
				this.albumsList = this.originalList.filter(album => album.genre === this.genre);
			}
		}
	},
})