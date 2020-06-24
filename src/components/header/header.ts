import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'shared-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() pageTitle = ""
}