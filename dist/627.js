"use strict";(self.webpackChunkbar_chart_widget=self.webpackChunkbar_chart_widget||[]).push([[627],{627:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});var n=t(416),o=t.n(n),l=t(971),a=t(234);t(722);const r=function(e){return o().createElement(l.ChartComponent,{primaryXAxis:{valueType:"Category",majorGridLines:{width:0},visible:!1},primaryYAxis:{majorGridLines:{width:0},visible:!1},title:"Position filled by",legendSettings:{mode:"Point",visible:!0,width:"100px",height:"200px",alignment:"Near",position:"Bottom",containerPadding:{top:20},textStyle:{size:"12px",color:"#3F4551"},reverse:!0},tooltip:{enable:!0},chartArea:{border:{width:0}},width:"100%",height:"100%",legendClick:function(e){},selectionMode:"Point",selectionComplete:function(i){var t,n,o={channel:"bar_chart_selection",payload:{selected:null==i||null===(t=i.selectedDataValues[0])||void 0===t?void 0:t.x}};null==e||null===(n=e.config)||void 0===n||n.communicationService.publish(o)}},o().createElement(l.Inject,{services:[l.BarSeries,l.Category,l.Legend,l.DataLabel,l.Tooltip,l.Selection]}),o().createElement(l.SeriesCollectionDirective,null,o().createElement(l.SeriesDirective,{type:"Bar",dataSource:a.a,yName:"amount",xName:"position",name:"Position filled by",pointColorMapping:"point",legendShape:"Circle",columnSpacing:.02,marker:{dataLabel:{visible:!0,position:"Top",font:{fontWeight:"600",color:"#ffffff"}}},columnWidth:1})))}}}]);