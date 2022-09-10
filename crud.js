let selectedRow=null;

const submit=document.getElementById("submit");

const form1=document.getElementsByClassName("form1")[0];
const reset=document.getElementById("reset");

submit.addEventListener("click",e=>{
    e.preventDefault();
    const formData=readFormData()
    if(selectedRow==null){
        insertRecord(formData);
    }
    else{
        update(formData)
    }

})


function readFormData(){
    const formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("productName").value;
    formData["quantity"]=document.getElementById("quantity").value;
    formData["price"]=document.getElementById("price").value;
    return formData;
}

function insertRecord(data){
    const table=document.getElementById("table2").getElementsByTagName("tbody")[0];
    const newRow=table.insertRow(table.length);
    const cell1=newRow.insertCell(0);
    cell1.innerHTML=data.productCode;
    const cell2=newRow.insertCell(1);
    cell2.innerHTML=data.productName;
    const cell3=newRow.insertCell(2);
    cell3.innerHTML=data.quantity;
    const cell4=newRow.insertCell(3);
    cell4.innerHTML=data.price;
    const cell5=newRow.insertCell(4);
    cell5.innerHTML=`  <button id="fafa" type="submit" onClick="onEdit(this)"><i class="fa fa-refresh" aria-hidden="true" style="color:white"></i></button>
    <button id=fared  onClick="onDelete(this)"><i class="fa fa-trash" aria-hidden="true" style="color: white;"></i></button>`
}


function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
document.getElementById("productName").value=selectedRow.cells[1].innerHTML;
document.getElementById("quantity").value=selectedRow.cells[2].innerHTML;
document.getElementById("price").value=selectedRow.cells[3].innerHTML;

}
 
function onDelete(td){
    if(alert("are you sure you want to delete this record?")){
        row=td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
    }
    
}

function update(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.productName;
    selectedRow.cells[2].innerHTML=formData.quantity;
    selectedRow.cells[3].innerHTML=formData.price;
}