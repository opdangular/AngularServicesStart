import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {

  }

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
    this.accountsService.statusUpdated.subscribe(
      ({name, status}) => alert('Account ' + name + ' has new Status: ' + status)
    );
  }

}
