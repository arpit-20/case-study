import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-c-component',
  templateUrl: './c-component.component.html',
  styleUrls: ['./c-component.component.css']
})
export class CComponentComponent implements OnInit {

  @ViewChild('timestamp', { static: false }) timestamp!: ElementRef
  buttonTrigger!: string;

  constructor(private renderer: Renderer2,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.btnTrigger.subscribe((res) => {
      this.buttonTrigger = res;
      this.appendElement(this.buttonTrigger);
    });
  }

 private appendElement(btnTrigger: string): void {
    if (this.buttonTrigger === 'Reset') {
      const div = document.getElementById('timestamp');
      while (div?.firstChild) {
        div.removeChild(div.firstChild);
      }
    }
    else {
      const time = this.sharedService.getTime();
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
