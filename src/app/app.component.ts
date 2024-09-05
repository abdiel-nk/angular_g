import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule, NgIf } from '@angular/common';
import { DashboardComponent } from './dashboard/component/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf,RouterOutlet, TestComponent,DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular0';
  condition =true;
  message='from app componente'
  handleClick(){
    this.message = 'clicked at the app component';
  }
}
