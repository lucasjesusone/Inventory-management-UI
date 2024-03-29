import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  title: string;
  displayedColumns: string[] = [
    "name",
    // "inscricaoEstadual",
    "status",
    // "cnpj",
    "city",
    "uf",
    "acoes",
  ];

  dataSource: ClientModel[];

  invoices: ClientModel[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: ClientService, private router: Router) {
    this.activatedRoute.data.subscribe((data) => {
      this.title = data.title;
    });
  }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices() {
    this.service.getAll().subscribe((res) => {
      this.invoices = res;
      this.dataSource = res;
    });
  }

  goToNew() {
    this.router.navigate(["/pages/client/new"]);
  }

}
