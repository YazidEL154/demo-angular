import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { StatusComponent } from './status/status.component';
import { NumberComponent } from './number/number.component';
import { CatsComponent } from './cats/cats.component';

// Module responsable de la communication HTTP (Client)
import { HttpClientModule } from "@angular/common/http";
import { CatCardComponent } from './cats/cat-card/cat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    FormulaireComponent,
    StatusComponent,
    NumberComponent,
    CatsComponent,
    CatCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Pour les formulaires réactifs, remplace les template driven forms
    ReactiveFormsModule,
    // Pour la boite à banane (et pour les template driven forms, ça ne se fait plus)
    FormsModule,
    // Module pour http (envois de requêttes)
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
