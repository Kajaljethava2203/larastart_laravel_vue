<template>
    <div class="col-12">
        <div class="card bg-light">
            <div class="card-body" v-for="product in lists" :key="product.id">
                <div class="table-responsive">
                    <router-link to="/show-products" class="btn btn-primary" style="float: right;margin-right: 50px;border-radius: 5px;padding: 5px;color: white;">Back</router-link>
                    <table class="table table-borderless w-100 m-0">
                        <tr>
                            <td class="text-center">
                                <img :src="`data:image/png;base64,${product.image} `" width="250px"
                                     height="250px"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Product Name : </h5> <p class="text-primary">{{ product.name }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Description : </h5> <p class="text-primary">{{ product.description }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Price : </h5> <p class="text-primary">{{ product.price }}</p>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: []
        }
    },
    mounted(){
        let id = this.$route.params.id
        axios.get('/show/'+ id).then(response => {
            this.lists = response.data;
        })
            .catch(error => {
                alert('Sorry , Something went Wrong ! Please Try again');
            });
    }
}
</script>
