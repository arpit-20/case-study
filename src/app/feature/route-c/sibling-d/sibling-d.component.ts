import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sibling-d',
  templateUrl: './sibling-d.component.html',
  styleUrls: ['./sibling-d.component.css']
})
export class SiblingDComponent implements OnInit, OnChanges {

  @Input() btnTrigger!: string;
public  start: number;
public  pause: number;

  constructor() {
    this.start = 0;
    this.pause = 0;
  }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    const current = change['btnTrigger'].currentValue;
    if (current !== undefined) {
      this.incrementCount(current);
    }
  }

  incrementCount(trigger: string) {
    if (trigger === 'Reset') {
      this.start = 0;
      this.pause = 0;
      return;
    }

    trigger === 'Start' ? this.start++ : this.pause++;
  }

}
