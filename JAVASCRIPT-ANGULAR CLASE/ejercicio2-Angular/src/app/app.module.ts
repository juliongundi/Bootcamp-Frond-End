import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FollowBlockComponent } from './follow-block/follow-block.component';
import { FilaDeVideosComponent } from './fila-de-videos/fila-de-videos.component';
import { RastroDeMigasComponent } from './rastro-de-migas/rastro-de-migas.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FollowBlockComponent,
    FilaDeVideosComponent,
    RastroDeMigasComponent,
    FooterComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
