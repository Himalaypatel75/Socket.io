import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraderScreenComponent } from './trader-screen/trader-screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DelOutrightComponent } from './shared/del-outright/del-outright.component';
import { DelSwapComponent } from './shared/del-swap/del-swap.component';
import { DelButterflyComponent } from './shared/del-butterfly/del-butterfly.component';
import { NondOutrightComponent } from './shared/nond-outright/nond-outright.component';
import { NdsComponent } from './shared/nds/nds.component';
import { NondButterflyComponent } from './shared/nond-butterfly/nond-butterfly.component';
@NgModule({
  declarations: [
    AppComponent,
    TraderScreenComponent,
    DelOutrightComponent,
    DelSwapComponent,
    DelButterflyComponent,
    NondOutrightComponent,
    NdsComponent,
    NondButterflyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
