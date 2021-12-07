import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-route-f',
  templateUrl: './route-f.component.html',
  styleUrls: ['./route-f.component.css']
})
export class RouteFComponent implements OnInit {

  @ViewChild('container') container!: ElementRef
  count: number = 1;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') scroll(): void {

    const div = this.renderer.createElement('div');
    div.className = this.count.toString();

    const button = this.renderer.createElement('button');
    const text = this.renderer.createText(`Button ${this.count}`);
    this.renderer.listen(button, 'click', () => {
      alert(`Button in Div ${div.className} is clicked!`);
    })
    this.renderer.appendChild(button, text);

    this.renderer.appendChild(div, button);
    this.renderer.appendChild(this.container.nativeElement, div);
    this.count++;
  }
}
