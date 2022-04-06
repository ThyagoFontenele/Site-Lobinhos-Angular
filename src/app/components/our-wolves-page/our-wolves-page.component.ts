import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { Wolf } from 'src/app/Wolf';
import { WolvesService } from 'src/app/service/wolves.service';

@Component({
  selector: 'app-our-wolves-page',
  templateUrl: './our-wolves-page.component.html',
  styleUrls: ['./our-wolves-page.component.css']
})
export class OurWolvesPageComponent implements DoCheck{

  wolvesInScreen: Wolf[] = [];
  wolvesInMemory: Wolf[] = [];
  wolvesNotAdopted: Wolf[] = [];
  wolvesAdopted: Wolf[] = [];

  toggle: boolean = false;
  name: string = '';

  pages!:number;
  page: number = 1;
  offset: number = 0;

  setBackPage(){
    this.page--;
    this.offset -= 5;
    this.wolvesInScreen = [];
    for (let i = this.offset; i < this.page*5; i++) {
      if(this.wolvesInMemory[i] !== undefined){
        this.wolvesInScreen.push(this.wolvesInMemory[i]);
      }
    }
  }
  setNextPage(){
    this.page++;
    this.offset += 5;
    this.wolvesInScreen = [];
    for (let i = this.offset; i < this.page*5; i++) {
      if(this.wolvesInMemory[i] !== undefined){
        this.wolvesInScreen.push(this.wolvesInMemory[i]);
      }
    }
  }
  setPage(){
    this.wolvesInScreen = [];
    for (let i = this.offset; i < this.offset+(this.page*5); i++) {
      if(this.wolvesInMemory[i] !== undefined){
        this.wolvesInScreen.push(this.wolvesInMemory[i]);
      }
    }
  }
  ngDoCheck() {
    this.pages = Math.ceil(this.wolvesInMemory.length / 5);
  }

  constructor(private wolfList: WolvesService ) { 
    this.wolfList.getAll().subscribe((wolves) => {
      this.wolvesNotAdopted = wolves;
      this.wolvesInMemory = wolves;
      this.setPage();
    });
    this.wolfList.getAllAdopted().subscribe((wolves) => this.wolvesAdopted = wolves);
  }

  findWolf(){
    
    if(this.toggle){
      this.wolvesInMemory = this.wolvesAdopted.filter(e => {
        if(this.name === ''){
          return e;
        }
        else if(e.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())){
          return e;
        }
  
        return 0;
      });
    }else{
      this.wolvesInMemory = this.wolvesNotAdopted.filter(e => {
        if(this.name === ''){
          return e;
        }
        else if(e.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())){
          return e;
        }
        return 0;
      });
    }
    this.setPage();
  }
  toggleWolves(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.wolvesInMemory = this.wolvesAdopted;
      this.setPage();
    }
    else{
      this.wolvesInMemory = this.wolvesNotAdopted;
      this.setPage();
    }
  }
}
