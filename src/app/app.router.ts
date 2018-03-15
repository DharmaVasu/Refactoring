import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const routes = [
    {
        path:'mod1',
        loadChildren: './module1/mod1.module#mod1Module'
    },
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    }
];

export const router = RouterModule.forRoot(routes);