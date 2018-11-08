import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilPageComponent} from './pages/accueil-page/accueil-page.component';
import {ConnexionPageComponent} from './pages/connexion-page/connexion-page.component';
import {InscriptionPageComponent} from './pages/inscription-page/inscription-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'accueil', component: AccueilPageComponent},
    {path: 'connexion', component: ConnexionPageComponent},
    {path: 'inscription', component: InscriptionPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
