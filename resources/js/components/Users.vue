<template>
    <div>
        <div class="mb-2">
            <label for="name" class="form-label">Name</label>
            <input
                type="text"
                placeholder="Enter Name"
                class="form-control"
                id="name"
                v-model="item.name"
            >
        </div>
        <div class="mb-2">
            <label for="email" class="form-label">Email</label>
            <input
                type="email"
                placeholder="Enter email"
                class="form-control"
                id="email"
                v-model="item.email"
            >
        </div>
        <div class="mb-2">
            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                placeholder="Enter Password"
                class="form-control"
                id="password"
                v-model="item.password"
            >
        </div>
        <div class="d-grid">
            <button class="btn btn-success"
                    @click="save"
            >
                {{ isEditing ? "Update" : "Save" }}
            </button>
        </div>

        <div>
            <h3 class="text-center" v-if="lists.length > 0">All Numbers</h3>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="user in lists"
                    :key="user.id"
                >
                    {{ user.name }} - {{ user.email }} - {{ user.password }}
                    <span class="float-right">
                        <button
                            class="btn btn-warning btn-sm mr-2"
                            @click="editTel(user)"
                        >Edit</button>
                        <button
                            class="btn btn-danger btn-sm mr-2"
                            @click="deleteTel(user.id)"
                        >Delete</button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Directory",

    data() {
        return {
            lists: [],
            item: {
                id:'',
                name : '',
                email: '',
                password: '',
                type: '',
                bio: '',
                photo: ''
            },
            isEditing: false,
            temp_id: null
        }
    },
    mounted() {
        this.fetchAll()
    },
    methods: {
        fetchAll() {
            try {
                axios.get('/api/user')
                    .then(res => this.lists = res.data)
            } catch (e) {
                console.log(e)
            }
        },
        save() {
            let method = axios.post
            let url = "/api/user"
            if (this.temp_id) {
                method = axios.put
                url = `/api/user/${this.temp_id}`
            }
            try {
                method(url, this.item)
                    .then(res => {
                        this.fetchAll()
                        this.item = {
                            id:'',
                            name : '',
                            email: '',
                            password: '',
                            type: '',
                            bio: '',
                            photo: ''
                        }
                        this.temp_id = null
                        this.isEditing = false
                    })
            } catch (e) {
                console.log(e)
            }
        },
        editTel(user) {
            this.item = {
                name: user.name,
                email: user.email,
                password: user.password
            }
            this.temp_id = user.id;
            this.isEditing = true
        },
        deleteTel(id) {
            try {
                axios.delete(`/api/user/${id}`)
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

<style scoped>
</style>
