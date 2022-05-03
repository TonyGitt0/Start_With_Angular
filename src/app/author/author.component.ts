import { Component, OnInit } from '@angular/core';
import { AuthorClass } from "./author.class";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  ShowAuthor: boolean =  true
  visible: boolean = false

  authorName = "Enter author name"
  authorAge = "Enter author age"
  authorLname = "Enter author last name"


  constructor() { }

  authors : AuthorClass [] = [
    {
      id:0,
      name:"Antonio",
      lastName:"Vivaldi",
      age: 134
    },
    {
      id:1,
      name:"Giacomo",
      lastName:"Leopardi",
      age: 90
    },
    {
      id:2,
      name:"Giuseppe",
      lastName:"Garibaldi",
      age: 78
    },
    {
      id:3,
      name:"Primo",
      lastName:"Levi",
      age: 80
    }
  ];

  DeleteAuthor(id:number){
    this.authors.splice(id,1)
  }

  addAuthor(myname:any,mylname:any,myage:any){
    if(myname.length >0 && mylname.length>0 && myage.length >0) {
      let author: AuthorClass = {
        id: this.authors.length + 1,
        name: myname,
        lastName: mylname,
        age: myage
      };
      this.authors.push(author);
    }
  }

  onClick(){
    this.ShowAuthor = !this.ShowAuthor;
    this.visible = !this.visible
  }

  ngOnInit(): void {
  }

}
