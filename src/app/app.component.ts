import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam';
  public data = [
    {
      'name':'Electricidad',
      'description': 'Some quick example text to build on the card title and make up the bulk of the cards content',
      'category':'autos'
    },
    {
      'name':'Auxilio Medico',
      'description': 'Some quick example text to build on the card title and make up the bulk of the cards content',
      'category':'salud'
    },
    {
      'name':'Gasfitero',
      'description': 'Some quick example text to build on the card title and make up the bulk of the cards content',
      'category':'hogar'
    }
  ]

  public textAlert;

  public name = '';
  public description = '';
  public category = 'select';
  public alert = 0;
  public indexPublic;
  public editOrPublic = 0;
  public term = '';

  save(){
    if (this.name == '') {
      this.textAlert = "Escribre un Nombre";
      this.alert = 1
      setTimeout(()=>{
        this.alert = 0;
      }, 3000);
    } else if(this.description == '' || this.description == ' '){
      this.textAlert = "Escribe una descripción";
      this.alert = 1
      setTimeout(()=>{
        this.alert = 0;
      }, 3000);
    }else if(this.category == 'select'){
      this.textAlert = "Seleccionar categoria";
      this.alert = 1
      setTimeout(()=>{
        this.alert = 0;
      }, 3000);
    }else {
      let elements = {
        'name': this.name,
        'description': this.description,
        'category':this.category
      }
      const result = this.data.filter(data => data.name == this.name);
  
      if (result.length == 0) {
        this.alert = 0
        this.data.push(elements)
        this.name = '';
        this.description = ''; 
        this.category = 'select'; 
      }else {
        this.textAlert = "El nombre ya existe"
        this.alert = 1
        setTimeout(()=>{
          this.alert = 0;
        }, 3000);
      }
      console.log("Guardar", elements, this.data)
    }
    
    
   
  }

  cancel(){
    this.name = '';
    this.description = '';  
    this.category = '';  
    console.log("Cancelar");
    this.editOrPublic = 0;
  }

  edit(data,i){
    this.name = data.name;
    this.description = data.description;
    this.category = data.category;
    const fiter = this.data.findIndex(x => x.name == data.name)
    this.indexPublic = fiter;
    this.editOrPublic = 1;
  }

  editSave() {
    this.data[this.indexPublic].name = this.name;
    this.data[this.indexPublic].description = this.description;
    this.data[this.indexPublic].category = this.category;
    this.editOrPublic = 0;
    this.name = '';
    this.description = ''; 
    this.category = ''; 
  }

  remove(data,i){
    const fiter = this.data.findIndex(x => x.name == data.name)
    this.data.splice(fiter,1)
    console.log("Remover",fiter , data.name)
  }

  filter(i){
    if (i == 1) {
      this.term = ''
    }else if (i == 2) {
      this.term = 'autos'
    }else if (i == 3) {
      this.term = 'salud'
    }else {
      this.term = 'hogar'
    }
    console.log(i)
  }

}


