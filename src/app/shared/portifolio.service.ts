import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseError } from 'firebase';

export class PortifolioProject {
    constructor (
        public title: string,
        public text: string,
        public img: string
    ) { }
}

export const MOCK_PORTFOLIO: PortifolioProject[] = [
    new PortifolioProject('Cabin',						'',	'/img/portfolio/cabin.png'),
    new PortifolioProject('Slice of cake',		'',	'/img/portfolio/cake.png'),
    new PortifolioProject('Circus tent',			'',	'/img/portfolio/circus.png'),
    new PortifolioProject('Game controller',	'',	'/img/portfolio/game.png'),
    new PortifolioProject('Safe',							'',	'/img/portfolio/safe.png'),
    new PortifolioProject('Submarine',				'',	'/img/portfolio/submarine.png'),
];

@Injectable()
export class PortifolioService {
    items: FirebaseListObservable<any[]>;

    constructor(
        private angularFire: AngularFire
    ) { }

    getPortifolioItemsAsync(): Observable<PortifolioProject[]> {
        this.items = this.angularFire.database.list('/portifolio-projects');
        return this.items;
    }

    getPortifolioItems(): PortifolioProject[] {
        return MOCK_PORTFOLIO;
    }

    newPortfolioItem(item: PortifolioProject): string {
        const postListRef = this.angularFire.database.list('/portifolio-projects');
        const newPostRef = postListRef.push({
                'title': item.title,
                'text': item.text,
                'img': item.img
        });
        return newPostRef.ref.toString();
    }

    addShittoServer() {
      MOCK_PORTFOLIO.forEach(item => this.newPortfolioItem(item));
    }

}
