<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Tambah Buku Programmer</div>

                    <div class="card-body">
                        <form v-on:submit="submitPost()">
                            
                            <div class="form-group">

                                <!-- mengambil inputan name menggati menjadi v-model 
                                dengan parameter nama table dan fieldnya contoh: posts.title -->
                                <input type="text" v-model="posts.title" id="title" placeholder="Judul Buku" class="form-control">
                            </div>

                            <div class="form-group">
                                <textarea v-model="posts.description" id="description" cols="30" rows="6" class="form-control" placeholder="Deskripsi Buku"></textarea>
                            </div>
                            <div class="form-group">
                                <router-link to="/" class="btn btn-success">Kembali Ke halaman Utama</router-link>
                                <button class="btn btn-primary float-right" type="submit">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data:function() {
    return {
      posts: {
          'title': '',
          'description': ''
      },
      errors: []
    }
  },


  methods:{
    submitPost(){
        axios.post('/posts',this.posts)
        .then(response => {
            console.log(response)
            this.$router.push({path:'/'})
        this.posts = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
        }
    }
}
</script>
