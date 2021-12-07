import { Component, OnInit } from '@angular/core';
import { interval, ObservableInput, skipWhile, Subscription, take, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
  btnTrigger!: string;

 public timerValue: any;
 public timeInterval!: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

    this.sharedService.countDownValue.subscribe((res) => {
      this.timerValue = res;
    });

    this.sharedService.btnTrigger.subscribe((res) => {
      this.btnTrigger = res;
      if (this.timeInterval !== undefined) { this.timeInterval.unsubscribe(); }
      this.timer();
    })
  }

 private timer(): void {
    this.timeInterval = interval(1000).subscribe((res: any) => {
      if (this.timerValue <= 0 || this.btnTrigger !== 'Start') {
        this.cancelTimer();
      }
      else {
        this.timerValue -= 1;
        this.sharedService.currentCountValue.next(this.timerValue);
      }
    });
  }

 private cancelTimer(): void {
    this.timeInterval.unsubscribe();
    if (this.btnTrigger === 'Reset') { this.timerValue = 0; }
  }

  ngOnDestry() {
    this.timeInterval.unsubscribe();
  }
}
