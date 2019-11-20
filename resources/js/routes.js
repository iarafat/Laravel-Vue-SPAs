import Logo from "./components/Logo";
import LogoSymbol from "./components/LogoSymbol";
import Colors from "./components/Colors";
import Typography from "./components/Typography";
import Mascot from "./components/Mascot";
import Illustrations from "./components/Illustrations";
import LoadersAndAnimations from "./components/LoadersAndAnimations";
import Wallpapers from "./components/Wallpapers";
import NotFound from "./components/NotFound";
import SiteStats from "./components/SiteStats";

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


export default {
    mode: 'history',
    linkActiveClass: 'font-bold',
    routes: [
        {
          path: '*',
          component: NotFound
        },
        {
            path: '/',
            component: Logo,
            name: 'logo'
        },
        {
            path: '/logo-symbol',
            component: LogoSymbol,
            name: 'logo-symbol'
        },
        {
            path: '/colors',
            component: Colors,
            name: 'colors'
        },
        {
            path: '/typography',
            component: Typography,
            name: 'typography'
        },
        {
            path: '/mascot',
            component: Mascot,
            name: 'mascot'
        },
        {
            path: '/illustrations',
            component: Illustrations,
            name: 'illustrations'
        },
        {
            path: '/loaders-and-animations',
            component: LoadersAndAnimations,
            name: 'loaders-animations'
        },
        {
            path: '/wallpapers',
            component: Wallpapers,
            name: 'wallpapers'
        },
        {
            path: '/site-stats',
            component: SiteStats,
            name: 'site-stats'
        }
    ]
};
