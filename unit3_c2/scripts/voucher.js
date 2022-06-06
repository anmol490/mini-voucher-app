const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
async function getdata()
{
    try{
        let res = await fetch(url);
        console.log(res);
        let card  = await res.json();
        append(card[0].vouchers);
        console.log(card[0].vouchers);


    }
    catch(err)
    {
        console.log(err);
    }
}
getdata();

function append(voucher)
{
    let voucher_list = document.getElementById("voucher_list");
    voucher.forEach(function(el)
    {
        let img = document.createElement("img");
        img.src = el.image;
        let h2 = document.createElement("h2");
        h2.innerText = el.name;
        let h3 = document.createElement("h3");
        h3.innerText = el.price;
        let button = document.createElement("button"); 
        button.innerText = el.buy_voucher;      

        let div = document.createElement("div");
        div.append(img,h2,h3,button);
        voucher_list.append(div);
    })
}