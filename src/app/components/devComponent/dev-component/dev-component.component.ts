import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-component',
  templateUrl: './dev-component.component.html',
  styleUrls: ['./dev-component.component.scss'],
})
export class DevComponentComponent  implements OnInit {

  @Input() name : string = ''
  @Input() role : string = ''
  @Input() role_description : string = ''
  @Input() picture : string = ''

  constructor() { }

  ngOnInit() {}

}
