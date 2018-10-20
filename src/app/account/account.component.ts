import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // comment the Outputs and emitters as we are using service
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // inject the service here..
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){

  } 
  onSetTo(status: string) {

    // using service, hence no more emitters.
    //this.statusChanged.emit({id: this.id, newStatus: status});

    //console.log('A server status changed, new status: ' + status);
    // we will inject logging service in Account Service and will log statements directly in it
    //this.loggingService.logStatusChange(status);
    this.accountsService.updateStatus(this.id, status);

    // emit an event
    this.accountsService.statusUpdated.emit({name: this.accountsService.accounts[this.id].name, status: this.accountsService.accounts[this.id].status})
  }
}
