import { ActivityService } from './../../../Service/activity.service';
import { Activity } from './../activity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  id:number;
  activity: Activity;

  constructor(private route:ActivatedRoute, private activitysService:ActivityService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.activity = new Activity();
    this.activitysService.obtenerActivityId(this.id).subscribe(dato => {
      this.activity = dato;
    })
  }

  irAlaListaDeActivitys(){
    this.router.navigate(['/activitys']);
    swal('Actividad actualizada',`La actividad ${this.activity.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.activitysService.updateActivity(this.id,this.activity).subscribe(dato => {
      this.irAlaListaDeActivitys();
    },error => console.log(error));
  }

}
