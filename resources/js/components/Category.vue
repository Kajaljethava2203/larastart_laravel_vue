<template>
    <div class="container">
        <h2 classs="title">Category</h2>
        <div class="mb-2">
            <label for="name" class="form-label">Name</label>
            <input
                type="text"
                placeholder="Enter Category"
                class="form-control"
                id="name"
                v-model="item.name"
            >
        </div>

        <div class="d-grid">
            <button class="btn btn-success"
                    @click="save"
            >
                {{ isEditing ? "Update" : "Save" }}
            </button>
        </div>
        <br>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Category Details</h3>
                </div>
                <table  class="table table-hover">
                    <tbody>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    <tr v-for="(category,index) in lists" :key="category.id">
                        <td>{{ index+1 }}</td>
                        <td>{{ category.name }}</td>
                        <td>
                          <span class="float-right">
                        <button
                            class="btn btn-warning btn-sm mr-2"
                            @click="editTel(category)"
                        >Edit</button>
                        <button
                            class="btn btn-danger btn-sm mr-2"
                            @click="deleteTel(category.id)"
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
            },
            isEditing: false,
            temp_id: null
        }
    },
    mounted() {
        this.fetchAll();
    },
    methods:{
        fetchAll(){
            try{
                axios.get('/api/category')
                    .then(res => this.lists = res.data)
            }catch (e){
                console.log(e);
            }
        },
        save(){
            let method = axios.post
            let url = "/api/category"
            if (this.temp_id){
                method = axios.put
                url = `/api/category/${this.temp_id}`
            }
            try {
                method(url, this.item)
                    .then(res => {
                        this.fetchAll()
                        this.item = {
                            name: "",
                        }
                        this.temp_id = null
                        this.isEditing = false
                    })
            } catch (e) {
                console.log(e)
            }
        },
        editTel(category) {
            this.item = {
                name: category.name,
            }
            this.temp_id = category.id;
            this.isEditing = true
        },
        deleteTel(id) {
            try {
                axios.delete(`/api/category/${id}`)
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
