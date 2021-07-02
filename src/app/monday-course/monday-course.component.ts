 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monday-course',
  templateUrl: './monday-course.component.html',
  styleUrls: ['./monday-course.component.css']
})
export class MondayCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
  course =[
    {'id':1,'name':'Learn Angular','description': 'Angular Tutorial covers everything from, It is a simple step ... We have created a simple and step by step tutorial for beginners to learn all the features of the Angular.'},
    {'id':2,'name':'Learn Typescript','description':  'Learning TypeScript is a bit more difficult than learning JavaScript. ... But, with some practice and time, you should have no trouble learning TypeScript.'},
    {'id':3,'name':'Learn Nodejs','description':'Getting started guide to Node.js, the server-side JavaScript runtime ... addition to the client-side code without the need to learn a completely different language.'}
]

}
