<template>
  <div>
    <h1>Login Page</h1>
    <form>
      <div class="container">
        <label class="offset-3 col-sm-5" for="uname"><b>Username</b></label>
        <input
          class=" alignEle offset-5 col-sm-3"
          type="text"
          placeholder="Enter UserId/ mail address"
          name="uname"
          required
          v-model="userName"
        />
        <button
          class="alignEle offset-5  col-sm-2 btn col-sm btn-primary"
          type="submit"
          @click="onSubmit($event)"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userName: "",
      authenticatedUser: [],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.userName);
      this.authenticatedUser.forEach((ele) => {
        if (ele.email === this.userName || ele.username === this.userName) {
          this.$router.push({ name: "createPosts", query: { id: ele.id }  });
        }
      });
    },
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.authenticatedUser = json;
        console.log(this.authenticatedUser);
      });
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
