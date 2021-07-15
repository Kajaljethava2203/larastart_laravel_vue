<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="product in lists" :key="product.id">
                <div class="card" style="padding: 10px">
                    <h4 class="card-title" style="text-align: center;font-family: 'Times New Roman';padding-top: 10px">{{ product.name }}</h4>
                    <router-link v-bind:to="`/show/${product.id}`" class="w3-bar-item w3-button"><img :src="`data:image/png;base64,${product.image} `" width="100px" class="w-75 p-3" style="margin-left: 35px"/></router-link>
                    <h5 class="card-text text-primary" style="font-weight: bold">Price: {{ product.price }} /-</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "ViewProduct",
    data(){
        return{
            lists:[],
            item:{
                name : "",
                description : "",
                category : "",
                price : "",
                // image : ""
            },
            isEditing: false,
            temp_id: null
        }
    },
    mounted() {
        try{
            axios.get('/api/product')
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
