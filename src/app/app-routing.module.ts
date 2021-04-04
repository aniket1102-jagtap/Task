import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';

const routes: Routes = [
  
  {path: 'displaydata', component :DisplaydataComponent},
  { path: '', component :DisplaydataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
