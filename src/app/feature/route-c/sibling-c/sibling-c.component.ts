import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sibling-c',
  templateUrl: './sibling-c.component.html',
  styleUrls: ['./sibling-c.component.css']
})
export class SiblingCComponent implements OnInit, OnChanges {

  @ViewChild('timestamp', { static: false }) timestamp!: ElementRef
  @Input() buttonTrigger!: string;

  constructor(private renderer: Renderer2,
    private shared: SharedService) { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['buttonTrigger'].currentValue !== undefined) {
      this.appendElement(change['buttonTrigger'].currentValue);
    }
  }

  private appendElement(btnTrigger: string): void {
    if (this.buttonTrigger === 'Reset') {
      const div = document.getElementById('timestamp');
      while (div?.firstChild) {
        div.removeChild(div.firstChild);
      }
    }
    else {
      const time = this.shared.getTime();
      const message = btnTrigger === 'Start' ? `Started at ${new Date().toISOString().slice(0, -14)} ${time}` : `Paused at ${new Date().toISOString().slice(0, -14)} ${time}`;

      const strong = this.renderer.createElement('strong');
      const br = this.renderer.createElement('br');
      const text = this.renderer.createText(message);
      this.renderer.appendChild(strong, text);
      this.renderer.appendChild(this.timestamp.nativeElement, strong);
      this.renderer.appendChild(this.timestamp.nativeElement, br);
    }
  }

}
