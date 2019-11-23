import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Human } from './human';
import { HumanViewModel } from './human_view_model';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    human: Human = new Human();   // изменяемый товар
    humans: HumanViewModel[];                // массив товаров
    tableMode: boolean = false;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadHumans();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadHumans() {
        this.dataService.getHumans()
            .subscribe((data: HumanViewModel[]) => this.humans = data);
    }
    // сохранение данных
    save() {
        this.dataService.createHuman(this.human)
            .subscribe((data: HumanViewModel) => {
                this.humans.push(data);
                alert("Norm flag: " + data.isNorm);
            });
        this.cancel();
    }
    cancel() { 
        this.human = new Human();
        this.tableMode = true;
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
    changeTableMode() {
        this.tableMode = !this.tableMode;
    }
}