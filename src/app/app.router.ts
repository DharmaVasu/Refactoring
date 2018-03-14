import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const routes = [
    {
        path:'mod1',
        loadChildren: './module1/mod1.module#mod1Module'
    },
    {
        path:'mod2',
        loadChildren: './module2/mod2.module#mod2Module'
    }
];

export const router = RouterModule.forRoot(routes);