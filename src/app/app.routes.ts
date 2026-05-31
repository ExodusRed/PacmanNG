import { Routes } from '@angular/router';

// import HomeCom
import { Home } from './home/home';

import { GameMenu } from './game-menu/game-menu';

export const routes: Routes = [
    // {path: '/menu', component: GameMenu}
    {path: '', component: Home},
    {path: 'menu', component: GameMenu},
    {path: '**', redirectTo: ''}
];
