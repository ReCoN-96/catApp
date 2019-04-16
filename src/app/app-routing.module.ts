import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppListKittenComponent  } from './app-list-kitten/app-list-kitten.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';

const routes: Routes = [
  { path: 'accueil', component: AppListKittenComponent },
  { path: 'create', component: AppCreateKittenComponent }
];

export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
