const { createApp } = Vue

// CreateApp si trova sul sito di vue mettendo options
createApp({
  data() {
    return {
      toDo: []
    }
  },
  methods: {

  },
  // Mounted significa al mount della pagina
  mounted() {
    console.log("Recupero i dati dal server");

    // axios.get("../server.php").then(results, function (results) sarebbe la stessa cosa senza AF 
    axios.get("../server.php").then(results => {
        console.log("Risultati: ", results);
        this.toDo = results.data;
    });
  }
}).mount('#app')