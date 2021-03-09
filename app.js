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
    getUser() {
      this.firstName = 'Sam';
      this.lastName = 'Smith';
      this.email = 'sam@gmail.com';
      this.gender = 'female';
      this.picture = 'https://randomuser.me/api/portraits/women/10.jpg';
    }
  }
})

app.mount('#app');