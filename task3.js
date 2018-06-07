const args = process.argv;
const str = args.slice(2).join(" ");

const res = [];

if(str.match(/[aeiouy]/ig))res.push(str.match(/[aeiouy]/ig).join(""))
if(str.match(/[bcdfghjklmnpqrstvwxz]/ig))res.push(str.match(/[bcdfghjklmnpqrstvwxz]/ig).join(""))
if(str.match(/[\d]/ig))res.push(str.match(/[\d]/ig).join(""))

if(str.length > 0)process.stdout.write(res.join(" "));
