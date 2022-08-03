import { Component, OnInit } from '@angular/core'
import { Item } from './item'
import { ItemsService } from './items.service';

@Component({
    templateUrl: './items-list.component.html'
})

export class ItemsListComponent implements OnInit{
    filteredItems: Item[] = [];
    _items: Item[] = [];
    _filterBy: string = "";
    constructor(private itemsService: ItemsService){}
    ngOnInit(): void{
        this._items = this.itemsService.retrieveAll();
        this.filteredItems = this._items;
    }
    set filter(value: string){
        this._filterBy = value;
        this.filteredItems = this._items.filter((item: Item) => item.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter(){
        return this._filterBy;
    }
}