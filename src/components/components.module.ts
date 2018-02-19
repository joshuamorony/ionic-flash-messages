import { NgModule } from '@angular/core';
import { FlashComponent } from './flash/flash';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [FlashComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
	exports: [FlashComponent]
})
export class ComponentsModule {}
