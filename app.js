const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            email: 'yogi.sjv@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/9.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.email = results[0].email
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')