import { Component } from '@angular/core';
//import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  // since now we are going to use the service, we no longer need emitter..
  // comment it
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // inject the service here..
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // commenting emitter as we are using service
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    */
    //console.log('A server status changed, new status: ' + accountStatus);

    // don't create services like this. don't instantiate them
    /*
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    */
    this.accountsService.addAccount(accountName, accountStatus);

    // we will inject logging service in Account Service and will log statements directly in it
    //this.loggingService.logStatusChange(accountStatus);
  }
}
