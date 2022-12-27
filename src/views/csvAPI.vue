<template>

    <div>
    <h2>API</h2>
    <div v-for="data in datas" :key="data.id">
        Name: {{ data.name }} <br>
        Author: {{ data.author }} <br>
    </div>
    </div>

</template>
<script>
import {ref} from 'vue'
import axios from 'axios'
export default {
    name:'csvAPI',
    setup() {
        const datas=ref(null)
        const error=ref(null)
        const load= async() => {
            axios.get('http://127.0.0.1:5000/books')
            .then((res) => {
                console.log(res.data)
                datas.value=res.data
            })
            .catch((error) => {
                console.log(error)
            });

        }

        load()

        return {
            datas
        }
    }
}

</script>