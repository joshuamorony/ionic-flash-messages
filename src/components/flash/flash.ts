import { Component } from '@angular/core';
import { FlashProvider } from '../../providers/flash/flash';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'flash',
	templateUrl: 'flash.html',
	animations: [
	    trigger('messageState', [
            transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate('200ms ease-out')
            ]),
	        transition('* => void', [
	            animate('200ms ease-in', style({opacity: '0'}))   
	        ])
	    ])
	]
})
export class FlashComponent {

	active: boolean = false;
	message: string = '';

	constructor(private flashProvider: FlashProvider) {

		this.flashProvider.show = this.show.bind(this);
		this.flashProvider.hide = this.hide.bind(this);
	}

	show(message, duration){
		
		this.message = message;
		this.active = true;

		setTimeout(() => {
			this.active = false;
		}, duration);

	}

	hide(){
		this.active = false;
	}

}
