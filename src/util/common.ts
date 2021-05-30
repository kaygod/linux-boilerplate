const path = require("path");
const exec = require("child_process").exec;
const fs = require('fs-extra');


export const call = (name:string)=>{

    const script_path = path.join(__dirname, "scripts", `${name}.sh`);// 脚本的真实路径 

    console.log(script_path);
    
    return new Promise(async (resolve,reject)=>{

        await fs.ensureDir('/tmp/myScripts'); //判断/tmp下面有没有myScripts文件夹,没有就创建一个

        const dist_path = `/tmp/myScripts/${name}.sh`;

        const isExit = await fs.pathExists(dist_path); // 脚本已经存在了吗
           
        !isExit && await fs.copy(script_path, dist_path); // 如果不存在,就复制一份过去    
       
        //执行脚本
        exec(`/bin/bash ${dist_path}`, (error:any, stdout:any) => {
            if(error){
              console.log(error);
              reject(error);
            }else{
                const array:[string,string][] = [];
                stdout.split("\r\n\n").forEach((item:string)=>{
                    const [key,value] =  item.split(":");
                    array.push([key,value])

                })
                resolve(array);
            }
         });
    })
}
