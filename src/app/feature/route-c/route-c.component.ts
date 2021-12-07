import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-c',
  templateUrl: './route-c.component.html',
  styleUrls: ['./route-c.component.css']
})
export class RouteCComponent implements OnInit {

public  countDownValue: number;
 public buttonTrigger!: string;
 public currentTimerValue!: number;

  constructor() {
    this.countDownValue = 0;
  }

  ngOnInit(): void {
  }

 public buttonValue(event: string): void {
    this.buttonTrigger = event;
  }

 public countDown(event: number): void {
    this.countDownValue = event;
  }

 public currentTimed(event: number): void {
    this.currentTimerValue = event;
  }

}
