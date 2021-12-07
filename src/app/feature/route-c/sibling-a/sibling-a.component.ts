import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sibling-a',
  templateUrl: './sibling-a.component.html',
  styleUrls: ['./sibling-a.component.css']
})
export class SiblingAComponent implements OnInit {

  @Input() countDown!: number;
  @Input() btnTrigger!: string;
  @Output() currentTimedValue: EventEmitter<number> = new EventEmitter();

 public timerValue: any;
 public timeInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentBtn = changes['btnTrigger'].currentValue;
    const currentCount = changes['countDown']?.currentValue;

    if ( currentBtn !== undefined) {
      if(currentCount !== undefined && currentCount !==0){
        
      this.timerValue = currentCount;
      }
      if (this.timeInterval !== undefined) {
         this.timeInterval.unsubscribe(); 
        }
      this.timer();
    }
  }

 private timer(): void {
    this.timeInterval = interval(1000).subscribe((res: any) => {
      if (this.timerValue <= 0 || this.btnTrigger !== 'Start') {
        this.cancelTimer();
      }
      else {
        this.timerValue -= 1;
        this.currentTimedValue.emit(this.timerValue);
      }
    });
  }

 private cancelTimer(): void {
    this.timeInterval.unsubscribe();
    if (this.btnTrigger === 'Reset') {
       this.timerValue = 0;
       }
  }

}
