import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  class: string = 'menu-burger'
  navClass: string = 'nav';
  classHeader: string = '';
  
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop > 700){
      this.classHeader = 'active';
    }
    else{
      this.classHeader = ''
    }
  }

  toggleActive(){
    if(this.class === 'menu-burger'){
      this.class = 'menu-burger active';
      this.navClass = 'nav active';
    }
    else{ 
      this.class = 'menu-burger';
      this.navClass = 'nav';
    }
  }
}