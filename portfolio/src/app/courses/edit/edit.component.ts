import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model';

@Component({
  selector: 'crs-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  course!: ICourse;

  constructor(private route:ActivatedRoute, private dataService: CoursesService) {}

  ngOnInit():void {
    const id = +this.route.params.paramMap.get('id');
    this.dataService.getCourse(id).subscribe(data => this.course = data);
  }



  
}
