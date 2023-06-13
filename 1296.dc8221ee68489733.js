"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1296],{1296:(w,y,s)=>{s.r(y),s.d(y,{SettingsPage:()=>b});var r=s(5861),C=s(6895),f=s(433),a=s(7151),e=s(1571),T=s(2218);function Z(l,m){1&l&&(e.TgZ(0,"ion-item")(1,"p"),e._uU(2," The Enhanced Unit Cost Rule is an optional rule that adds an additional cost to a unit's total cost based on the number of special rules it has. "),e._UZ(3,"br")(4,"br"),e._uU(5," The additional cost is calculated as ((number of special rules) - 3) * 10. This rule only applies to special rules with non-negative cost and only if the number of special rules with non-negative cost exceeds 3. "),e._UZ(6,"br")(7,"br"),e._uU(8," This rule is intended to provide a more balanced cost structure for units with many special rules, and to encourage players to choose a smaller number of high-impact special rules rather than many low-impact ones. "),e.qZA()())}let b=(()=>{class l{constructor(t,n){this.unitService=t,this.alertController=n,this.enhancedUnitCostRule=!1,this.appDeployment="6/13/2023, 6:42:12 PM (CST)",this.showEnhancedUnitCostDescription=!1}ngOnInit(){var t=this;return(0,r.Z)(function*(){t.enhancedUnitCostRule=yield t.unitService.getEnhancedUnitCostRule(),t.unitService.changes.subscribe((0,r.Z)(function*(){t.enhancedUnitCostRule=yield t.unitService.getEnhancedUnitCostRule()}))})()}ngOnDestroy(){var t=this;return(0,r.Z)(function*(){t.unitService.changes.unsubscribe()})()}onEnhancedUnitCostRuleToggleChange(t){var n=this;return(0,r.Z)(function*(){const o=t.detail.checked;yield n.unitService.setEnhancedUnitCostRule(o)})()}exportData(){var t=this;return(0,r.Z)(function*(){const n=t.unitService.exportData(),o=new Blob([n],{type:"text/plain;charset=utf-8"}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download="warstuff-backup.json",i.click()})()}importData(){var t=this;return(0,r.Z)(function*(){const n=document.createElement("input");n.type="file",n.addEventListener("change",function(){var o=(0,r.Z)(function*(i){var c;const d=null===(c=i.target.files)||void 0===c?void 0:c[0];if(d){const h=new FileReader;h.onload=function(){var v=(0,r.Z)(function*(p){var u,g;const _=null!==(u=null===(g=p.target)||void 0===g?void 0:g.result)&&void 0!==u?u:"";(yield t.unitService.importAndMergeData(_))?console.log("Data imported successfully"):console.error("Error importing data")});return function(p){return v.apply(this,arguments)}}(),h.readAsText(d)}});return function(i){return o.apply(this,arguments)}}()),n.click()})()}overwriteData(){var t=this;return(0,r.Z)(function*(){const n=document.createElement("input");n.type="file",n.addEventListener("change",function(){var o=(0,r.Z)(function*(i){var c;const d=null===(c=i.target.files)||void 0===c?void 0:c[0];if(d){const h=new FileReader;h.onload=function(){var v=(0,r.Z)(function*(p){var u,g;const _=null!==(u=null===(g=p.target)||void 0===g?void 0:g.result)&&void 0!==u?u:"";var E;yield(yield t.alertController.create({header:"Confirm Overwrite",message:"Are you sure you want to overwrite your data?",buttons:[{text:"Cancel",role:"cancel"},{text:"Overwrite",handler:(E=(0,r.Z)(function*(){(yield t.unitService.importAndOverwriteData(_))?console.log("Data imported successfully"):console.error("Error importing data")}),function(){return E.apply(this,arguments)})}]})).present()});return function(p){return v.apply(this,arguments)}}(),h.readAsText(d)}});return function(i){return o.apply(this,arguments)}}()),n.click()})()}toggleEnhancedUnitCostDescription(t){"ION-TOGGLE"!==t.target.tagName&&(this.showEnhancedUnitCostDescription=!this.showEnhancedUnitCostDescription)}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(T._),e.Y36(a.Br))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-settings"]],standalone:!0,features:[e.jDz],decls:18,vars:3,consts:[[3,"click"],["slot","end","aria-label","Toggle Enhanced Unit Cost Rule",3,"ngModel","ngModelChange","ionChange"],[4,"ngIf"],["expand","block",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Settings"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-item"),e._uU(6),e.qZA(),e.TgZ(7,"ion-item",0),e.NdJ("click",function(i){return n.toggleEnhancedUnitCostDescription(i)}),e.TgZ(8,"ion-label"),e._uU(9,"Enhanced Unit Cost Rule"),e.qZA(),e.TgZ(10,"ion-toggle",1),e.NdJ("ngModelChange",function(i){return n.enhancedUnitCostRule=i})("ionChange",function(i){return n.onEnhancedUnitCostRuleToggleChange(i)}),e.qZA()(),e.YNc(11,Z,9,0,"ion-item",2),e.TgZ(12,"ion-button",3),e.NdJ("click",function(){return n.exportData()}),e._uU(13,"Export My Data To File"),e.qZA(),e.TgZ(14,"ion-button",3),e.NdJ("click",function(){return n.importData()}),e._uU(15,"Import And Merge Data From File"),e.qZA(),e.TgZ(16,"ion-button",3),e.NdJ("click",function(){return n.overwriteData()}),e._uU(17,"Overwrite My Data With File"),e.qZA()()),2&t&&(e.xp6(6),e.hij("App Deployment: ",n.appDeployment,""),e.xp6(4),e.Q6J("ngModel",n.enhancedUnitCostRule),e.xp6(1),e.Q6J("ngIf",n.showEnhancedUnitCostDescription))},dependencies:[a.Pc,a.YG,a.W2,a.Gu,a.Ie,a.Q$,a.wd,a.ho,a.sr,a.w,C.ez,C.O5,f.u5,f.JJ,f.On],styles:["ion-button[_ngcontent-%COMP%]{display:flex;justify-content:center;max-width:calc(100% - 45px);margin:20px auto}"]}),l})()}}]);