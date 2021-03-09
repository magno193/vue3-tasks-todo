const templateHtml =
  `<img :class="gender" v-bind:src="picture" :alt="firstName + ' ' + lastName">
  <h1>{{firstName}} {{lastName}}</h1>
  <h3>Email: {{email}}</h3>
  <button v-on:click="getUser()" :class="gender">Get Random User</button>`

const app = Vue.createApp({
  template: templateHtml,
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'alexmlf93@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api/')
      const { results } = await res.json();
      console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    }
  }
})

app.mount('#app');