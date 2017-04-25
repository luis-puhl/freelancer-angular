import { Component, OnInit } from '@angular/core';

import { ContactMessage, ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public newContactMessage: ContactMessage;

  constructor(
    private contactService: ContactService
  ) {
    this.newContactMessage = new ContactMessage();
  }

  ngOnInit() {
  }

   onSubmit() {
     this.contactService.sendContactMessage(this.newContactMessage);
     this.newContactMessage = new ContactMessage();
   }
}
