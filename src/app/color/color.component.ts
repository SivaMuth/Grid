import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../customer';
import { CustomerService } from '../customerservice';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  customers:any[] =[];

  selectedCustomers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  @ViewChild('dt')
  table!: Table;

  checked1: boolean = false;
  
  constructor(private customerService: CustomerService,private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach(customer => customer.date = new Date(customer.date));
      });

     
      this.primengConfig.ripple = true;
  }
  onActivityChange(event: { target: { value: any; }; }) {
    const value = event.target.value;
    if (value && value.trim().length) {
        const activity = parseInt(value);

        if (!isNaN(activity)) {
            this.table.filter(activity, 'activity', 'gte');
        }
    }
}

onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
}

formatDate(date:any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
}

onRepresentativeChange(event: { value: any; }) {
    this.table.filter(event.value, 'representative', 'in')
}
}
