import { Component, OnInit } from '@angular/core';
import { Wolf } from 'src/app/Wolf';
import { WolvesService } from 'src/app/service/wolves.service';

@Component({
  selector: 'app-our-wolves-page',
  templateUrl: './our-wolves-page.component.html',
  styleUrls: ['./our-wolves-page.component.css']
})
export class OurWolvesPageComponent implements OnInit {

  wolvesInScreen: Wolf[] = [];
  wolvesNotAdopted: Wolf[] = [];
  wolvesAdopted: Wolf[] = [];

  toggle: boolean = false;
  constructor(private wolfList: WolvesService ) { 
    this.wolfList.getAll().subscribe((wolves) => {
      this.wolvesNotAdopted = wolves;
      this.wolvesInScreen = wolves;
    });
    this.wolfList.getAllAdopted().subscribe((wolves) => this.wolvesAdopted = wolves);
  }

  ngOnInit(): void {
  }

  name: string = '';

  findWolf(){
    
    if(this.toggle){
      this.wolvesInScreen = this.wolvesAdopted.filter(e => {
        if(this.name === ''){
          return e;
        }
        else if(e.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())){
          return e;
        }
  
        return 0;
      });
    }else{
      this.wolvesInScreen = this.wolvesNotAdopted.filter(e => {
        if(this.name === ''){
          return e;
        }
        else if(e.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())){
          return e;
        }
        return 0;
      });
    }
  }

  toggleWolves(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.wolvesInScreen = this.wolvesAdopted
    }
    else{
      this.wolvesInScreen = this.wolvesNotAdopted
    }
  }
}
