import {Item, Category} from './item';
import {ITEMS} from './mock-items';
import {BANNER_ITEMS} from './mock-bannerItems';

import {Injectable} from 'angular2/core';

@Injectable()
export class ItemService {
	getBannerItems() {
		return Promise.resolve(BANNER_ITEMS);
	}
	
	getItem(id: number) {
	  return Promise.resolve(ITEMS).then(
	    items => items.filter(item => item.id === id)[0]
	  );
	}
	
	getItems(category: Category = null) {
		let pItems = Promise.resolve(ITEMS);		
		return category !== null ? pItems.then(
			items => items.filter(item => item.category === category)
		) : pItems ;
	}
	
	getItemsSlowly() {
		return new Promise<Item[]>(resolve =>
			setTimeout(()=>resolve(ITEMS), 2000) // 2 seconds
		);
	}
}
