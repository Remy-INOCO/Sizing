import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-info-component',
  templateUrl: './display-info-component.component.html',
  styleUrls: ['./display-info-component.component.scss']
})
export class DisplayInfoComponentComponent implements OnInit {
@Input() data: {name: string, height: number, description: string, imageURL: string}
  constructor() { }

  ngOnInit(): void {
  }

}
