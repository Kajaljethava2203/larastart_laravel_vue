<template>
    <div class="container">
        <div class="row">
            <div class="col-6" v-for="category in lists" :key="category.id">
                <div class="card" style="padding: 10px">
                    <h1 class="card-title text-primary" style="text-align: center;padding-top: 10px">{{ category.name }}</h1>
                </div>
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
