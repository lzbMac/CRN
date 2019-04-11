__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),s=r(d[4]),c=r(d[5]),u=r(d[6]),h=r(d[7]),f=r(d[8]),p=r(d[9]),S=p.Alert,E=p.Animated,y=p.Button,I=p.StyleSheet,v=p.Text,T=p.View,C=r(d[10]),w=r(d[11]),x=r(d[12]),b=x.HeaderComponent,k=x.FooterComponent,_=x.ItemComponent,R=x.PlainInput,P=x.SeparatorComponent,L=x.Spindicator,V=x.genItemData,A=x.pressItem,H=x.renderSmallSwitchOption,O=x.renderStackedItem,z={minimumViewTime:3e3,viewAreaCoveragePercentThreshold:100,waitForInteraction:!0},N=function(t){var n=t.section;return f.createElement(T,{style:M.header},f.createElement(v,{style:M.headerText},"SECTION HEADER: ",n.key),f.createElement(P,null))},D=function(t){var n=t.section;return f.createElement(T,{style:M.header},f.createElement(v,{style:M.headerText},"SECTION FOOTER: ",n.key),f.createElement(P,null))},F=function(t){var n=t.highlighted,o=t.text;return f.createElement(T,{style:[M.customSeparator,n&&{backgroundColor:'rgb(217, 217, 217)'}]},f.createElement(v,{style:M.separatorText},o))},B=(function(p){function I(){var t,l;o(this,I);for(var h=arguments.length,p=new Array(h),S=0;S<h;S++)p[S]=arguments[S];return(l=s(this,(t=c(I)).call.apply(t,[this].concat(p)))).state={data:V(1e3),debug:!1,filterText:'',logViewable:!1,virtualized:!0,inverted:!1},l._scrollPos=new E.Value(0),l._scrollSinkY=E.event([{nativeEvent:{contentOffset:{y:l._scrollPos}}}],{useNativeDriver:!0}),l._captureRef=function(t){l._sectionListRef=t},l._renderItemComponent=function(t){var n=t.item,o=t.separators;return f.createElement(_,{item:n,onPress:l._pressItem,onHideUnderlay:o.unhighlight,onShowUnderlay:o.highlight})},l._onViewableItemsChanged=function(t){l.state.logViewable&&w('onViewableItemsChanged: ',t.changed.map(function(t){return n({},t,{item:'...',section:t.section.key})}))},l._pressItem=function(t){!isNaN(t)&&A(u(l),t)},l}return h(I,p),l(I,[{key:"_scrollToLocation",value:function(t,n){this._sectionListRef.getNode().scrollToLocation({sectionIndex:t,itemIndex:n})}},{key:"render",value:function(){for(var n=this,o=new RegExp(String(this.state.filterText),'i'),l=this.state.data.filter(function(t){return o.test(t.text)||o.test(t.title)}),s=[],c=0,u=l.length-1,h=10;h<=u+10;h+=10)s.push({key:l[c].key+" - "+l[Math.min(h-1,u)].key,data:l.slice(c,h)}),c=h;return f.createElement(C,{noSpacer:!0,noScroll:!0},f.createElement(T,{style:M.searchRow},f.createElement(R,{onChangeText:function(t){n.setState(function(){return{filterText:t}})},placeholder:"Search...",value:this.state.filterText}),f.createElement(T,{style:M.optionSection},H(this,'virtualized'),H(this,'logViewable'),H(this,'debug'),H(this,'inverted'),f.createElement(L,{value:this._scrollPos})),f.createElement(T,{style:M.scrollToRow},f.createElement(v,null,"scroll to:"),f.createElement(y,{title:"Item A",onPress:function(){return n._scrollToLocation(2,1)}}),f.createElement(y,{title:"Item B",onPress:function(){return n._scrollToLocation(3,6)}}),f.createElement(y,{title:"Item C",onPress:function(){return n._scrollToLocation(6,3)}}))),f.createElement(P,null),f.createElement(E.SectionList,{ref:this._captureRef,ListHeaderComponent:b,ListFooterComponent:k,SectionSeparatorComponent:function(n){return f.createElement(F,t({},n,{text:"SECTION SEPARATOR"}))},ItemSeparatorComponent:function(n){return f.createElement(F,t({},n,{text:"ITEM SEPARATOR"}))},debug:this.state.debug,inverted:this.state.inverted,enableVirtualization:this.state.virtualized,onRefresh:function(){return S.alert('onRefresh: nothing to refresh :P')},onScroll:this._scrollSinkY,onViewableItemsChanged:this._onViewableItemsChanged,refreshing:!1,renderItem:this._renderItemComponent,renderSectionHeader:N,renderSectionFooter:D,stickySectionHeadersEnabled:!0,sections:[{key:'empty section',data:[]},{renderItem:O,key:'s1',data:[{title:'Item In Header Section',text:'Section s1',key:'header item'}]},{key:'s2',data:[{noImage:!0,title:'1st item',text:'Section s2',key:'noimage0'},{noImage:!0,title:'2nd item',text:'Section s2',key:'noimage1'}]}].concat(s),style:M.list,viewabilityConfig:z}))}}]),I})(f.PureComponent),M=I.create({customSeparator:{backgroundColor:'rgb(200, 199, 204)'},header:{backgroundColor:'#e9eaed'},headerText:{padding:4,fontWeight:'600'},list:{backgroundColor:'white'},optionSection:{flexDirection:'row',flexWrap:'wrap',alignItems:'center'},searchRow:{paddingHorizontal:10},scrollToRow:{flexDirection:'row',alignItems:'center',paddingHorizontal:8},separatorText:{color:'gray',alignSelf:'center',fontSize:7}});e.title='<SectionList>',e.description='Performant, scrollable list of data.',e.examples=[{title:'Simple scrollable list',render:function(){return f.createElement(B,null)}}]},666728,[14,51,3,4,5,8,7,9,11,15,666681,149,666690]);