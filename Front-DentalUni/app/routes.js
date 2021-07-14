import { WelcomeComponent } from "./pages/welcome.js"
import { DentistasComponent } from "./pages/dentistas.js"
import { FormDentistasComponent } from "./pages/formdentistas.js"


export const routes = [
    {
        path: '/',
        component: WelcomeComponent,
        name: 'Home'
    },
    {
        path: '/dentistas',
        component: DentistasComponent,
        name: 'Dentistas'
    },
    {
        path: '/create',
        component: FormDentistasComponent,
        name: 'NovoDentista'
    },
    {
        path: '/view/:id',
        component: FormDentistasComponent,
        name: 'VisualDentista'
    },
    {
        path: '/edit/:id',
        component: FormDentistasComponent,
        name: 'EditarDentista'
    },
    {
        path: '/excluir/:id',
        component: FormDentistasComponent,
        name: 'ExcluirDentista'
    }
]