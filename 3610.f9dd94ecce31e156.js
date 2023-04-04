"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3610],{3610:(C,u,s)=>{s.r(u),s.d(u,{UnitsListPage:()=>v});var _=s(5861),g=s(6895),i=s(7151),d=s(8242),t=s(1571),m=s(2218);function p(r,l){if(1&r){const n=t.EpF();t.TgZ(0,"ion-item",2),t.NdJ("click",function(){const a=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.viewUnit(a))}),t.TgZ(1,"ion-avatar",4),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"ion-label"),t._uU(4),t.qZA(),t.TgZ(5,"ion-note",6),t._uU(6),t.qZA(),t.TgZ(7,"ion-button",7),t.NdJ("click",function(o){const c=t.CHM(n).$implicit;return t.oxw().editUnit(c),t.KtG(o.stopPropagation())}),t._UZ(8,"ion-icon",8),t.qZA(),t.TgZ(9,"ion-button",7),t.NdJ("click",function(o){const c=t.CHM(n).$implicit;return t.oxw().removeUnit(c),t.KtG(o.stopPropagation())}),t._UZ(10,"ion-icon",9),t.qZA()()}if(2&r){const n=l.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",n.image||"assets/default-unit-image.png",t.LSH),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.hij("",e.unitService.calcUnitCost(n),"pts")}}let v=(()=>{class r{constructor(n,e,o,a){this.navCtrl=n,this.unitService=e,this.modalController=o,this.alertController=a,this.units=[]}ngOnInit(){var n=this;return(0,_.Z)(function*(){yield n.unitService.initialize(),n.units=n.unitService.getUnits(),n.unitService.changes.subscribe(()=>{n.units=n.unitService.getUnits()})})()}ngOnDestroy(){var n=this;return(0,_.Z)(function*(){n.unitService.changes.unsubscribe()})()}viewUnit(n){var e=this;return(0,_.Z)(function*(){yield(yield e.modalController.create({component:d.UnitViewPage,componentProps:{unit:n}})).present()})()}createUnit(){this.navCtrl.navigateForward("/unit-editor")}editUnit(n){this.navCtrl.navigateForward(`/unit-editor?unitId=${n.id}`)}removeUnit(n){var e=this;return(0,_.Z)(function*(){yield(yield e.alertController.create({header:"Remove Unit",message:"Are you sure you want to remove this unit?",buttons:[{text:"Cancel",role:"cancel"},{text:"Remove",handler:()=>{e.unitService.removeUnit(n),e.units=e.unitService.getUnits()}}]})).present()})()}navigateToWarbandsList(){this.navCtrl.navigateForward("/warbands-list")}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(i.SH),t.Y36(m._),t.Y36(i.IN),t.Y36(i.Br))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-units-list"]],standalone:!0,features:[t.jDz],decls:10,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["slot","start"],[3,"src"],["slot","end"],["fill","clear","slot","end",3,"click"],["slot","icon-only","name","pencil"],["slot","icon-only","name","trash"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Units List "),t.qZA()()(),t.TgZ(4,"ion-content")(5,"ion-list"),t.YNc(6,p,11,3,"ion-item",0),t.qZA(),t.TgZ(7,"ion-fab",1)(8,"ion-fab-button",2),t.NdJ("click",function(){return e.createUnit()}),t._UZ(9,"ion-icon",3),t.qZA()()()),2&n&&(t.xp6(6),t.Q6J("ngForOf",e.units))},dependencies:[i.Pc,i.BJ,i.YG,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.uN,i.wd,i.sr,g.ez,g.sg],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}}]);