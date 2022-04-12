
const dpdn= document.querySelectorAll('.dropdown-item');
const p=document.querySelector('.pfp');
const message=document.getElementById('floatingTextarea2');
const username =document.querySelector('.form-control');
const sbmt =document.getElementById('Hello');
let im,us,ms;

dpdn.forEach((t)=>
{
    t.addEventListener('mouseover',(e)=>{
        t.classList.add('brighten')})
    t.addEventListener('mouseout',()=>{
        t.classList.remove('brighten')
    })    
    t.addEventListener('click',()=>{
      im=t.childNodes[1].src;
      document.querySelector('.ii')?.remove(); 
      const html=`<img class='ii' src="${im}" alt="Aa" style=" height: 80px; width: 80px; border-radius: 50%;"></img>`;   
      p.insertAdjacentHTML('afterbegin',html);  
    })
})
sbmt.addEventListener('click',()=>{
    us=username.value;
    ms=message.value;
    if(!us)
    {
        alert('Username not Entered❌❌\nEnter Username and then Submit.')
        return;
    }
    if(!ms)
    {
        alert('No message Entered❌❌\nEnter a Message and then Submit.')
        return;
    }
    if(!im)
    {
        alert('No Profile Picture Selected❌❌\nSelect a Profile pic and then Submit.')
        return;
    }
    alert("SUCCESS👍😊🙌");
    username.value=null;
    message.value=null;
    
});