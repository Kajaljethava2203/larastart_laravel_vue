<template>
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Category</h3>
                </div>
                <table  class="table table-hover">
                    <tbody>
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tr v-for="category in lists" :key="category.id">
                        <td>{{ category.name }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "ViewCategory",
    data(){
        return{
            lists:[],
            item:{
                name : "",
            },
            isEditing: false,
            temp_id: null
        }
    },
    mounted() {
        try{
            axios.get('/api/category')
                .then(response => {
                    this.lists = response.data;
                })
                .catch(error => {
                    console.log(error.response.data);
                })

        }catch (errors){
            console.log(errors);
        }
    }
}
</script>
