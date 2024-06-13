const { createApp } = Vue

// CreateApp si trova sul sito di vue mettendo options
createApp({
  data() {
    return {
      toDo: [],
      addText: "",
    }
  },
  methods: {
    print(indice) {
      if (this.addText.length > 0) {
        console.log(indice)
        b = {
          descrizione: this.addText, // Da chiedere quel this mi ha fatto perdere 20 minuti di tempo, però in console spunta un errore... IT JUST WORKS
          completato: false
        }
        indice.push(b);
        this.addText = "";
      }

    },
    prova(singleToDo){
      console.log(singleToDo)
      // da chiedere perché non mi salva il dato
      singleToDo.add = !singleToDo.add;
      console.log("indice")
      console.log(singleToDo)
    }

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