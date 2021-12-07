import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-d-component',
  templateUrl: './d-component.component.html',
  styleUrls: ['./d-component.component.css']
})
export class DComponentComponent implements OnInit {

 public start: number;
 public pause: number;

  constructor(private sharedService: SharedService) {
    this.start = 0;
    this.pause = 0;
  }

  ngOnInit(): void {
    this.sharedService.btnTrigger.subscribe((res) => {
      this.incrementCount(res);
    });
  }

 private incrementCount(trigger: string) {
    if (trigger === 'Reset') {
      this.start = 0;
      this.pause = 0;
      return;
    }
    trigger === 'Start' ? this.start++ : this.pause++;
  }

}
