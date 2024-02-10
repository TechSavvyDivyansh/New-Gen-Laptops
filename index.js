let laptopData = [
    {
        img: "./imgs/HP.jpg",
        name: "Hp Pavillion",
        price: 80000,
        microprocessor: "i7",
        memory: "512GB SSD 16GB RAM"
    },
    {
        img: "./imgs/dell-latitude-3420-1.png",
        name: "Dell Inspiron 15",
        price: 54000,
        microprocessor: "i5",
        memory: "512GB SSD 8GB RAM"
    },
    {
        img: "./imgs/hp-aero-13.jpg",
        name: "Hp Aero",
        price: 70000,
        microprocessor: "i5",
        memory: "512GB SSD 8GB RAM"
    },
    {
        img: "./imgs/lenovo.png",
        name: "Lenovo Yogabook",
        price: 50000,
        microprocessor: "i5",
        memory: "256GB SSD 16GB RAM"
    },
    {
        img: "./imgs/macbook.jpg",
        name: "macbook air",
        price: 150000,
        microprocessor: "M2 chip",
        memory: "256GB[upgradable]"
    },
    {
        img: "./imgs/redmi.jpg",
        name: "Redmi pro max",
        price: 25000,
        microprocessor: "i3",
        memory: "512GB SSD 8GB RAM"
    },
    {
        img: "./imgs/xiomi.png",
        name: "Xiomi note 6",
        price: 30000,
        microprocessor: "i3",
        memory: "512GB SSD 16GB RAM"
    },
    {
        img: "./imgs/HP-Envy-16-07.png",
        name: "Hp Envy",
        price: 90000,
        microprocessor: "i7",
        memory: "512GB SSD 16GB RAM"
    },
    {
        img: "./imgs/asus.jpg",
        name: "Asus",
        price: 40000,
        microprocessor: "i5",
        memory: "512GB SSD 8GB RAM"
    },
    {
        img: "./imgs/infinix.png",
        name: "Infinix studentbook",
        price: 50000,
        microprocessor: "i5",
        memory: "256GB SSD 8GB RAM"
    },
]





let cardArea = document.querySelector('.cardArea')
let searchBar = document.querySelector('.searchBar')
let processorCat = document.querySelector('.processorCat')
let priceText=document.querySelector('.MaxPriceValue')
let priceScroll=document.querySelector('.priceScroll')







let displayLaptop = (filteredProducts) => {
    cardArea.innerHTML = filteredProducts.map(product => `
            
        <div class="card  shadow-2xl  rounded-3xl inline-block m-2 mt-14 sm:mx-8 bg-gray-100  w-[280px] h-80">
        <img src=${product.img} class=" rounded-tl-3xl rounded-tr-3xl w-[100%] h-40">
        <div class="cardContent p-4">
            <div class="title flex justify-between  w-56 my-4">
                <h3 class="font-medium  text-lg">${product.name}</h3>
                <p>₹${product.price}</p>
            </div>
            <p class="my-2  text-xl">${product.microprocessor}</p>
            <p>${product.memory}</p>
        </div>
        <button class="bg-black hover:bg-gray-800 text-gray-300 px-2 ml-24 cursor-pointer">Buy Now</button>
    </div>

        `).join("")
}



displayLaptop(laptopData)




// search
searchBar.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase();

    let filteredSearch = laptopData.filter(item => {
        return item.name.toLowerCase().indexOf(value) !== -1
    })

    if (value && filteredSearch.length != 0) {
        displayLaptop(filteredSearch)
    }
    else if (filteredSearch == 0) {
        cardArea.innerHTML = "<h2>Sorry Invalid Laptop name!!</h2>"
    }
    else {
        displayLaptop(laptopData)
    }
})



// setting categories of processor

let setProcessor = () => {
    let Allprocessor = laptopData.map(item => item.microprocessor)

    let processorList = ["All",...Allprocessor.filter((item, i) => {
        return Allprocessor.indexOf(item) == i
    })]

    
    processorCat.innerHTML=processorList.map(item=>{
        return `<span class="processor text-gray-500 cursor-pointer">${item}</span>`
    }).join("")

    processorCat.addEventListener("click",(e)=>{
           let selectedProcessor=e.target.textContent
           selectedProcessor=="All"?displayLaptop(laptopData):displayLaptop(laptopData.filter((item)=>{
            return item.microprocessor==selectedProcessor
           }))
    })
}

setProcessor()


// setpriceRange
let setprice=()=>{
    let allPrice=laptopData.map(item=>item.price)
    let maxPrice=Math.max(...allPrice)
    let minPrice=Math.min(...allPrice)

    priceScroll.value=maxPrice
    priceScroll.min=minPrice
    priceScroll.max=maxPrice

    priceScroll.addEventListener("input",(e)=>{
        priceText.textContent=e.target.value
        displayLaptop(laptopData.filter(item=>item.price<=e.target.value))
    })


}

setprice()


let crossIcon=document.getElementById('crossIcon')
let nav=document.querySelector('.nav')
// cardArea already selected


let companyName2=document.createElement('div')
companyName2.className="companyName2 flex flex-row absolute top-4  left-[20vw] sm:left-[8vw] lg:left-[6vw] xl:left-[5vw]"
companyName2.innerHTML=`<img src="./imgs/logo.png" class="w-14">
<h1 class=" font-medium text-xl text-gray-600">New Gen Laptops</h1>`
document.body.append(companyName2)


crossIcon.addEventListener("click",()=>{
    crossIcon.classList.toggle('bx-menu-alt-left')
    crossIcon.classList.toggle('z-50')
    nav.classList.toggle('w-0')
    nav.classList.toggle('hidden')
    cardArea.classList.toggle('w-[100vw]')
    cardArea.classList.toggle('left-1')
    cardArea.classList.toggle('-z-10')
    companyName2.classList.toggle('left-[40vw]')
    

})

