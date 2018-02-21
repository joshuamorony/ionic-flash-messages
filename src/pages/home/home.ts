import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlashProvider } from '../../providers/flash/flash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private flashProvider: FlashProvider) {

	}

	ionViewDidLoad(){
		
	}

	testFlash(){
		this.flashProvider.show('Base is under attack!', 2000, 'danger');
	}

}
