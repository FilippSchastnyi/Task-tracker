import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: 'yellow' | 'red' | 'green' | 'black' = 'red';
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit()
  }

}
