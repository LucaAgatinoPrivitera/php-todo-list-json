const { createApp } = Vue

// CreateApp si trova sul sito di vue mettendo options
createApp({
  data() {
    return {
      toDo: [],
      addText: "",
      newCompiti: "",
      apiUrl: "../list.php",
      postRequestConfig: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
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
    prova(singleToDo) {
      // console.log(singleToDo)
      // da chiedere perché non mi salva il dato
      // singleToDo = !singleToDo;
      // console.log("indice")
      // console.log(singleToDo)
      console.log(this.toDo[singleToDo].add)

      // Reset ad ogni click, quell'item sarebbe un singletodo ma richiamato col foreach di js
      this.toDo.forEach(item => {
        item.add = false;
      },)

      this.toDo[singleToDo].add = !this.toDo[singleToDo].add;
    },


    // DAY 2

    getTasksList() {

      axios.get(this.apiUrl).then(results => {
        console.log("Risultati: ", results.data);
        this.toDo = results.data;
      });

    },

    addTask() {
      console.log("aggiungi task", this.newTask);

      const newTask = {
        compiti: this.newCompiti,
        completato: false
      };

      axios.post(this.apiUrl, newTask, this.postRequestConfig).then(results => {
        console.log("Risultati: ", results.data);
        this.toDo = results.data;
      });
    }


  },
  // Mounted significa al mount della pagina
  mounted() {
    console.log("Recupero i dati dal server");

    // axios.get("../list.php").then(results, function (results) sarebbe la stessa cosa senza AF 
    axios.get("../list.php").then(results => {
      console.log("Risultati: ", results.data);
      this.toDo = results.data;
    });
    this.getTasksList();
  }
}).mount('#app')