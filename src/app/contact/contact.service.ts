import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class ContactMessage {
    constructor (
        public name?: string,
        public email?: string,
        public phone?: string,
        public message?: string
    ) { }
}

@Injectable()
export class ContactService {
    private storedMessages: FirebaseListObservable<any[]>;

    constructor(
        private angularFire: AngularFire
    ) { }

    get messages(): Observable<ContactMessage[]> {
        this.storedMessages = this.angularFire.database.list('/contact-messages');
        return this.storedMessages;
    }

    sendContactMessage(item: ContactMessage): string {
        const postListRef = this.angularFire.database.list('/contact-messages');
        const newPostRef = postListRef.push({
                'name': item.name,
                'email': item.email,
                'phone': item.phone,
                'message': item.message
        });
        return newPostRef.ref.toString();
    }
}

