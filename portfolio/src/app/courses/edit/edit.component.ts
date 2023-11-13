import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crs-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  selectedCourse!: ICourse;

  constructor(private route:ActivatedRoute, private dataService: CoursesService, private router:Router) {}

  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getCourse(id).subscribe(data => this.selectedCourse = data);
  }

  onCancel() {
      this.router.navigate(['/courses']);
    }

  onSubmit():void {    
    this.dataService.updateCourse(this.selectedCourse).subscribe(() => this.router.navigate(['/courses']));
  }
    

  
}
