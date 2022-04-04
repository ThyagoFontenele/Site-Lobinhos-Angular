import { Component, OnInit } from '@angular/core';
import { WolvesService } from 'src/app/service/wolves.service';
import { ActivatedRoute } from '@angular/router';
import { Wolf } from 'src/app/Wolf';
@Component({
  selector: 'app-adopt-wolf',
  templateUrl: './adopt-wolf.component.html',
  styleUrls: ['./adopt-wolf.component.scss']
})
export class AdoptWolfComponent implements OnInit {

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
