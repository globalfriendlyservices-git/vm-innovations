async function saveLead() {

const name =
document.getElementById('name').value;

const phone =
document.getElementById('phone').value;

const email =
document.getElementById('email').value;

const city =
document.getElementById('city').value;

const requirement =
document.getElementById('requirement').value;

const { error } =
await client
.from('leads')
.insert([
{
name,
phone,
email,
city,
requirement
}
]);

if(error){
alert(error.message);
}
else{
alert('Lead Submitted');
}
}
