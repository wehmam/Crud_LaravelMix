<template>
    <div class="card">
         <h1 class="display-4 text-center mt-3">Daftar Buku Programmer!</h1>
                <p class="text-center mb-3">Daftar Buku web programming</p> 
        <div class="card-header">
            <router-link to="/create" class="btn btn-primary float-right">Tambah Buku</router-link>
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Judul Buku</th>
                        <th scope="col">Deskripsi</th>
                        <th width="100"></th>
                        <th width="100"></th>
                        <th width="100"></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts">
                        <td>{{post.id}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.description}}</td>
                        <td>
                            <router-link :to="{ name: 'readPost', params: { id: post.id } }" class="btn btn-info">Lihat</router-link>
                        </td>
                        <td>
                            <router-link :to="{name: 'editPost', params:{id: post.id} }" class="btn btn-success">Edit</router-link>
                        </td>
                        <td>
                            <form action="">
                                <button class="btn btn-danger">Hapus</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`/posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>