<template>
    <div class="container">
        <div class="div row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header text-center">Edit Buku</div>
                    <div class="card-body">
                        <form v-on:submit="submitPostEdit()">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" v-model="posts.title"  class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea v-model="posts.description" id="description" cols="30" rows="5" class="form-control"></textarea>
                            </div>
                            <router-link to="/" class="btn btn-danger mx-3">Cancel</router-link>
                            <button class="btn btn-success">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

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

// GET Data sebelumnya
  created() {
    
    // get id user
    let id = this.$route.params.id

    axios.get(`/posts/`+ id + '/edit')
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },


  methods:{
    submitPostEdit(){
        let id = this.$route.params.id
        axios.put('/posts/'+ id, this.posts)
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