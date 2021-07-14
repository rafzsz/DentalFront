export const DentistasComponent = {
    template: `
    <div class="overflow-x-auto">
    </div>
    <div class="bg-gradient-to-r from-black via-red-500 to-black min-w-screen min-h-screen bg-gray-200 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
            <div class="bg-white shadow-md rounded my-6">
                <table class="border-separate border border-black min-w-max w-full table-auto">
                    <thead>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <router-link :to="{name: 'NovoDentista'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                            </svg>
                        </router-link>
                    </div>
                        <tr class="bg-red-400 text-black-400 uppercase text-sm leading-normal">
                            <th class="border-separate border border-black py-3 px-6 text-left">ID</th>
                            <th class="border-separate border border-black py-3 px-6 text-left">Nome</th>
                            <th class="border-separate border border-black py-3 px-6 text-center">E-Mail</th>
                            <th class="border-separate border border-black py-3 px-6 text-center">CRO</th>
                            <th class="border-separate border border-black py-3 px-6 text-center">UF</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                        <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="item in dataDentistas">
                            <td class="border-separate border border-black py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">                                    
                                    <span class="font-medium">{{item.id}}</span>
                                </div>
                            </td>
                            <td class="border-separate border border-black py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.name}}</span>
                                </div>
                            </td>
                            <td class="border-separate border border-black py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.email}}</span>
                                </div>
                            </td>
                            <td class="border-separate border border-black py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.cro}}</span>
                                </div>
                            </td>
                            <td class="border-separate border border-black py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.cro_uf}}</span>
                                </div>
                            </td>
                            <td class="border-separate border border-black py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'VisualDentista', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'EditarDentista', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <router-link :to="{name: 'ExcluirDentista', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                        </tr>                        
                    </tbody>
                </table>
                <div class="w-7 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">
                    <router-link :to="{name: 'Home'}">
                        <svg class="svg-icon" viewBox="0 0 20 20">
					        <path d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
				        </svg>
                    </router-link>
                </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            dataDentistas: []
        }
    },
    mounted() {
        fetch('http://localhost:9090/dentistas', { method: 'GET', mode: 'cors' })
            .then((response) => {
                response.json().then((data) => {
                    // console.table(data)
                    this.dataDentistas = data
                })
            })
    },
}