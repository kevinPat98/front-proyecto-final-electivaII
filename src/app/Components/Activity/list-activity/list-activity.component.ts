import { ActivityService } from './../../../Service/activity.service';
import { Activity } from './../activity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  activitys: Activity[];

  constructor(private activityService: ActivityService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerActivitys();
  }

  private obtenerActivitys(){
    this.activityService.obtenerLisActivity().subscribe(dato => {
      this.activitys = dato;
    })
  }

  deleteActivity(id:number){
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la Actividad',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if(result.value){
        this.activityService.deleteActivity(id).subscribe(dato => {
          this.obtenerActivitys();
          swal(
            'Actividad eliminada',
            'La actividad ha sido eliminado con exito',
            'success'
          );
        })
      }
    })
    
  }

  updateActivity(id:number){
    this.router.navigate(['update-activity',id]);
  }

  detailsActivity(id: number){
    this.router.navigate(['details-activity',id]);
  }

}
