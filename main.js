new Vue({
	el: "#root",
	data: {
		list: [],
		optionList: ["All"],
		albumList: [],
		genre: "",
	},
	mounted() {
		axios
		.get("https://flynn.boolean.careers/exercises/api/array/music")
		.then(res => {
			res = res.data.response;
			// storing data
			this.list = res;

			// creating a copy of data which I will modify everytime I select an option
			this.albumList = res;

			// creating an immutable list of options without duplicates
			res.forEach(album => {
				if(!this.optionList.includes(album.genre)) {
					this.optionList.push(album.genre)
				}
			})

		})
	},

	methods: {
		
		handleSelection() {
			if(this.genre === "All") {
				this.albumList = this.list;
			console.log(this.genre, this.albumList);	
			} else {
				this.albumList = this.list.filter(album => album.genre === this.genre);
				console.log(this.genre, this.albumList);
			}
		}
	},
})