app.filter("tcNaTag",function(){function n(n,e){if(n){n+=n.indexOf("&")>0?"&tcnatag="+e:n.indexOf("?")>0?"&tcnatag="+e:"?tcnatag="+e;var t=-1!=n.indexOf("shouji.17u.cn/internal");return t?n:(n+="&tcwvcnew",encodeURI(n))}}return n}),app.filter("tcNaTagByProjectId",function(){function n(n,e,t){if(n){"3"===t&&(n+=n.indexOf("&")>0?"&tcnatag="+e:n.indexOf("?")>0?"&tcnatag="+e:"?tcnatag="+e);var c=-1!=n.indexOf("shouji.17u.cn/internal");return c?n:(n+="&tcwvcnew",encodeURI(n))}}return n}),app.filter("openInWebview",function(){function n(n){if(n){var e=-1!=n.indexOf("shouji.17u.cn/internal");return e?n:n+=n.indexOf("&")>0?"&tcwvcnew":n.indexOf("?")>0?"&tcwvcnew":"?tcwvcnew"}}return n}).filter("tag",function(){function n(n,e){return n?-1!=n.toLowerCase().indexOf("internal")?e?encodeURI(n.toLowerCase().replace("internal","internal_"+e)):n:(n+=n.indexOf("&")>0?"&tcwvcnew":n.indexOf("?")>0?"&tcwvcnew":"?tcwvcnew",encodeURI(n)):void 0}return n}).filter("intParser",function(){function n(n){return parseInt(n)}return n});