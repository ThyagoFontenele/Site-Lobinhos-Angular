import { Component, OnInit } from '@angular/core';

import { WolvesService } from 'src/app/service/wolves.service';
import { Wolf } from 'src/app/Wolf';


@Component({
  selector: 'app-wolfs',
  templateUrl: './wolfs.component.html',
  styleUrls: ['./wolfs.component.css']
})

export class WolfsComponent implements OnInit {
 
  wolves?: Wolf[]; 
  
  constructor(private wolvesList: WolvesService) { 
    this.getWolves();
  }
  
  ngOnInit(): void {
  }

  getWolves(): void {
    this.wolvesList.getAll().subscribe((wolves) => (this.wolves = wolves));
  }

  removeWolf(id: number): void {
    this.wolvesList.remove(id).subscribe();
  }
}

