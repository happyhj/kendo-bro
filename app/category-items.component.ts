import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Item, Category } from './item';
import { ItemService } from './item.service';

@Component({
	selector: 'my-category-items',
	template: `
		<nav class="localnav">
			<div class="ln-wrapper">
				<div class="ln-content">
					<h2 class="ln-title">
						<a>{{categoryName}}</a>
					</h2>
				</div>
			</div>		
		</nav>
		<div class="main">
			<section class="section">
			<div class="max-width">
			<div class="section-content">
			
				<div class="modelselect">
					<div class="modelselect-grid">
						<ul class="modelselect-list row">
							<li *ngFor="#item of items; #odd = odd;" class="column modelselect-item large-6 {{odd ? '' : 'odd'}}">
						    	<div class="modelselect-producttile">
									<div class="modelselect-productimg" [style.backgroundImage]="'url('+ item.imageUrl +')'">
									</div>
									<div class="modelselect-productdesc">
										<div class="modelselect-producttitle">
											<span class="label">{{item.name}}</span>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			</div>
			</section>
		</div>
	`,
	styles: [`
		.localnav {
		    position: relative;
		    top: 0;
		    left: 0;
		    width: 100%;
		    min-width: 1024px;
		    z-index: 9997;
		}
		
		@media only screen and (max-width: 1044px) {
			.localnav {
			    min-width: 320px;
			}
		}
		@media only screen and (max-width: 767px) {
			.localnav {
		        1height:48px
		    }
		}

		.localnav .ln-wrapper {
		    1position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    1height: auto;
		    1min-height: 100%;
		    z-index: 1;
		    
			border-bottom: 1px solid rgba(0,0,0,.3);
			box-sizing: border-box;
		}

		.localnav .ln-content {
		    margin: 0 auto;
		    max-width: 980px;
		    padding: 0 22px;
		    position: relative;
		    z-index: 2;
		}

		.localnav .ln-title {
		    1margin-left: 3px;
		    height: 52px;
		}
		
		.ln-title a {
			line-height: 52px;
			vertical-align: middle;
		}
		
.modelselect-grid {
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    opacity: 1;
    -ms-filter: "none";
}		
.modelselect-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.row {
    position: relative;
    z-index: 1;
}
.row:before, .row:after {
    content: ' ';
    display: table;
}		
.modelselect-item.odd {
    clear: both;
}
.column {
    position: relative;
    z-index: 1;
    min-height: 2px;
    margin: 0;
    padding: 0;
    float: left;
}
.large-6 {
	width: 50%;
}
.modelselect-producttile {
    margin: 0 auto;
    width: 100%;;
}
.modelselect-producttile {
    text-align: center;
    margin-bottom: 65px;
    -webkit-tap-highlight-color: transparent;
}
.modelselect-productimg {
    cursor: pointer;
    margin-bottom: 15px;
    
    height: 392px;

  	background-position: center center;
  	background-size: contain;
   	background-repeat: no-repeat;
 	
}
.modelselect-productdesc {
    position: relative;
    padding: 0 116px;
}
.modelselect-producttile {
    text-align: center;
    margin-bottom: 65px;
    -webkit-tap-highlight-color: transparent;
}
.modelselect-producttile .label {
    font-size: 16px;
    line-height: 1.5625;
    font-weight: 400;
    letter-spacing: normal;
    color: #333;
    width: 100%;
}
@media only screen and (max-width: 735px) {
	.modelselect-productdesc {
	    padding: 0;
	}
	
	.modelselect-productimg {
		height: 260px;
	}
	
	.modelselect-producttile {
 	   margin-bottom: 15px;		
	}
}

	`]
//	directives: [HeroDetailComponent]
})

export class CategoryItemsComponent implements OnInit  {
	categoryName: string;
	selectedCategory: Category;
	items: Item[];
	
	constructor(
	  	private _routeParams: RouteParams,
		private _itemService: ItemService
	) { }
	
	onSelect(category: Category) { this.selectedCategory = category; }

	getItems() {
		this._itemService.getItems().then(items => this.items = items);
	}

	ngOnInit() {
		this.categoryName = this._routeParams.get('category');
		this.selectedCategory = Category[this.categoryName];
		console.log(this.categoryName, this.selectedCategory)
		this._itemService.getItems(this.selectedCategory)
		  .then(items => this.items = items);
	}
}