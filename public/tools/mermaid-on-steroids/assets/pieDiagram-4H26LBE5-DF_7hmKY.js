import{g as j,s as H,a as J,b as Q,q as Y,p as ee,_ as s,l as w,c as te,F as ae,I as ie,K as re,e as se,z as oe,G as ne}from"./index-DDRu2lrD.js";import{p as le}from"./chunk-4BX2VUAB-CvMfX0UT.js";import{p as ce}from"./wardley-L42UT6IY-uyJA3UYw.js";import{a as G}from"./arc-m8HJVgoL.js";import{o as de}from"./ordinal-Cboi1Yqb.js";import{p as pe}from"./pie-CnKRWx47.js";import"./init-Gi6I4Gst.js";var ge=ne.pie,C={sections:new Map,showData:!1},f=C.sections,D=C.showData,he=structuredClone(ge),fe=s(()=>structuredClone(he),"getConfig"),ue=s(()=>{f=new Map,D=C.showData,oe()},"clear"),me=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);f.has(e)||(f.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ve=s(()=>f,"getSections"),xe=s(e=>{D=e},"setShowData"),Se=s(()=>D,"getShowData"),M={getConfig:fe,clear:ue,setDiagramTitle:ee,getDiagramTitle:Y,setAccTitle:Q,getAccTitle:J,setAccDescription:H,getAccDescription:j,addSection:me,getSections:ve,setShowData:xe,getShowData:Se},we=s((e,a)=>{le(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Ce={parse:s(async e=>{const a=await ce("pie",e);w.debug(a),we(a,M)},"parse")},De=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),$e=De,ye=s(e=>{const a=[...e.values()].reduce((r,n)=>r+n,0),$=[...e.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return pe().value(r=>r.value).sort(null)($)},"createPieArcs"),Te=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,n=te(),T=ae(r.getConfig(),n.pie),A=40,o=18,p=4,c=450,d=c,u=ie(a),l=u.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[b]=re(i.pieOuterStrokeWidth);b??=2;const _=T.textPosition,g=Math.min(d,c)/2-A,L=G().innerRadius(0).outerRadius(g),B=G().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+b/2).attr("class","pieOuterCircle");const h=r.getSections(),I=ye(h),O=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=I.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=de(O).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",L).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+B.centroid(t)+")").style("text-anchor","middle").attr("class","slice");const P=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([t,S])=>({label:t,value:S})),x=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{const W=o+p,V=W*k.length/2,X=12*o,Z=S*W-V;return"translate("+X+","+Z+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),x.append("text").attr("x",o+p).attr("y",o-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const N=Math.max(...x.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),U=d+A+o+p+N,R=P.node()?.getBoundingClientRect().width??0,q=d/2-R/2,K=d/2+R/2,z=Math.min(0,q),F=Math.max(U,K)-z;u.attr("viewBox",`${z} 0 ${F} ${c}`),se(u,c,F,T.useMaxWidth)},"draw"),Ae={draw:Te},Ge={parser:Ce,db:M,renderer:Ae,styles:$e};export{Ge as diagram};
