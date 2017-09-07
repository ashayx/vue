import axios from "axios"

axios.get('https://www.vue-js.com/api/v1/topics').then(response => {
	this.items = response.data.data
    console.log(this.items)
}, response => {
    // error callback
})
