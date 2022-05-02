function search(query){
    //var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+query+"&maxResults=20&key=";
    var url2="https://www.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&q="+query+"&key="
    var response=fetch(url2);
    //console.log(url2);
    response.then((res)=>res.json())
    .then((res)=>{
      print(res);
    })
}


const input=document.querySelector("#searchinput");
const button=document.querySelector("#searchbutton");

button.addEventListener("click",()=>{
    search(input.value);
})

function print(data){
    console.log(data);
    document.querySelector("#card").innerHTML="";
    const div=document.querySelector("#card");
    data.items.forEach((item)=>{
        const box=document.createElement("div");
        const img=document.createElement("img");
        img.src=item.snippet.thumbnails.medium.url;
        const title=document.createElement("h2");
        title.innerHTML=item.snippet.title;
        const description=document.createElement("p");
        description.innerHTML=item.snippet.description;
        img.addEventListener("click",()=>{
            getvideofromid(item.id.videoId);
            console.log(item.id);
        });
        box.append(img,title,description);
        div.append(box);
    })
}


function getvideofromid(videoid){
    document.querySelector("body").innerHTML="";
    var url3="http://www.youtube.com/embed/"+videoid;
     var iframe=document.createElement("iframe");
     iframe.src=url3;
     iframe.href=url3;
     iframe.target="_blank";
     iframe.style="height:500px;width:1000px;frameborder:0;allowfullscreen;margin-left:200px";
     document.querySelector("body").append(iframe);   
}


