const token = process.env.YOUR_TOKEN;
const res = await fetch('https://api.querykey.com/v2/cases/search?q=TypeError&limit=5', {
  headers: { Authorization: 'Bearer ' + token }
});
console.log(await res.json());
