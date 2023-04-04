"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6902],{6902:(P,p,_)=>{_.r(p),_.d(p,{WarbandEditorPage:()=>Z});var m=_(5861),l=_(6895),u=_(433),e=_(7151),b=_(8242),t=_(1571),h=_(9430),x=_(2218);function f(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"ion-input",11),t.NdJ("input",function(a){t.CHM(n);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.onUnitCountInput(o.id,a))})("click",function(a){t.CHM(n);const o=t.oxw(2);return t.KtG(o.onUnitCountClick(a))}),t.qZA()}if(2&r){const n=t.oxw().$implicit,i=t.oxw();t.Q6J("placeholder",i.getUnitCount(n))}}function U(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"ion-item")(1,"ion-avatar",7),t.NdJ("click",function(){const o=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.viewUnit(o))}),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"ion-checkbox",9),t.NdJ("ionChange",function(){const o=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.toggleUnitSelection(o))}),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t.qZA(),t.YNc(9,f,1,1,"ion-input",10),t.qZA()}if(2&r){const n=c.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",n.image||"assets/default-unit-image.png",t.LSH),t.xp6(1),t.Q6J("checked",i.isUnitInWarband(n)),t.xp6(1),t.hij(" ",n.name,""),t.xp6(2),t.hij(" Quality: ",n.quality,""),t.xp6(2),t.hij(" Cost: ",i.unitService.calcUnitCost(n),"pts "),t.xp6(1),t.Q6J("ngIf",i.isUnitInWarband(n))}}function C(r,c){1&r&&(t.TgZ(0,"ion-list-header")(1,"ion-label"),t._uU(2,"Unique Units"),t.qZA()())}function E(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"ion-input",11),t.NdJ("input",function(a){t.CHM(n);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.onUnitCountInput(o.id,a))})("click",function(a){t.CHM(n);const o=t.oxw(2);return t.KtG(o.onUnitCountClick(a))}),t.qZA()}if(2&r){const n=t.oxw().$implicit,i=t.oxw();t.Q6J("placeholder",i.getUnitCount(n))}}function W(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"ion-item")(1,"ion-avatar",7),t.NdJ("click",function(){const o=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.viewUnit(o))}),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"ion-checkbox",9),t.NdJ("ionChange",function(){const o=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.toggleUnitSelection(o))}),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t.qZA(),t.YNc(9,E,1,1,"ion-input",10),t.qZA()}if(2&r){const n=c.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",n.image||"assets/default-unit-image.png",t.LSH),t.xp6(1),t.Q6J("checked",i.isUnitInWarband(n)),t.xp6(1),t.hij(" ",n.name,""),t.xp6(2),t.hij(" Quality: ",n.quality,""),t.xp6(2),t.hij(" Cost: ",i.unitService.calcUnitCost(n),"pts "),t.xp6(1),t.Q6J("ngIf",i.isUnitInWarband(n))}}let Z=(()=>{class r{constructor(n,i,a,o,s){this.navCtrl=n,this.route=i,this.fb=a,this.unitService=o,this.modalController=s,this.unitList=[],this.uniqueUnits=[],this.unitList=this.unitService.getUnits(),this.paramID=this.route.snapshot.queryParamMap.get("warbandId");const g={id:"",name:"",description:"",units:[]};if(this.paramID){const d=this.unitService.getWarbandById(this.paramID);this.warband=d||g}else this.warband=g;this.warbandForm=this.fb.group({name:[this.warband.name,u.kI.required],description:[this.warband.description]}),this.units=this.warband.units,this.warband.units.forEach(d=>{this.unitList.some(v=>v.id===d.unit.id)||this.uniqueUnits.push(d.unit)})}toggleUnitSelection(n){const i=this.units.findIndex(a=>a.unit.id===n.id);-1===i?this.units.push({unit:n,count:1}):this.units.splice(i,1)}saveWarband(){var n=this;return(0,m.Z)(function*(){const i={...n.warbandForm.value,units:n.units};n.paramID?n.unitService.updateWarband({...n.warband,...i}):n.unitService.createWarband(i),n.navCtrl.navigateBack("/tabs/warbands")})()}viewUnit(n){var i=this;return(0,m.Z)(function*(){yield(yield i.modalController.create({component:b.UnitViewPage,componentProps:{unit:n}})).present()})()}isUnitInWarband(n){return this.units.some(i=>i.unit.id===n.id)}getUnitCount(n){const i=this.units.findIndex(a=>a.unit.id===n.id);return-1!==i?this.units[i].count:0}onUnitCountClick(n){n.target.value=""}onUnitCountInput(n,i){const a=i.target.valueAsNumber;if(console.log(a),!isNaN(a)){const o=this.units.findIndex(s=>s.unit.id===n);-1!==o&&(this.units[o].count=a)}}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(e.SH),t.Y36(h.gz),t.Y36(u.qu),t.Y36(x._),t.Y36(e.IN))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-warband-editor"]],standalone:!0,features:[t.jDz],decls:29,vars:7,consts:[["slot","start"],[3,"formGroup"],["formControlName","name","label","Warband Name"],["formControlName","description","label","Warband Description"],[4,"ngFor","ngForOf"],[4,"ngIf"],["expand","full",3,"disabled","click"],["slot","start",3,"click"],[3,"src"],["labelPlacement","start",3,"checked","ionChange"],["type","number","min","1","label","","labelPlacement","stacked","class","count-input",3,"placeholder","input","click",4,"ngIf"],["type","number","min","1","label","","labelPlacement","stacked",1,"count-input",3,"placeholder","input","click"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content")(7,"form",1)(8,"ion-item"),t._UZ(9,"ion-input",2),t.qZA(),t.TgZ(10,"ion-item"),t._UZ(11,"ion-textarea",3),t.qZA()(),t.TgZ(12,"ion-item")(13,"ion-label"),t._uU(14,"Warband Cost:"),t.qZA(),t.TgZ(15,"ion-text"),t._uU(16),t.qZA()(),t.TgZ(17,"ion-list-header")(18,"ion-label"),t._uU(19,"Available Units"),t.qZA()(),t.TgZ(20,"ion-list")(21,"ion-item"),t._uU(22,"Click on a unit's avatar to view it's full description."),t.qZA(),t.YNc(23,U,10,6,"ion-item",4),t.qZA(),t.YNc(24,C,3,0,"ion-list-header",5),t.TgZ(25,"ion-list"),t.YNc(26,W,10,6,"ion-item",4),t.qZA(),t.TgZ(27,"ion-button",6),t.NdJ("click",function(){return i.saveWarband()}),t._uU(28,"Save Warband"),t.qZA()()),2&n&&(t.xp6(5),t.Oqu(i.paramID?"Edit Warband":"Create Warband"),t.xp6(2),t.Q6J("formGroup",i.warbandForm),t.xp6(9),t.hij("",i.unitService.calcWarbandCost(i.warband),"pts"),t.xp6(7),t.Q6J("ngForOf",i.unitList),t.xp6(1),t.Q6J("ngIf",i.uniqueUnits.length),t.xp6(2),t.Q6J("ngForOf",i.uniqueUnits),t.xp6(1),t.Q6J("disabled",!i.warbandForm.valid))},dependencies:[e.Pc,e.BJ,e.oU,e.YG,e.Sm,e.nz,e.W2,e.Gu,e.pK,e.Ie,e.Q$,e.q_,e.yh,e.yW,e.g2,e.wd,e.sr,e.w,e.as,e.j9,e.cs,l.ez,l.sg,l.O5,u.UX,u._Y,u.JJ,u.JL,u.sg,u.u,u.u5],styles:[".count-input[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0;width:50px;max-height:50px;font-size:1.1em;font-weight:700;text-align:center;border:2px solid white;border-radius:8px;margin-left:12px}"]}),r})()}}]);