import axios from "axios"

axios.get('/src/data.json').then(response => {
    console.log(response.data.tableData)
     this.tableData = response.data.tableData
}, response => {
    // error callback
})