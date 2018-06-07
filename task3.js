const args = process.argv;
const str = args.slice(2).join(" ");

const vowels = [];
const consonants = [];
const digits = [];

str.split("").forEach(char => {
    if (/[aeiouy]/i.test(char)) vowels.push(char);
    if (/[bcdfghjklmnpqrstvwxz]/i.test(char)) consonants.push(char);
    if (/[\d]/.test(char)) digits.push(char);
});

if(str.length > 0) process.stdout.write(vowels.join("") + " " + consonants.join("") + " " + digits.join(""));
