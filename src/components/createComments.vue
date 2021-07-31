<template>
  <div>
    <h1>Create Comments</h1>
    <form>
      <div class="container">
        <label class="offset-3 col-sm-5" for="name"><b>Name</b></label>
        <input
          class=" alignEle offset-5 col-sm-3"
          type="text"
          placeholder="Enter name"
          name="name"
          required
          v-model="name"
        />
        <label class="offset-3 col-sm-5" for="email"><b>Email</b></label>
        <input
          class=" alignEle offset-5 col-sm-3"
          type="email"
          placeholder="Enter Mail ID"
          name="email"
          required
          v-model="email"
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
          Create Comments
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateComments",
  props: ["postId"],
  data() {
    return {
      body: "",
      name: "",
      email: "",
      commentsArr: [],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let url =
        "https://jsonplaceholder.typicode.com/comments"
      console.log(url);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(
          {
            postId: this.$route.query.postId,
            id: 1,
            name: this.name,
            email: this.email,
            body: this.body,
          }
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) =>{  console.log(json)
         let postId =  json.postId
         this.$router.push({ name: "displayDetails",query: { postId: postId }  })
          });
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
