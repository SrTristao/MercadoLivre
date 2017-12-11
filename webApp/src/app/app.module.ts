import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Data } from './provider/Data';
import { ItemDetalheComponent } from './item-detalhe/item-detalhe.component';
import { PageErrorComponent } from './page-error/page-error.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ListaItemsComponent},
  {path: 'itemDetalhe', component: ItemDetalheComponent},
  {path: 'notFound', component: PageErrorComponent},
  {path: 'error', component: PageErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    HeaderSearchComponent,
    HomeComponent,
    ItemDetalheComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
