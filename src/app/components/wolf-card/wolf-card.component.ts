import { Component, OnInit, Input } from '@angular/core';
import { Wolf } from 'src/app/Wolf';

@Component({
  selector: 'app-wolf-card',
  templateUrl: './wolf-card.component.html',
  styleUrls: ['./wolf-card.component.css']
})
export class WolfCardComponent implements OnInit {

  @Input() wolf!: Wolf;
  @Input() hasButton?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
