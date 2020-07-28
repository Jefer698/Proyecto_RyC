import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Recovery from './pages/Recovery';
import AssembleMenu from './pages/AssembleMenu';
import BranchOffice from './pages/BranchOffice';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Work from './pages/Work';
import SelectionMenu from './pages/SelectionMenu';
import Corporate from './pages/Corporate';
import MenuSemanal from './pages/MenuSemanal';
import EnvioForm from './pages/Envio';
import MenuMaintainer from './pages/MenuMaintainer';
import PedidosMaintainer from './pages/PedidosMaintainer';
import Pago from './pages/Pago';
import Logout from './pages/Logout'
export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/recovery',
    component: Recovery
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
    path: '/assemble',
    component: AssembleMenu
  },
  {
    path: '/branch',
    component: BranchOffice
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/schedule',
    component: Schedule
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/selection',
    component: SelectionMenu
  },
  {
    path: '/corporate',
    component: Corporate
  },
  {
    path: '/menusemanal',
    component: MenuSemanal
  },
  {
    path: '/envio',
    component: EnvioForm
  },
  {
    path: '/menu-maintainer',
    component: MenuMaintainer
  },
  {
    path: '/pedidos-maintainer',
    component: PedidosMaintainer
  },
  {
    path: '/pago',
    component: Pago
  }
,
  {
    path: '/logout',
    component: Logout
  }
]