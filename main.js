new Vue({
	el: "#root",
	data: {
		list: [],
		genre: "",
	},
	mounted() {
		axios
		.get("https://flynn.boolean.careers/exercises/api/array/music")
		.then(res => this.list = res.data.response)
		console.log("list", this.list);
	},

	methods: {
	},
})