import {RouterModule} from '@angular/router';


import { comp1Component } from './components/comp1.component';

const routes = [
    {
        path:'',
        component: comp1Component
    }
];

export const router = RouterModule.forChild(routes);