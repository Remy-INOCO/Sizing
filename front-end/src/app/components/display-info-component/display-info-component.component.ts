import {Component, Input, OnInit} from '@angular/core';
import {ISizing} from "../../models/sizing";

@Component({
  selector: 'app-display-info-component',
  templateUrl: './display-info-component.component.html',
  styleUrls: ['./display-info-component.component.scss']
})
export class DisplayInfoComponentComponent implements OnInit {
@Input() data: ISizing;

  constructor() { }

  ngOnInit(): void {
  }

}
