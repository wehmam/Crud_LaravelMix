<template>
    <div class="card">
        <div class="card-header">

        </div>
        <div class="card-body">
            <h2 class="mb-2">{{ posts.title }}</h2>
            <p>{{ posts.description}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                posts: [],
                errors : []
            }
        },
        created() {

            // get id from url for show data
            let id = this.$route.params.id

            axios.get(`/posts/`+ id)
            .then(response => {
            this.posts = response.data
            })
            .catch(e => {
            this.errors.push(e)
            })
        }
    }
</script>
