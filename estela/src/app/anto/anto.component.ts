import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anto',
  templateUrl: './anto.component.html',
  styleUrls: ['./anto.component.css']
})
export class AntoComponent implements OnInit {
@Input() lala:string;
  constructor() { }

  ngOnInit() {
  }

}
