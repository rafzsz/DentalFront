export const FormDentistasComponent = {
    template: `<div class="font-sans">
    <div class="bg-gradient-to-r from-black via-red-500 to-black relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-black shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label for="" class="block text-sm text-gray-700 text-center font-semibold">
                    <h1>{{tituloPagina}}</h1>
                </label>
                <div class="mt-10">
                                  
                    <!-- campos -->
                    <div>
                        <input type="text" readonly v-model="dentistas.id"  placeholder="ID" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="dentistas.name"  placeholder="Nome" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="dentistas.email"  placeholder="E-mail" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="dentistas.cro"  placeholder="CRO" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="dentistas.cro_uf"  placeholder="UF" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>
        
                    <div class="mt-7">
                        <button class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" v-on:click="comunicaApi(methods)">
                            Confirmar
                        </button>
                    </div>
                    
                    <div class="mt-7">
                    <router-link :to="{name: 'Dentistas'}">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Voltar
                        </button>
                    </router-link>
                    </div>

                    <div class="mt-7">
                        <button @click="cancelar" class="bg-red-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            tituloPagina: '',
            tituloAcao: '',
            dentistas: {
                id: '',
                name: '',
                email: '',
                cro: '',
                cro_uf: '',
            }
        }
    },
    created: function () {
        if (this.$route.name == 'VisualDentista') {
            this.tituloPagina = 'Visualizar Dentista';
            this.getDentista(this.$route.params.id)
        } else if (this.$route.name == 'EditarDentista') {
            this.tituloPagina = 'Editar um Dentista'
            this.getDentista(this.$route.params.id)
        } else if (this.$route.name == 'ExcluirDentista') {
            this.tituloPagina = 'Excluir um Dentista'
            alert("Item removido!")
            this.deletePublished(this.$route.params.id)
        } else if (this.$route.name == 'NovoDentista') {
            this.tituloPagina = 'Criar um Registro'
            this.createPublication
        }
    },
    methods: {
        getDentista(id) {
            fetch(`http://localhost:9090/dentistas/${id}`, { method: 'GET', mode: 'cors' })
                .then((response) => {
                    response.json().then((data) => {
                        this.dentistas.id = data.id;
                        this.dentistas.name = data.name;
                        this.dentistas.email = data.email;
                        this.dentistas.cro = data.cro;
                        this.dentistas.cro_uf = data.cro_uf;
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        },

        createPublication() {
            fetch(`http://localhost:9090/dentistas/`, { method: 'POST', mode: 'cors' })
                .then(response => response.json().then((data) => {
                    this.dentistas.id = data.id;
                    this.dentistas.name = data.name;
                    this.dentistas.email = data.email;
                    this.dentistas.cro = data.cro;
                    this.dentistas.cro_uf = data.cro_uf;
                    this.$router.push('/dentistas')
                }))
        },
        updatePublished(id) {
            fetch(`http://localhost:9090/dentistas/${id}`, {
                method: 'PUT',
                body: JSON.stringify(id),
                mode: "cors",
            })
                .then(response => response.json().then((data) => {
                    this.dentistas.id = data.id
                    this.dentistas.name = data.name
                    this.dentistas.email = data.email
                    this.dentistas.cro = data.cro
                    this.dentistas.cro_uf = data.cro_uf
                    this.$router.push('/dentistas')
                }))
        },
        deletePublished(id) {
            fetch(`http://localhost:9090/dentistas/${id}`, { method: 'DELETE', mode: 'cors' })
                .then((response) => {
                    if (response.status == 200) {
                        this.$router.push('/dentistas')
                    }
                })
        },
        cancelar() {
            this.$router.push('/');
        },
        comunicaApi(methods) {
            if (this.$route.name == 'EditarDentista') {
                this.updatePublished()
            } else if (this.$route.name == 'ExcluirDentista') {
                this.deletePublished()
            } else if (this.$route.name == 'NovoDentista') {
                this.createPublication()
            } else if (this.$route.name == 'VisualDentista') {
                this.$router.push('/dentistas')
            }
        }
    }
}