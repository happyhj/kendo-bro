import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {Item, Category, QualitycClass, Banner} from './item';
import { ItemService } from './item.service';

declare var jQuery:any;

@Component({
  selector: 'my-banners',
  template: `
  	<article class="hero-gallery evergreen">
  	
			<div class="section-content">
				<div class="gallery-slidecontainer">
					<li *ngFor="#bannerItem of bannerItems" (click)="gotoCategory(bannerItem.category)" [style.backgroundImage]="'url('+ bannerItem.backgroundImageUrl+')'">
						<div class="title">{{bannerItem.title}}</div>
					</li>
				</div>
			</div>

	</article>
  `,
  styles: [`
  	.gallery-slidecontainer {
	    position: absolute;
	    left: 0px;
	    top: 0px;
	    width: 100%;
	    height: 100%;
	  	display: none;
  	}

  	.gallery-slidecontainer li {
	  	height: 100%;
	  	background-position: center center;
	  	background-size: contain;
	  	background-repeat: no-repeat;
  	}
  	
  	.gallery-slidecontainer .title {
  		position: relative;
  		top: 50%;
  		transform: translateY(-50%);
	  	color: white;
	  	font-size: 100px;
	  	text-align: center;
	  	text-shadow: 0px 0px 16px rgba(0,0,0,.6);
  	}
  	
  	.gallery-slidecontainer.slick-initialized {
	  	display: block;
  	}
  	
  	
	.hero-gallery.evergreen {
	    height: calc(100% - 44px);
	    1min-height: 650px
	}
	
	@media only screen and (min-width: 1442px) {
	    .hero-gallery.evergreen {
	        1min-height:750px
	    }
	}
	
	@media only screen and (max-width: 1068px) {
	    .hero-gallery.evergreen {
	        1min-height:650px
	    }
	}
	
	@media only screen and (max-width: 735px) {
	    .hero-gallery.evergreen {
	        1height:50%;
	        1min-height: 391px
	    }
	}
	
	@media only screen and (max-width: 735px) and (orientation: portrait) {
	    .hero-gallery.evergreen {
	        1max-height:450px
	    }
	}

  `]
})

export class BannersComponent implements OnInit {
	bannerItems: Banner[];
 
  	constructor(
		private _router: Router,
		private _itemService: ItemService) {
	}

	gotoCategory(category: Category) {
		this._router.navigate(['CategoryItems', { 
			'category': 
				typeof category === 'number' ? Category[category] : category 
		}]);
	}
		
  	ngOnInit() {
    	this._itemService.getBannerItems()
			.then(bannerItems => this.bannerItems = bannerItems);
			
		setTimeout(function() {
			jQuery('.gallery-slidecontainer').slick({
				draggable: false,
				autoplay: true,
				arrows: false,
				autoplaySpeed: 5000
			});
		}, 0);
	}
}