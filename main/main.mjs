import mime from'mime/lite.js'
import core from'@anliting/core'
async function dirMap(stream,path,p,option={}){
    let s
    try{
        s=await core.createReadStream(`${path}/${p}`)
    }catch(e){
        if(e==core.createReadStream.badPath)
            return
        throw e
    }
    let o={':status':200}
    if(option.mime){
        let t=mime.getType(p)
        if(t)
            o['content-type']=t
    }
    stream.respond(o)
    s.pipe(stream)
    return 1
}
export{dirMap}
export default{dirMap}
