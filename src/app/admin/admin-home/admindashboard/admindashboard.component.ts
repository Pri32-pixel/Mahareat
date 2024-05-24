import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
