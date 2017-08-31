import axios from "axios"

axios.get('/src/data.json').then(response => {
    console.log(response.data.tableData)
     return this.tableData = response.data.tableData
}, response => {
    // error callback
})