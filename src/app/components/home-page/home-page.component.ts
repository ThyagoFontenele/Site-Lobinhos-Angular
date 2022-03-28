import { Component, OnInit } from '@angular/core';
import { ValoresService } from 'src/app/service/valores.service';
import { Valores } from 'src/app/Valores';
import { Wolf } from 'src/app/Wolf';
import { WolvesService } from 'src/app/service/wolves.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  values?: Valores[];
  
  wolves?: Wolf[];

  constructor(private valoresList: ValoresService, private wolfList: WolvesService) { 
    this.values = valoresList.getAll();
    
    wolfList.getAll().subscribe((wolves) => {
      const random = Math.round(Math.random() * (wolves.length - 5));
      this.wolves = wolves.splice(random, 2);
    });
  }

  ngOnInit(): void {
  }
  
}
