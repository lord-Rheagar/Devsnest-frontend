
const btn = document.querySelector('button')
// async function  getData (username) {
//     const res= await fetch(`https://api.github.com/users/${username}`)
//     const data = await res.json()
//     return data
    
// }

btn.addEventListener('click', async()=>{
   fetch('https://api.quotable.io/random')

//    const quotes=document.getElementById('generate')

   .then(res=>res.json())
   .then(data=>document.getElementById('generate').innerText=data.content)

    
})

