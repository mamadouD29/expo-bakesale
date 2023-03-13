const apiHost = "https://bakesaleforgood.com";

export default function FetchDeals (){
    return fetch(apiHost + "/api/deals")
    .then(res =>{
        if(!res.ok){
            throw Error("Fail to load");
        }
        return res.json();
    }).then(data => {
        // console.log(data);
        return data;
    })
    .catch(err => console.error(err));
}