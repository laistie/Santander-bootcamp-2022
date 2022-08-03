import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ItemsService{
    retrieveAll(): Item[]{
        return ITEMS;
    }
}

var ITEMS: Item[] = [
    {
        id: 1,
        name: 'Wings',
        code: '#YG0393',
        imageUrl: '/assets/images/BTS-WINGS.jpg',
        price: 57.98,
        date: 2016
    },
    {
        id: 2,
        name: 'Sunrise',
        code: '#FL2607',
        imageUrl: '/assets/images/DAY6-SUNRISE.png',
        price: 43.32,
        date: 2017
    },
    {
        id: 3,
        name: 'Universe',
        code: '#GD1217',
        imageUrl: '/assets/images/EXO-UNIVERSE.jpg',
        price: 52.91,
        date: 2017
    }
]