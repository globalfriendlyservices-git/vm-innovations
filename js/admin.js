loadLeads();

async function loadLeads(){

const { data } =
await client
.from('leads')
.select('*');

let html='';

data.forEach(row=>{

html += `
<tr>
<td>${row.name}</td>
<td>${row.phone}</td>
<td>${row.city}</td>
<td>${row.status}</td>
</tr>
`;

});

document
.getElementById('leadTable')
.innerHTML = html;
}
