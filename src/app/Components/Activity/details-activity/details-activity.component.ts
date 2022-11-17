import { Course } from './../../Course/course';
import { ActivityService } from './../../../Service/activity.service';
import { Activity } from './../activity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {

  id: number;
  activity: Activity;
  auxCourses: Array<Course> = [];
  constructor(
    private route: ActivatedRoute,
    private activitysService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.activity = new Activity();
    this.activitysService.obtenerActivityId(this.id).subscribe((dato) => {
      this.activity = dato;
      this.auxCourses.push(this.activity.course);
      swal(`Detalles de la actividad ${this.activity.name}`);
    });
  }

  updateActivity(id: number) {
    this.router.navigate(['update-activity', id]);
  }

  deleteActivity(id: number) {
    this.activitysService.deleteActivity(id).subscribe((dato) => {
      this.router.navigate(['/activitys']);
    });
  }

  listActivity() {
    this.router.navigate(['/activitys']);
  }
}
