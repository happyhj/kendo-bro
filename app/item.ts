export class Item {
	id: number;
	name: string;
	category: Category;
	qualitycClass: QualitycClass;
	description: string;
	imageUrl: string;
	detailImageUrls: string[];
}

export class Banner {
	category: Category;
	title: string;
	description: string;
	backgroundImageUrl: string;
}

export enum Category {
    Bogu,
    Men,
    Kote,
    Do,
    Tare
}

//  Gi, Hakama, Accessory


export enum QualitycClass {
    Bronze,
    Silver,
    Gold
}

