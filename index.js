const toggleBtn = document.querySelector(".toggle");
const prices = document.querySelectorAll(".price");


const annualyPrice = ["&dollar;199.99","&dollar;249.99","&dollar;399.99"];
const monthlyPrice = ["&dollar;19.99","&dollar;24.99","39.99"];
toggleBtn.addEventListener('click',(e) => {
    
    if(e.currentTarget.checked == true){
        let i=0;
        prices.forEach(price => {
            price.innerHTML = monthlyPrice[i++];
        });
    }
    if(e.currentTarget.checked == false){
        let i=0;
        prices.forEach(price => {
            price.innerHTML = annualyPrice[i++];
        });
    }
});