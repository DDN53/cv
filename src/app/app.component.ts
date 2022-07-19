import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  imports: [
      MatChipsModule
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
}
