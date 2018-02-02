"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var progress_component_1 = require('./progress.component');
var toolbar_component_1 = require('./toolbar.component');
var options_components_1 = require('./options.components');
var video_service_1 = require('./video.service');
var AppComponent = (function () {
    function AppComponent(videoService) {
        this.videoService = videoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.videoService.appSetup('videoDisplay');
        this.videoService.gatherJSON();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'video-app',
            template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div id=\"fullPlayer\" (mouseup)=\"videoService.dragStop($event)\" (mousemove)=\"videoService.dragMove($event)\" (mouseleave)=\"videoService.dragStop($event)\">\n\t\t          <div class=\"embed-responsive embed-responsive-16by9\">\n\t\t              <video id=\"videoDisplay\" (click)=\"videoService.playVideo()\" width=\"100%\" height=\"100%\" class=\"embed-responsive-item\"></video>\n\t\t              <div id=\"bigPlayButton\" ngClass=\"{'fade-out':videoService.isPlaying}\" [hidden]=\"videoService.isPlaying\" (click)=\"videoService.playVideo()\"><i class=\"fa fa-play\"></i></div>\n\t\t              <div id=\"videoTitle\" ngClass=\"{'fade-out':videoService.isPlaying}\" [hidden]=\"videoService.isPlaying\">{{ videoService.currentTitle }}</div>\n\t\t              <video-options ngClass=\"{'fade-out':!videoService.showDetails}\" [hidden]=\"!videoService.showDetails\"></video-options>\n\t\t          </div>\n\t\t          <video-progress></video-progress>\n\t\t          <video-toolbar></video-toolbar>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\"></div>\n\t\t</div>",
            directives: [
                progress_component_1.ProgressComponent,
                toolbar_component_1.ToolbarComponent,
                options_components_1.OptionsComponent
            ],
            providers: [
                video_service_1.VideoService
            ]
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map