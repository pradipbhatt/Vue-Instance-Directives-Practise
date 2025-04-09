new Vue({
    el: '#app',
    data: {
      name: '',
      email: '',
      hobbies: ['Reading', 'Coding'],
      showHobbies: true
    },
    methods: {
      toggleHobbies() {
        this.showHobbies = !this.showHobbies;
      },
      addHobby() {
        const newHobby = prompt("Enter a new hobby:");
        if (newHobby) this.hobbies.push(newHobby);
      }
    }
  });
  