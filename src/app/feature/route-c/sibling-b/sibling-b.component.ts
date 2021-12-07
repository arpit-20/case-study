import {
  Component, Input, OnInit, Output, EventEmitter,
  SimpleChanges, ViewChild, ElementRef, Renderer2
} from '@angular/core';

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html',
  styleUrls: ['./sibling-b.component.css']
})
export class SiblingBComponent implements OnInit {

  @Input() currentCounterStop: any;
  @Output() buttonTriggered: EventEmitter<string> = new EventEmitter<string>();
  @Output() countDown: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('pause') pauseEl!: ElementRef;

public  timerValue: number;
public clickCount: number = 1;

  constructor(private renderer: Renderer2) {
    this.timerValue = 0;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes['currentCounterStop'].currentValue;

    if (current !== undefined) {
      this.timerValue = current;
    }
  }

 public startAndStop(): void {

    if (this.clickCount === 1) {
      this.countDown.emit(this.timerValue);
    }

    if (this.clickCount % 2 === 0) {
      const message = `Paused at ${this.timerValue}`;
      this.appendElement(message);

      this.buttonTriggered.emit('Stop');

    }
    else if (this.clickCount % 2 !== 0) {
      this.countDown.emit(this.timerValue);
      this.buttonTriggered.emit('Start');
    }
    this.clickCount++;
  }

 public reset() {
    const div = document.getElementById('pause');
    while (div?.firstChild) {
      div.removeChild(div.firstChild);
    }
    this.clickCount = 1;
    this.timerValue = 0;
    this.buttonTriggered.emit('Reset');
    this.countDown.emit(0);
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
