<template>
  <div>
    <h1>Create post</h1>
    <form>
      <div class="container">
        <label class="offset-3 col-sm-5" for="title"><b>Title</b></label>
        <input
          class=" alignEle offset-5 col-sm-3"
          type="text"
          placeholder="Enter Title"
          name="title"
          required
          v-model="title"
        />
         <label class="offset-3 col-sm-5" for="body"><b>Body</b></label>
        <input
          class=" alignEle offset-5 col-sm-3"
          type="text"
          placeholder="Enter description"
          name="body"
          required
          v-model="body"
        />
        <button
          class="alignEle offset-5  col-sm-2 btn col-sm btn-primary"
          type="submit"
          @click="onSubmit($event)"
        >
          Create Posts
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePosts",
  props:['id'],
  data() {
    return {
      body: '',
      title: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let url = "https://jsonplaceholder.typicode.com/posts/"
      console.log(url);
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          id: 1,
          title: this.title,
          body: this.body ,
          userId: this.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
         this.$router.push({ name: "createComments", query: { postId: this.$route.query.id }  })
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.alignEle {
  margin-top: 10px;
  padding: 10px 18px;
}
</style>
