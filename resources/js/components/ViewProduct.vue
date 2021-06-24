<template>
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Product Details</h3>
                </div>
                <table  class="table table-hover">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
<!--                        <th>Image</th>-->
                        <th></th>
                    </tr>
                    <tr v-for="product in lists" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price }}</td>
<!--                        <td><img :src="`data:image/png;base64, logo.png`" width="100px"/></td>-->
                    </tr>
                    </tbody>
                </table>
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
