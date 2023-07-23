const form=document.querySelector('form')

form.addEventListener('submit', e=>{
    let go=false
    e.preventDefault()
    const from=e.currentTarget
    const data=new FormData(from).get('texte').toLowerCase().trim()
    if (data==='') {
         return document.querySelector('.nombre').innerHTML=`<h2>remplir la case car elle est vide</h2>
        `
    }
    
    from.reset()
    const tableau=data.split(' ')
    document.querySelector('.nombre').innerHTML=`le nombre de mots utilisés :${tableau.length} `
    let mots={} 
    for(let a of tableau){
        if (mots[a]) {
            mots[a]++
        }
        else{
           mots[a]=1
        }
    }
   const ju=[]
   for(let h in mots ){
       ju.push({
       mots:h, 
       nombre:mots[h]}) 
   }
   const ko=ju.sort(function(a, b) {
       return b.nombre- a.nombre;
   }) 
   
    for(let k of ko) {
        
        const div=document.createElement('div')
        
        div.innerHTML=` 🔸${k.mots} ➡️ utiliser: ${k.nombre} fois`
        document.querySelector('.plus').append(div)
        
       form.addEventListener('input', e => {
           if (e.isTrusted) {
       div.remove()
           }
       })
    }
})
