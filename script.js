const T=document.querySelectorAll('.t');
const B=document.querySelector('.bar');
const bb=document.querySelector('.btn btn-outline-primary')
const N=['0','Aaroh','Amal','Manjul','Saumya']
const message =[`If you're sending your cover letter via email, list your name and the job title in the subject line of the email message. Include your contact information in your email signature, but don't list the employer's contact information. Skip the date, and start your email message with the salutation.`,
`As a reminder, always rework your cover letter to fit each specific position that you apply for. In addition to tweaking the content, don’t forget to update the salutation, the job title, and the company name.`,
`Be sure to thoroughly proofread each cover letter before sending it, looking for grammar and spelling errors. Consider asking a friend or family member, or even a career counselor, to read over your cover letter. It can be helpful to print a copy of your cover letter and edit it with a pen in hand. Reading it out loud is another good way to catch mistakes.`,
`While it might seem tedious, you should always customize each letter to fit the specific job for which you are applying. After all, an effective cover letter must illustrate how your experience matches up to the requirements outlined in the job listing. Failing to do so can quickly get your application eliminated from the pool.`,
]
T.forEach(t=>{
    //console.log(t);
    t.addEventListener('mouseover',(e)=>{
        t.classList.add('tt');
        //console.log(e.target);
        B.style.backgroundColor = 'rgb(222, 242, 247)';
        t.style.fontsize='x-large';
    });
    t.addEventListener('mouseout',(e)=>{
        t.classList.remove('tt');
        B.style.backgroundColor = 'rgb(186, 235, 245)';
        //console.log(e.target);
    });
    t.addEventListener('click',(e)=>{
        let i=(e.target.classList)[1];
        const col = t.style.backgroundColor;
        const h=`<div class="cardholder">
<div class="usrnm" style=" line-height: 60px; text-align:center; border-radius: 50%;color: aliceblue; background-color: blue; height:60px ; width: 60px; margin-top: 5% ;" >
<img src="${i}.png" alt="Aa" style=" height: 60px; width: 60px; border-radius: 50%;">
</div>
<div class="card text-white " style="width: 80%; margin-top: -80px; margin-left: 8%; background-color:${col}">
  <div class="card-body " style="text-align: c;">
    <h5 class="card-title">${N[i]}'s Message!</h5>
    <!-- <h6 class="card-subtitle mb-2 text-muted"></h6> -->
    <p class="card-text">${message[i-1]}</p>
  </div>
</div>`
B.insertAdjacentHTML('afterend',h);    
    })
});