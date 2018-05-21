let fs = require('fs');
let moment = require('moment');
let cptName = process.argv.splice(2)[0];
let getpath = cptName.split('/');
let name = getpath[getpath.length - 1];
// `${name}.html` 生成输入文件名的文件内容
let writes = [`index.ts`, `${name.toLowerCase()}.html`, `${name.toLowerCase()}.scss`];
let reads = [`Temp/index.ts`,`Temp/index.html`,`Temp/index.scss`];
let file = [];
let author = 'xll';
let basepath = `src/${getpath[0]}/`;
//检测是否存在文件夹
let xx =getpath.shift(getpath[0])
let path = getpath

let exists = function () {
  return new Promise((res, rej) => {
    (async function () {
      for (let a of path) {
        fs.existsSync(basepath + a) ? basepath = `${basepath}${a}/` : await mkdir(a);
      }
      res(basepath);
    })()
  })
}
//建立文件夹
let mkdir = function (a) {
  return new Promise((res, rej) => {
    fs.mkdir(basepath + a, (err) => {
      if (err) rej(err);
      basepath = `${basepath}${a}/`
      res(basepath);
    });
  })
}
//读取模板文件内容，并替换为目标组件
let readFile = function () {
  return new Promise((res) => {
    for (let a of reads) {
      let text = fs.readFileSync(a).toString();
      text = text.replace(/time/g, moment().format('YYYY/MM/DD,hh:mm:ss a'))
        .replace(/xllTemp/g, name.toLowerCase())
        .replace(/Xteam/g, name)
        .replace(/xll/g, author)
      file.push(text)
    }
    res(file);
  })
}
//生成文件，并填入之前读取的文件内容
let writeFile = function (file) {
  return new Promise((res, rej) => {
    (async function () {
      for (let a of writes) {
        await fs.writeFile(`${basepath}${a}`,
          a == writes[0] ? file[0]: a == writes[1] ? file[1] : file[2],
          // a == writes[3] ? file[0] : a == writes[0] ? file[1] : '', 
          (err) => {
            if (err) rej(err)
          })
      }
      res('succ');
    })()
  })
}
async function creatCpt() {
  try {
    await exists();
    await readFile()
    await writeFile(await readFile());
    return console.log(`Successfully created ${name} component`)
  }
  catch (err) {
    console.error(err);
  }
}
creatCpt();