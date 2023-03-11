import { Component, HostListener, ElementRef, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(
    private route: ActivatedRoute
  ) {}

  name: string = '';
  status: boolean = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['home'];
    })
  }

 

 clickEvent(){
  console.log(this.status)
  this.status = !this.status;    
  console.log(this.status)   
}

}
  
  