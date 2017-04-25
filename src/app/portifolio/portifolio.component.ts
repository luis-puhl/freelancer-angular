import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { PortifolioService, PortifolioProject } from '../shared/portifolio.service';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css'],
  providers: [PortifolioService]
})
export class PortifolioComponent implements OnInit {
  public mockItens: PortifolioProject[];
  public itens: PortifolioProject[];
  public items: FirebaseListObservable<any[]>;

  constructor(
    private portifolioService: PortifolioService,
    af: AngularFire
  ) {
    this.items = af.database.list('/portifolio-projects');
  }

  ngOnInit() {
    this.mockItens = this.portifolioService.getPortifolioItems();
    this.portifolioService.getPortifolioItemsAsync().subscribe(items => this.itens = items);
  }

  getModalId(item: PortifolioProject) {
    return 'portfolioModal' + item.img.replace(' ', '-');
  }

  addShitToServer() {
    this.portifolioService.addShittoServer();
  }

}
