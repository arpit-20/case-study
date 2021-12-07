import {
  Component, OnInit, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {

  @ViewChild('pause') pauseEl!: ElementRef;

 public timerValue: number;
 public clickCount: number = 1;

  constructor(private renderer: Renderer2, private sharedService: SharedService) {
    this.timerValue = 0;
  }

  ngOnInit(): void {
    this.sharedService.currentCountValue.subscribe((res) => {
      this.timerValue = res;
    });
  }

  startAndStop(): void {

    if (this.clickCount === 1) {
      this.sharedService.countDownValue.next(this.timerValue);
    }

    if (this.clickCount % 2 === 0) {
      const message = `Paused at ${this.timerValue}`;
      this.appendElement(message);

      this.sharedService.btnTrigger.next('Stop');

    }
    else if (this.clickCount % 2 !== 0) {
      this.sharedService.btnTrigger.next('Start');
    }
    this.clickCount++;
  }

 public reset() {
    this.clickCount = 1;
    this.timerValue = 0;
    this.sharedService.btnTrigger.next('Reset');

    const div = document.getElementById('pause');
    while (div?.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

 private appendElement(message: string) {
    const strong = this.renderer.createElement('strong');
    const br = this.renderer.createElement('br');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(strong, text);
    this.renderer.appendChild(this.pauseEl.nativeElement, strong);
    this.renderer.appendChild(this.pauseEl.nativeElement, br);
  }

}
