import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetService } from './Services/dataset.service';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { TopicchartComponent } from './topicchart/topicchart.component';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    TopicchartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
