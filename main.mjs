import mime from"mime/lite.js";import core from"@anliting/core";import url from"url";async function dirMap(e,r,t={}){let a,i=new url.URL(e.url,"http://a").pathname.substring(1);try{a=await core.createReadStream(`file/${i}`)}catch(e){if(e==core.createReadStream.badPath)return;throw e}let m={};if(t.mime){let e=mime.getType(i);e&&(m["content-type"]=e)}return r.writeHead(200,m),a.pipe(r),1}var main={dirMap:dirMap};export default main;export{dirMap};