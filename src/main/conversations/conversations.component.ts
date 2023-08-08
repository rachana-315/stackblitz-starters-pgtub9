import { Component, OnInit } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports:[HeaderComponent, FooterComponent, ContentComponent],
})
export class ConversationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
