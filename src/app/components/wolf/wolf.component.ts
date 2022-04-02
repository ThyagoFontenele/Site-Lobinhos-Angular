import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
  }

  getWolf() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wolvesList.getOne(id).subscribe((wolf) => (this.wolf = wolf));
  }
}
