import { Component, OnInit } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { Category } from './item';
import { ItemService }     from './item.service';

import { BannersComponent } from './banners.component';
import { CategoryItemsComponent } from './category-items.component';

declare var jQuery:any;

@Component({
	selector: 'my-app',
	template: `
		<nav class="globalnav">
			<div class="gn-content">
			    <ul class="gn-list">
				    <li class="" [routerLink]="['Banners']">
				    	<span class="">Kendo Bro</span>
				    </li>
			        <li class="" *ngFor="#category of categories" (click)="gotoCategory(category)">
			        	<span class="">{{category}}</span>
					</li>
			    </ul>
			</div>
		</nav>
		<div class="main">
			<router-outlet></router-outlet>
		</div>
	`,
	styles: [`
		.globalnav {
		    background-color: rgb(51, 51, 51);
	        position: relative;
		    z-index: 2;

			1color: white;			
		}
		
		.globalnav > .gn-content {
		    margin: 0 auto;
		    max-width: 980px;
			padding: 0 22px;
   		    position: relative;
		    text-align: center;    
		}

		.gn-list:after {
		    content: "";
		    display: inline-block;
		    width: 100%;    

		    /* if you need IE6/7 support */
		    *display: inline;
		    zoom: 1    
		}

		.gn-list {
		    cursor: default;
		    padding: 0;
			margin: 0;
		    width: auto;
		    text-align: justify;
		    -ms-text-justify: distribute-all-lines;
		    text-justify: distribute-all-lines;
		    -webkit-user-select: none;
		    -moz-user-select: none;
		    -ms-user-select: none;
		    user-select: none;	
	        list-style-type: none;

		}
		.gn-list > li {
			cursor: default;
			display: inline
		}
		
		.gn-list > li > span {
			display: inline-block;
		}
				
		.gn-content > * {
		    height: 44px;
		    line-height: 44px;
		    vertical-align: top;
		}

	`],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		ItemService
	]
})

@RouteConfig([
	{
	  path: '/',
	  name: 'Banners',
	  component: BannersComponent,
	  useAsDefault: true
	},
	{
	  path: '/category/:category',
	  name: 'CategoryItems',
	  component: CategoryItemsComponent
	}
])

export class AppComponent implements OnInit {
	title = 'Kendo Bro';
	categories: string[];

	constructor(
		private _router: Router,
		private _itemService: ItemService
	) { }
		
	onSelect(category) {
		
	}
	
	gotoCategory(category: Category) {
		this._router.navigate(['CategoryItems', { 'category': category }]);
	}
	
	ngOnInit() {
		this.categories = Object.keys(Category)
		.filter(v => isNaN(parseInt(v, 10)));
	} 
}