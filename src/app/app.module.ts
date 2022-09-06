import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [AppComponent, HelloComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
