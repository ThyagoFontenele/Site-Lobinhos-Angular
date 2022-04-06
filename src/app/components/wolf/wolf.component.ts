import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WolvesService } from '../../service/wolves.service';

import { Wolf } from '../../Wolf';

@Component({
  selector: 'app-wolf',
  templateUrl: './wolf.component.html',
  styleUrls: ['./wolf.component.scss']
})
export class WolfComponent implements OnInit {

  wolf?: Wolf;

  constructor(private wolvesList: WolvesService, private route: ActivatedRoute) { 
    this.getWolf();
  }
  id:number = Number(this.route.snapshot.paramMap.get('id'));
  ngOnInit(): void {
  }

  getWolf() {
    this.wolvesList.getOne(this.id).subscribe((wolf) => (this.wolf = wolf));
  }
}
