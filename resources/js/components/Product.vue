<template>
    <div class="container">
        <h2 class="title">Product</h2>
        <form action="" enctype="multipart/form-data" method="post" @submit.prevent="">
        <div class="mb-2">
            <label for="name" class="form-label">Name</label>
            <input
                type="text"
                placeholder="Enter product name"
                class="form-control"
                id="name"
                v-model="item.name"
                >
        </div>
        <div class="mb-2">
            <label for="description" class="form-label">Description</label>
            <textarea
                placeholder="Enter product description"
                class="form-control"
                id="description"
                v-model="item.description"
            ></textarea>
        </div>
        <div class="mb-2">
            <label for="category" class="form-label">Category</label>
            <input
                type="text"
                placeholder="Enter product category"
                class="form-control"
                id="category"
                v-model="item.category"
            >
        </div>
        <div class="mb-2">
            <label for="price" class="form-label">Price</label>
            <input
                type="text"
                placeholder="Enter product price"
                class="form-control"
                id="price"
                v-model="item.price"
            >
       </div>

        <div class="mb-2">
            <label for="input-file" class="form-label d-block">Image</label>
            <input type="file"
                   id="input-file"
                   name="product_image"
                   @change="onFileChanged"
                   class="form-control"
            >
        </div>

        <div class="d-grid">
            <button class="btn btn-success"
                    @click="save"
            >
                {{ isEditing ? "Update" : "Save" }}
            </button>
        </div>
        </form>
        <br>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Product Details</h3>
                </div>
                <table  class="table table-hover">
                    <tbody>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th></th>
                    </tr>
                    <tr v-for="(product,index) in lists" :key="product.id">
                        <td>{{ index+1}}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.price }}</td>
                        <td><img :src="`data:image/png;base64, ${product.image}`" alt="" width="50px"/></td>
                        <td>
                          <span class="float-right">
                        <button
                            class="btn btn-warning btn-sm mr-2"
                            @click="editTel(product)"
                        >Edit</button>
                        <button
                            class="btn btn-danger btn-sm mr-2"
                            @click="deleteTel(product.id)"
                        >Delete</button>
                    </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Product",
    data(){
        return{
            lists:[],

            item:{
                name : "",
                description : "",
                category : "",
                price : "",
                image : null,
            },
            isEditing: false,
            temp_id: null
        }
    },
    mounted() {
        this.fetchAll();
    },
    methods:{
        onFileChanged(event){
            this.item.image=event.target.files[0];
        },
        fetchAll(){
            try{
                axios.get('/api/product')
                .then(res => this.lists = res.data)
            }catch (e){
                console.log(e);
            }
        },
        save(){
            var formData = new FormData();
            formData.append('product_image',this.item.image,this.item.image.name);
            formData.append('name',this.item.name);
            formData.append('category',this.item.category);
            formData.append('price',this.item.price);
            let method = axios.post
            let url = "/api/product"
            if (this.temp_id){
                method = axios.put
                url = `/api/product/${this.temp_id}`
            }
            try {
                method(url, formData)
                    .then(res => {
                        alert('success');
                        this.fetchAll()
                        this.item = {
                            name: "",
                            description : "",
                            category : "",
                            price : "",
                            image : null
                        }
                        this.temp_id = null
                        this.isEditing = false
                    })
            } catch (e) {
                console.log(e)
            }
        },
        editTel(product) {
            this.item = {
                name: product.name,
                description : product.description,
                category: product.category,
                price: product.price,
                // image: product.image
            }
            this.temp_id = product.id;
            this.isEditing = true
        },
        deleteTel(id) {
            try {
                axios.delete(`/api/product/${id}`)
                    .then(res => {
                        this.fetchAll()
                    })
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
