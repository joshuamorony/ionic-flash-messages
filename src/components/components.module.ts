import { NgModule } from '@angular/core';
import { FlashComponent } from './flash/flash';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeBarComponent } from './time-bar/time-bar';

@NgModule({
	declarations: [FlashComponent,
    TimeBarComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
	exports: [FlashComponent,
    TimeBarComponent]
})
export class ComponentsModule {}
