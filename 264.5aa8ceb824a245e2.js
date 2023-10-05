"use strict";(self.webpackChunkinvest=self.webpackChunkinvest||[]).push([[264],{9264:(ht,J,s)=>{s.r(J),s.d(J,{StocksModule:()=>pt});var T=s(6895),A=s(9021),S=s(9086),L=s(7582),l=s(3953),f=s(5264),C=s(6316);function d(n){return Math.round(100*n)/100}var G=s(1135),t=s(8274),b=s(1375),i=s(4006),$=s(8532),p=(()=>{return(n=p||(p={})).UntilNow="untilNow",n.SelectDate="selectDate",n.MonthQuantity="monthQuantity",n.YearsQuantity="yearsQuantity",p;var n})();function k(n){const o=n.indexOf("["),e=n.indexOf("]");return-1!==o&&-1!==e?n.slice(o+1,e):""}var h,F=s(2768),w=s(3606),D=s(4463),K=s(7472),E=s(1027),B=s(1008),R=s(5593),V=s(1458),j=s(7188),X=s(4294),z=s(8177),W=s(1989);function H(n,o){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"div",4)(2,"p-calendar",21),t.ALo(3,"translate"),t.qZA()),2&n&&(t.xp6(2),t.Q6J("placeholder",t.lcZ(3,3,"form.label.endDate"))("readonlyInput",!0)("showIcon",!0))}function tt(n,o){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"div",4)(2,"p-inputNumber",22),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA()),2&n&&(t.xp6(2),t.Q6J("placeholder","N "+t.lcZ(3,4,"form.label.m"))("min",1)("max",600)("suffix"," "+t.lcZ(4,6,"form.label.m")))}function et(n,o){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"div",4)(2,"p-inputNumber",23),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA()),2&n&&(t.xp6(2),t.Q6J("placeholder","N "+t.lcZ(3,4,"form.label.y"))("min",1)("max",50)("suffix"," "+t.lcZ(4,6,"form.label.y")))}function ot(n,o){1&n&&(t.TgZ(0,"div",3)(1,"div",4)(2,"label",24),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"i",6),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"div",16),t._UZ(8,"p-inputNumber",25),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,8,"form.label.inflationValue")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(6,10,"tooltip.inflationValue"))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(3),t.Q6J("placeholder","0%")("min",0)("max",20)("suffix","%"))}let M=((h=class{constructor(o,e,r){this.translateService=o,this.router=e,this.loaderService=r,this.formSubmit=new t.vpe,this.stocksCustom=w.xB.map(a=>({name:a,code:k(a)})),this.stocksTop500=w.aj.map(a=>({name:a,code:k(a)})),this.stocksAll=w.vF.map(a=>({name:a,code:k(a)})),this.filteredStocks=[],this.endDateOptions=this.getEndDateOptions(),this.investmentAmount=100,this.routeTitleKey=$.d.Empty,this.DateEnum=p,this.isYahooLoading$=this.loaderService.isYahooLoading$,this.stocks=this.stocksCustom,this.stockSymbolsListOptions=this.getSymbolListOptions(),this.isStockListAsDropdown=!0,this.routeTitleKey=(0,F.T)(this.router.routerState.root),this.router.events.pipe((0,f.t)(this)).subscribe(a=>{a instanceof S.m2&&(this.routeTitleKey=(0,F.T)(this.router.routerState.root))}),this.form=new i.cw({startDate:new i.NI(new Date("01-01-2013"),i.kI.required),endDateType:new i.NI(this.endDateOptions[0],i.kI.required),endDate:new i.NI(new Date("01-01-2023"),i.kI.required),monthQuantity:new i.NI(12,i.kI.required),yearsQuantity:new i.NI(1,i.kI.required),stockSymbol:new i.NI(this.stocks[0],[i.kI.required]),investmentAmount:new i.NI(this.investmentAmount,i.kI.required),inflationMatter:new i.NI(!1),inflationValue:new i.NI(0)}),this.translateService.onLangChange.pipe((0,f.t)(this)).subscribe(()=>{this.endDateOptions=this.getEndDateOptions(),this.stockSymbolsListOptions=this.getSymbolListOptions()})}filterStock(o){const e=[],r=o.query.toLowerCase();for(let a=0;a<this.stocks.length;a++){const u=this.stocks[a];u.name.toLowerCase().includes(r)&&e.push(u)}this.filteredStocks=e}submitForm(){const o=this.patchEndDate();this.formSubmit.emit(o)}selectSymbolOptions(o){switch(o.code){case l.K.Custom:this.isStockListAsDropdown=!0,this.stocks=[...this.stocksCustom];break;case l.K.Top500:this.isStockListAsDropdown=!0,this.stocks=[...this.stocksTop500];break;case l.K.All:this.isStockListAsDropdown=!1,this.stocks=[...this.stocksAll]}this.form.controls.stockSymbol.patchValue(null),this.form.controls.stockSymbol.markAsDirty()}getEndDateOptions(){return[{name:this.translateService.instant("form.label.untilNow"),code:p.UntilNow},{name:this.translateService.instant("form.label.selectDate"),code:p.SelectDate},{name:this.translateService.instant("form.label.monthQuantity"),code:p.MonthQuantity},{name:this.translateService.instant("form.label.yearsQuantity"),code:p.YearsQuantity}]}getSymbolListOptions(){return[{name:this.translateService.instant("form.label.stocks.symbolListOptions.custom"),code:l.K.Custom},{name:this.translateService.instant("form.label.stocks.symbolListOptions.top500"),code:l.K.Top500},{name:this.translateService.instant("form.label.stocks.symbolListOptions.all"),code:l.K.All}]}patchEndDate(){if(this.form.value.endDateType.code!==p.SelectDate){const e=this.getEndDate();this.form.patchValue({endDate:e})}return this.form.value}getEndDate(){const o=this.form.value.startDate.getTime();switch(this.form.value.endDateType.code){case p.MonthQuantity:return new Date((0,C.NB)(o,this.form.value.monthQuantity));case p.YearsQuantity:return new Date((0,C.NB)(o,12*this.form.value.yearsQuantity));default:return new Date}}}).\u0275fac=function(o){return new(o||h)(t.Y36(D.sK),t.Y36(S.F0),t.Y36(b.D1))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-general-form"]],inputs:{collapsed:"collapsed"},outputs:{formSubmit:"formSubmit"},decls:65,vars:89,consts:[[1,"card","p-fluid","general-form"],["collapseIcon","pi pi-plus","expandIcon","pi pi-minus",3,"header","toggleable","collapsed"],[3,"formGroup","ngSubmit"],[1,"general-form__field"],[1,"general-form__label"],["for","startDate"],[1,"pi","pi-question","info-icon",3,"popperLoose","popperLooseTrigger","popperLoosePlacement"],["formControlName","startDate","id","startDate","view","month","dateFormat","mm/yy",1,"general-form__input",3,"placeholder","readonlyInput","showIcon"],["for","endDateType"],["formControlName","endDateType","id","endDateType","optionLabel","name",1,"general-form__input",3,"options"],["class","general-form__field",4,"ngIf"],["for","stockSymbolsList"],["id","stockSymbolsList","optionLabel","name",1,"general-form__input",3,"options","onChange"],["for","stockSymbol"],["formControlName","stockSymbol","id","stockSymbol","field","name",1,"general-form__input",3,"suggestions","dropdown","forceSelection","placeholder","completeMethod"],["for","investmentAmount"],[1,"general-form__input"],["formControlName","investmentAmount","id","investmentAmount","inputId","stacked","mode","currency","currency","USD",1,"w-full","input-with-slider",3,"ngModel","placeholder","min","max","ngModelChange"],["formControlName","investmentAmount",1,"w-full","input-with-slider",3,"ngModel","min","max","step","ngModelChange"],["formControlName","inflationMatter",3,"binary"],["type","submit","icon","pi pi-check",1,"p-button-sm","general-form__submit",3,"label","disabled","loading"],["formControlName","endDate","view","month","dateFormat","mm/yy",1,"general-form__input",3,"placeholder","readonlyInput","showIcon"],["formControlName","monthQuantity",1,"general-form__input",3,"placeholder","min","max","suffix"],["formControlName","yearsQuantity",1,"general-form__input",3,"placeholder","min","max","suffix"],["for","inflationValue"],["formControlName","inflationValue","id","inflationValue",1,"general-form__input",3,"placeholder","min","max","suffix"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"p-panel",1),t.ALo(2,"translate"),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return e.submitForm()}),t.TgZ(4,"div",3)(5,"div",4)(6,"label",5),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"i",6),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"p-calendar",7),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",3)(14,"div",4)(15,"label",8),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"i",6),t.ALo(19,"translate"),t.qZA(),t._UZ(20,"p-dropdown",9),t.qZA(),t.YNc(21,H,4,5,"div",10),t.YNc(22,tt,5,8,"div",10),t.YNc(23,et,5,8,"div",10),t.TgZ(24,"div",3)(25,"div",4)(26,"label",11),t._uU(27),t.ALo(28,"translate"),t.qZA(),t._UZ(29,"i",6),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"p-dropdown",12),t.NdJ("onChange",function(a){return e.selectSymbolOptions(a.value)}),t.qZA()(),t.TgZ(32,"div",3)(33,"div",4)(34,"label",13),t._uU(35),t.ALo(36,"translate"),t.qZA(),t._UZ(37,"i",6),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"p-autoComplete",14),t.NdJ("completeMethod",function(a){return e.filterStock(a)}),t.ALo(40,"translate"),t.qZA()(),t.TgZ(41,"div",3)(42,"div",4)(43,"label",15),t._uU(44),t.ALo(45,"translate"),t.qZA(),t._UZ(46,"i",6),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"div",16)(49,"p-inputNumber",17),t.NdJ("ngModelChange",function(a){return e.investmentAmount=a}),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"p-slider",18),t.NdJ("ngModelChange",function(a){return e.investmentAmount=a}),t.qZA()()(),t.TgZ(52,"div",3)(53,"div",4)(54,"label"),t._uU(55),t.ALo(56,"translate"),t.qZA(),t._UZ(57,"i",6),t.ALo(58,"translate"),t.qZA(),t.TgZ(59,"div",16),t._UZ(60,"p-checkbox",19),t.qZA()(),t.YNc(61,ot,9,12,"div",10),t._UZ(62,"p-button",20),t.ALo(63,"translate"),t.ALo(64,"async"),t.qZA()()()),2&o&&(t.xp6(1),t.s9C("header",t.lcZ(2,53,"form.title."+e.routeTitleKey)),t.Q6J("toggleable",!0)("collapsed",e.collapsed),t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(4),t.Oqu(t.lcZ(8,55,"form.label.startDate")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(10,57,"tooltip.startDate."+e.routeTitleKey))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(2),t.Q6J("placeholder",t.lcZ(12,59,"form.label.startDate"))("readonlyInput",!0)("showIcon",!0),t.xp6(5),t.Oqu(t.lcZ(17,61,"form.label.endDate")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(19,63,"tooltip.endDate."+e.routeTitleKey))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(2),t.Q6J("options",e.endDateOptions),t.xp6(1),t.Q6J("ngIf",(null==e.form.controls.endDateType.value?null:e.form.controls.endDateType.value.code)===e.DateEnum.SelectDate),t.xp6(1),t.Q6J("ngIf",(null==e.form.controls.endDateType.value?null:e.form.controls.endDateType.value.code)===e.DateEnum.MonthQuantity),t.xp6(1),t.Q6J("ngIf",(null==e.form.controls.endDateType.value?null:e.form.controls.endDateType.value.code)===e.DateEnum.YearsQuantity),t.xp6(4),t.Oqu(t.lcZ(28,65,"form.label.stocks.stocksList")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(30,67,"tooltip.stocksList"))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(2),t.Q6J("options",e.stockSymbolsListOptions),t.xp6(4),t.Oqu(t.lcZ(36,69,"form.label.stocks.stockSymbol")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(38,71,"tooltip.stockSymbol"))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(2),t.Q6J("suggestions",e.filteredStocks)("dropdown",e.isStockListAsDropdown)("forceSelection",!0)("placeholder",t.lcZ(40,73,"form.label.stocks.stockSymbol")),t.xp6(5),t.Oqu(t.lcZ(45,75,"form.label.amount")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(47,77,"tooltip.amount"))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(3),t.Q6J("ngModel",e.investmentAmount)("placeholder",t.lcZ(50,79,"form.label.amount"))("min",10)("max",1e4),t.xp6(2),t.Q6J("ngModel",e.investmentAmount)("min",10)("max",500)("step",10),t.xp6(4),t.Oqu(t.lcZ(56,81,"form.label.inflationMatter")),t.xp6(2),t.Q6J("popperLoose",t.lcZ(58,83,"tooltip.inflationMatter"))("popperLooseTrigger","click")("popperLoosePlacement","top"),t.xp6(3),t.Q6J("binary",!0),t.xp6(1),t.Q6J("ngIf",e.form.value.inflationMatter),t.xp6(1),t.Q6J("label",t.lcZ(63,85,"button.submit"))("disabled",!e.form.valid)("loading",t.lcZ(64,87,e.isYahooLoading$)))},dependencies:[T.O5,K.s,i._Y,i.JJ,i.JL,i.sg,i.u,E.VS,B.f,R.zx,V.Lt,j.Rn,X.Qc,z.iR,W.XZ,T.Ov,D.X$],styles:[".general-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:2rem}.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]{margin-bottom:1rem;padding-bottom:.5rem;display:flex;align-items:center;justify-content:space-between}@media only screen and (max-width: 576px){.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]{flex-wrap:wrap}}.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]   .general-form__label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;margin-right:1rem}@media only screen and (max-width: 576px){.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]   .general-form__label[_ngcontent-%COMP%]{width:100%;margin-right:0;margin-bottom:1rem}}.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]   .general-form__input[_ngcontent-%COMP%]{width:12rem;line-height:1.4}@media only screen and (max-width: 576px){.general-form[_ngcontent-%COMP%]   .general-form__field[_ngcontent-%COMP%]   .general-form__input[_ngcontent-%COMP%]{width:100%}}.general-form[_ngcontent-%COMP%]   .general-form__submit[_ngcontent-%COMP%]{margin-top:2rem;width:12rem;display:block}"],changeDetection:0}),h);M=(0,L.gn)([(0,f.c)()],M);var v,nt=s(720),at=s(8794);let _=((v=class{constructor(o){this.translateService=o,this.colors=["blue","yellow","cyan","orange","purple","teal","indigo","primary"],this.documentStyle=getComputedStyle(document.documentElement),this.textColor=this.documentStyle.getPropertyValue("--text-color"),this.textColorSecondary=this.documentStyle.getPropertyValue("--text-color-secondary")}ngOnInit(){this.accentField||(this.accentField=this.fieldsToShow[0]),this.prepareChartData(),this.translateService.onLangChange.pipe((0,f.t)(this)).subscribe(()=>{this.prepareChartData()})}prepareChartData(){const o=[],e=this.rows.reduce((c,m)=>(o.push(m.date),c[l.f.Price].push(m.price),c[l.f.InvestedTotal].push(m.investedTotal),c[l.f.PortfolioTotal].push(m.portfolioTotal),c[l.f.PercentTotal].push(m.percentTotal),c[l.f.PercentTotalAbsolute].push(m.percentTotalAbsolute),c[l.f.TotalMinusInflation].push(m[l.f.TotalMinusInflation]),c),{[l.f.Price]:[],[l.f.InvestedTotal]:[],[l.f.PortfolioTotal]:[],[l.f.PercentTotal]:[],[l.f.PercentTotalAbsolute]:[],[l.f.TotalMinusInflation]:[]}),r=this.translateService.instant("labels.investedTotal"),a=this.translateService.instant("labels.percentTotal"),u=this.fieldsToShow.map((c,m)=>{let g={label:this.translateService.instant(`labels.${c}`),data:e[c],borderWidth:1,fill:!1,tension:.4,borderColor:this.documentStyle.getPropertyValue(`--${this.colors[m]}-500`)};return c===this.accentField&&(g={...g,backgroundColor:"rgba(67,255,38,0.2)",fill:!0,borderWidth:0}),g});this.data={labels:o,datasets:u},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:this.textColor}},tooltip:{callbacks:{label:function(c){return c.dataset.label===r?`${c.dataset.label}: ${c.formattedValue} (${a}: ${d(e.percentTotal[c.dataIndex])})`:`${c.dataset.label}: ${c.formattedValue}`}}}},scales:{x:{ticks:{color:this.textColorSecondary},grid:{display:!1}},y:{ticks:{color:this.textColorSecondary},grid:{display:!1}}}}}}).\u0275fac=function(o){return new(o||v)(t.Y36(D.sK))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-general-chart"]],inputs:{rows:"rows",fieldsToShow:"fieldsToShow",accentField:"accentField",colors:"colors"},decls:2,vars:2,consts:[[1,"card"],["type","line",3,"data","options"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"p-chart",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("data",e.data)("options",e.options))},dependencies:[at.C],changeDetection:0}),v);var y;function st(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",4),t._UZ(2,"app-general-chart",5),t.qZA(),t.TgZ(3,"div",4),t._UZ(4,"app-general-table",6),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("rows",e.rows)("fieldsToShow",e.fieldToShow),t.xp6(2),t.Q6J("rows",e.rows)("language",e.languageService.selectedLanguage)}}function lt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"app-general-form",2),t.NdJ("formSubmit",function(a){t.CHM(e);const u=t.oxw();return t.KtG(u.getStocksData(a))}),t.qZA(),t.YNc(2,st,5,4,"ng-container",3),t.qZA()}if(2&n){const e=o.ngIf,r=t.oxw();t.xp6(1),t.Q6J("collapsed",e.isFormCollapsed),t.xp6(1),t.Q6J("ngIf",r.rows.length&&!1===e.isYahooLoading)}}_=(0,L.gn)([(0,f.c)()],_);const rt=function(n,o){return{isYahooLoading:n,isFormCollapsed:o}};let x=((y=class{constructor(o,e,r){this.apiService=o,this.languageService=e,this.loaderService=r,this.rows=[],this.isFormCollapsed$=new G.X(!1)}getStocksData(o){this.isFormCollapsed$.next(!1),this.apiService.getStockData(o.stockSymbol.code,o.startDate,o.endDate).pipe((0,f.t)(this)).subscribe(e=>{this.rows=this.prepareRows(e,o);const r=Object.keys(this.rows[0]);this.fieldToShow=[l.f.TotalMinusInflation,l.f.PercentTotalAbsolute,l.f.InvestedTotal,l.f.PortfolioTotal].filter(a=>r.includes(a)),this.isFormCollapsed$.next(!0)})}prepareRows(o,e){const r=e.investmentAmount,a=o.chart.result[0].indicators.quote[0],u=o.chart.result[0].timestamp,c=(0,C.Xn)(e.startDate,e.endDate),m=(0,C.wZ)(u,c),g=e.inflationMatter&&e.inflationValue?e.inflationValue/12:0,mt={date:null,price:0,stocksTotal:0,investedTotal:0,percentTotalAbsolute:0,percentTotal:0,portfolioTotal:0,...g&&{totalInflation:0,totalMinusInflation:0}};return m.reduce((O,U,I)=>{const dt=new Date(1e3*u[U]),Q=a.close[U],Y=O[I].stocksTotal+r/Q,P=Y*Q,N=r*(I+1),q=P-N,ft=q/N*100,Z={date:dt.toLocaleDateString("en-US"),price:d(Q),investedTotal:d(N),stocksTotal:d(Y),portfolioTotal:d(P),percentTotalAbsolute:d(q),percentTotal:d(ft)};return g&&(Z[l.f.TotalInflation]=d(g*I),Z[l.f.TotalMinusInflation]=this.getTotalMinusInflation(P,Z[l.f.TotalInflation])),O.push(Z),O},[mt]).slice(1)}getTotalMinusInflation(o,e){return d(o-o*e/100)}}).\u0275fac=function(o){return new(o||y)(t.Y36(b.sM),t.Y36(b.TS),t.Y36(b.D1))},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-stocks"]],decls:3,vars:8,consts:[["class","stocks",4,"ngIf"],[1,"stocks"],[1,"stocks-form",3,"collapsed","formSubmit"],[4,"ngIf"],[1,"stocks-card"],[3,"rows","fieldsToShow"],[3,"rows","language"]],template:function(o,e){1&o&&(t.YNc(0,lt,3,2,"div",0),t.ALo(1,"async"),t.ALo(2,"async")),2&o&&t.Q6J("ngIf",t.WLB(5,rt,t.lcZ(1,1,e.loaderService.isYahooLoading$),t.lcZ(2,3,e.isFormCollapsed$)))},dependencies:[T.O5,M,nt.b,_,T.Ov],styles:[".stocks[_ngcontent-%COMP%]   .stocks-form[_ngcontent-%COMP%]{display:block;width:35rem}@media only screen and (max-width: 576px){.stocks[_ngcontent-%COMP%]   .stocks-form[_ngcontent-%COMP%]{width:100%}}.stocks[_ngcontent-%COMP%]   .stocks-card[_ngcontent-%COMP%]{margin-top:2rem;width:calc(100vw - 4rem)}"],changeDetection:0}),y);x=(0,L.gn)([(0,f.c)()],x);const it=[{path:"",component:x}];let ct=(()=>{var n;class o{}return(n=o).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[S.Bz.forChild(it),S.Bz]}),o})(),pt=(()=>{var n;class o{}return(n=o).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[b.sM],imports:[T.ez,ct,A.Iu,A.C1,A.yu]}),o})()}}]);