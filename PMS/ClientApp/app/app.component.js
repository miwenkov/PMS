var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Human } from './human';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.human = new Human(); // изменяемый товар
        this.tableMode = false; // табличный режим
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadHumans(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    AppComponent.prototype.loadHumans = function () {
        var _this = this;
        this.dataService.getHumans()
            .subscribe(function (data) { return _this.humans = data; });
    };
    // сохранение данных
    AppComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createHuman(this.human)
            .subscribe(function (data) {
            _this.humans.push(data);
            alert(data.isNorm);
        });
        this.cancel();
    };
    AppComponent.prototype.cancel = function () {
        this.human = new Human();
        this.tableMode = true;
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent.prototype.changeTableMode = function () {
        this.tableMode = !this.tableMode;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map