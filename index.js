
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-btn");
const createButton = document.getElementById("create-btn");
const errorMessageEmail = document.getElementById("emailErrMsg");



const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// loginButton.addEventListener("click", () => {
//   const emailValue = emailInput.value;
//   const passwordValue = passwordInput.value;
//   const validateEmail = emailPattern.test(emailValue);
//     if(validateEmail === false) {
//       errorMessageEmail.innerHTML = "Enter a valid email";
//     };
   
// });
//disregard thid first line of code

const data = [
  {
    id: 1,
    image: "images/female-img/female.s49.jpg",
    section: "Clothing",
    category: "Women",
    title: "Wkior Shift Dress",
    price: 48.99,
    description: "For Women V Neck Short Sleeves Solid Color Casual Flowy Summer Dresses(S-2XL)",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "100% Polyester",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 2,
    image: "images/female-img/female2.s50.jpg",
    section: "Clothing",
    category: "Women",
    title: "QACOHU Dresses",
    price: 45.99,
    description: "V Neck Spring Summer Ruffle Long Sleeve Simple Casual Loose Flowy Autumn Winter Shift Dress",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "100% Polyester",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 3,
    image: "images/female-img/female3.s70.jpg",
    category: "Women",
    section: "Clothing",
    title: "JOCAFIYE Casual Dress",
    price: 70.99,
    description: "Short Sleeve V-Neck Dress Shift Dress Summer Dresses for Women 2025",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "100% Polyester",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 4,
    image: "images/female-img/female4.jpg",
    category: "Women",
    section: "Clothing",
    title: "QACOHU Summer Dress",
    price: 48.99,
    description: "V Neck Ruffle Short Sleeve Casual Shift Dress",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "100% Polyester",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 5,
    image: "images/female-img/female5.jpg",
    category: "Women",
    section: "Clothing",
    title: "Nmoder Casual Dress",
    price: 60.99,
    description: "Semi Formal Fit and Flare 3/4 Sleeve A-line Church Work Dress with Pockets",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

   {
    id: 6,
    image: "images/female-img/female6.jpg",
    section: "Clothing",
    category: "Women",
    title: "HOTOUCH Dress",
    price: 33.99,
    description: "2025 Short Sleeve A-Line Mini Dress Casual Crew Neck Shift Dress Beach",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 7,
    image: "images/female-img/female7.jpg",
    section: "Clothing",
    category: "Women",
    title: "Zeagoo Summer Dress",
    price: 30.99,
    description: "Midi Tiered Casual Dress Floral V Neck Ruffle Short Sleeve Flowy Beach Dress with Pockets",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "95% Polyester, 5% Spandex",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 8,
    image: "images/female-img/female8.jpg",
    section: "Clothing",
    category: "Women",
    title: "LOMON Length Sleeve",
    price: 29.99,
    description: "2025 Short Sleeve A-Line Mini Dress Casual Crew Neck Shift Dress Beach",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "95% Polyester, 5% Spandex",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 9,
    image: "images/female-img/female9.jpg",
    section: "Clothing",
    category: "Women",
    title: "Zeagoo Midi Dres",
    price: 41.99,
    description: "2025 Short Sleeve A-Line Mini Dress Casual Crew Neck Shift Dress Beach",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 10,
    image: "images/female-img/female10.jpg",
    section: "Clothing",
    category: "Women",
    title: "Short Sleeve V-Neck",
    price: 60.99,
    description: "2025 Short Sleeve A-Line Mini Dress Casual Crew Neck Shift Dress Beach",
    shippingInformation: "delivery Mon,Aug 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 11,
    image: "images/female-jewellery/71YFnoc6TNL._AC_SY695_.jpg",
    section: "Female Jewellery",
    category: "Women",
    title: "Gold Plated Necklaces",
    price: 100,
    description: "Anniversary for Gifts for Women, 18k Gold Plated Sunflower Necklaces for Women, Anniversary Her Gifts",
    shippingInformation: "delivery Mon,Sep 18",
    fabricType: "Sterling Silver",
    careInstructions: "nill",
    origin: "Imported",
  },

  {
    id: 12,
    image: "images/female-jewellery/femalejewellery2.jpg",
    section: "Female Jewellery",
    category: "Women",
    title: "Moissanite Necklaces",
    price: 219,
    description: "For Women 0.5Ct-7.6Ct Jewelry for Wife Her Mom Daughter Girlfriend Birthday",
    shippingInformation: "delivery Jul 09",
    fabricType: "Necklace",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 13,
    image: "images/female-jewellery/femalejewellery3.jpg",
    section: "Female Jewellery",
    category: "Women",
    title: "old Bangle Bracelets",
    price: 29.99,
    description: "For Women Teens Trendy Chunky Adjustable Twist Cuff Bracelet Jewelry Gifts",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Yellow Gold",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 14,
    image: "images/female-jewellery/femalejewellery4.jpg",
    section: "Female Jewellery",
    category: "Women",
    title: "14K Gold Necklace",
    price: 500.99,
    description: "Dainty Gold Name Necklace Personalized Initial",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Gold Plated",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 15,
    image: "images/female-jewellery/femalejewellery5.jpg",
    section: "Female Jewellery",
    category: "Women",
    title: "DEARMAY Bracelet",
    price: 155,
    description: "14K Real Gold Jewelry Sets Trendy Thin Dainty Stackable Cuban Link",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Metal",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 16,
    image: "images/female-img/female6.jpg",
    section: "Clothing",
    category: "Women",
    title: "Swarovski Crystal",
    price: 99,
    description: "Swarovski Luna Crystal Jewelry Collection",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Metal",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 16,
    image: "images/men-img/71Ra5-MwliL._AC_SY879_.jpg",
    section: "Clothing",
    category: "Men",
    title: "UOUA Outfits",
    price: 42.99,
    description: "Summer Casual Short Sleeve Button Down Shirt & Long Pants Sets Beach Vacation",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "95% Polyester",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },
  {
    id: 17,
    image: "images/men-img/men2.jpg",
    section: "Clothing",
    category: "Men",
    title: "FZNHQL Tracksuits",
    price: 23.99,
    description: "2 Piece Casual Athletic Jogging Outfits Short/Long Sleeve Track Suits",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 18,
    image: "images/men-img/men3.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Linen Outfit",
    price: 20.99,
    description: "Beach Button Down Shirt Casual Loose Pant Sets",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Polyester&Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 19,
    image: "images/men-img/men4.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Cotton Sets",
    price: 49.99,
    description: "Casual Long Sleeve Cuban Henley Shirt and Loose Pants Set Beach",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "49%rayon 36%polyester 15%nylon",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 21,
    image: "images/men-img/men5.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Long Sleeve ",
    price: 49.99,
    description: "Button Down Cuban Shirt and Pants Set Summer Beach Set Outfits",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "49%rayon 36%polyester 15%nylon",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 22,
    image: "images/men-img/men6.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Linen Outfit",
    price: 56.99,
    description: "Beach Button Down Shirt Casual Loose Pant Sets",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "49%rayon 36%polyester 15%nylon",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 23,
    image: "images/men-img/men7.jpg",
    section: "Clothing",
    category: "Men",
    title: "UOUA Summer Suit",
    price: 56.99,
    description: "2 Piece Shorts Sets Short Sleeve Sweatsuit Outfits 1/4 Zip Golf Polo Shirts Loungewear",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "97% Polyester, 3% Elastane",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 24,
    image: "images/men-img/men8.jpg",
    section: "Clothing",
    category: "Men",
    title: "Babioboa Tracksuit",
    price: 31.99,
    description: "Summer T Shirt & Shorts set 2 Pockets Oversize Two Piece Casual Daily Duty-off",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "typeHIGH QUALITY FABRIC - 95% Polyester, 5% Spandex.Soft, Breathable and Stretchy Waffle textured fabric.",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },
  
  {
    id: 25,
    image: "images/men-img/men9.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Cotton Sets",
    price: 49.99,
    description: "Casual Long Sleeve Cuban Henley Shirt and Loose Pants Set Beach Vacation Outfits",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "typeHIGH QUALITY FABRIC - 95% Polyester, 5% Spandex.Soft, Breathable and Stretchy Waffle textured fabric.",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 26,
    image: "images/men-img/men10.jpg",
    section: "Clothing",
    category: "Men",
    title: "COOFANDY Cotton Sets",
    price: 49.99,
    description: "Casual Long Sleeve Cuban Henley Shirt and Loose Pants Set Beach Vacation Outfits",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "49%rayon 36%polyester 15%nylon",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 27,
    image: "images/male-jewellery/menjewellery1.jpg",
    section: "Male Jewellery",
    category: "Men",
    title: "Ursteel Necklace",
    price: 323,
    description: "for Men - 18K Gold Silver Black Cross Necklaces Chain for Men, Layered Rope Chain Necklace Mens Jewelry 16 18 20 22 24 Inch",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },
  

   {
    id: 28,
    image: "images/male-jewellery/menjewellery2.jpg",
    section: "Male Jewellery",
    category: "Men",
    title: "Aniu Cremation Jewelry",
    price: 79.99,
    description: "Ashes S925 Sterling Silver Urn Necklace Memorial Necklace for Human Ashes of Loved",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "Machine Wash",
    origin: "Imported",
  },

  {
    id: 29,
    image: "images/male-jewellery/menjewellery3.jpg",
    section: "Male Jewellery",
    category: "Men",
    title: "Momlovu Gold Chain",
    price: 54.99,
    description: "4mm/6mm Non-Tarnish 18K Gold-Plated Cuban Link Chain, Cool Men's Necklace Chain",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "",
    origin: "Imported",
  },

  {
    id: 30,
    image: "images/male-jewellery/menjewellery4.jpg",
    section: "Male Jewellery",
    category: "Men",
    title: "Lacoste Bracelet",
    price: 100,
    description: "Lacoste Metropole Men's Bracelets",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "",
    origin: "Imported",
  },

  {
    id: 31,
    image: "images/male-jewellery/menjewellery5.jpg",
    section: "Male Jewellery",
    category: "Men",
    title: "RANKEEF Tiger Bracelet",
    price: 180,
    description: "8MM Natural Stone Stretch Adjustable Black Crystal Beaded Bracelet",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "",
    origin: "Imported",
  },

  {
    id: 32,
    image: "images/male-jewellery/menjewellery6.webp",
    section: "Male Jewellery",
    category: "Men",
    title: "Watch Jewelry Box",
    price: 110,
    description: "6-Slot 2-Layer Watch Case and Sunglasses Storage with Large Glass Lid, Men's Jewelry Box",
    shippingInformation: "delivery Mon,jul 28",
    fabricType: "Steel",
    careInstructions: "",
    origin: "Imported",
  },
]

 

//Generate Random items(3) for Popular Picks
const random1 = Math.floor(Math.random()*10);
const below10 = data[random1]

const random2 = Math.floor(Math.random()*10+10);
const above10 = data[random2];

const random3 = Math.floor(Math.random()*10+(10+10));
const above20 = data[random3];

console.log(below10)
console.log(above10)
console.log(above20)

const randomData = [below10, above10, above20];

const modal = document.getElementById("modalProduct");
modal.style.display="none";

const close = document.getElementById("closeModal");
close.style.display="none";


function displayProducts(randomData) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  randomData.forEach((d) => {
    const li = document.createElement("li");
    li.className = "product";
    
    li.innerHTML = `
    <div class="w-[270px] shadow-lg pb-4 flex flex-col items-center justify-center mb-[70px]">
      <div class="flex items-center justify-center w-[100%] h-[300px] bg-white border-[5px] border-[#ffd700] rounded-[1px]">
          <img src="${d.image}" alt="">
      </div>

      <p class="px-5 text-[18px] text-[#36454F] font-bold mt-7 text-center">${d.title}</p>

      <p class="text-center mt-4 text-2xl font-extralight">$${d.price}</p>

      <div class="flex items-center justify-center mt-5">
        <button class="border-[2px] border-[#82878a] text-[15px] px-3 py-1 hover:bg-[#6d898e]">ADD TO CART</button>
      </div>
     </div>
       `;
    list.appendChild(li);
     

    
    li.addEventListener("click", () => {
      
      const newDiv = document.createElement("div")
      newDiv.className = "productDiv";

      newDiv.innerHTML = `
             <div class="w-[60%] h-[89%] flex items-center space-x-5 border-[3px] px-4">
    <div class="flex items-center justify-center w-[400px] h-[400px] bg-white border-[5px] border-[#ffd700] rounded-[1px]">
      <img class="w-full h-full object-contain" src="${d.image}" alt="">
    </div>

    <div class=" space-y-7 w-full h-[100%] py-12 px-5">
      <span class="px-2 py-1 text-xs mb-[10px] border-[1px] border-black">BACK IN STOCK</span>
      <p class="font-semibold mt-2">${d.title}</p>
      <p class="mb-4">${d.description}</p>
      <p>$${d.price}</p>
      <p>${d.shippingInformation}</p>

      <div class="mt-3">
        <p class="text-sm">Size: <span class="text-gray-400">Select</span></p>
        <div>
          <button class="border-[2px] border-gray-300 w-[50px]">S</button>
          <button class="border-[2px] border-gray-300 w-[50px]">M</button>
          <button class="border-[2px] border-gray-300 w-[50px]">L</button>
          <button class="border-[2px] border-gray-300 w-[80px]">XL/1X</button>
        </div>

      </div>
      <div class="mt-2">
        <button class="px-[9px] py-[10px] text-white bg-black text-[10px]">ADD TO CART</button>
        <button class="px-[9px] py-[10px] text-white bg-black text-[10px]">Add to Wish List</button>
      </div>
    </div>
  </div> 

      `
     
      modal.style.display="block";
      modal.appendChild(newDiv);
      close.style.display="block";
     });
    
   
  });
 

  
  close.addEventListener("click", ()=> {
    modal.style.display="none";
    close.style.display="none";
    location.reload()
  })
}




window.addEventListener("DOMContentLoaded", displayProducts(randomData));




//For rendering all items in data

// function displayProducts(data) {
//   const list = document.getElementById("productList");
//   list.innerHTML = "";

//   data.forEach((d) => {
//     const li = document.createElement("li");
//     li.className = "product";
    
//     li.innerHTML = `
//     <div class="w-[270px] shadow-lg pb-4 flex flex-col items-center justify-center mb-[70px]">
//       <div class="flex items-center justify-center w-[100%] h-[300px] bg-white border-[5px] border-[#36454F] rounded-[1px]">
//           <img src="${d.image}" alt="">
//       </div>

//       <p class="px-5 text-[18px] text-[#36454F] font-bold mt-7 text-center">${d.title}</p>

//       <p class="text-center mt-4 text-2xl font-extralight">$${d.price}</p>

//       <div class="flex items-center justify-center mt-5">
//         <button class="border-[2px] border-[#36454F] text-[15px] px-3 py-1 hover:bg-[#6d898e]">ADD TO CART</button>
//       </div>
//      </div>
//        `;
//     list.appendChild(li);

  
//   });
// }


// window.addEventListener("DOMContentLoaded", displayProducts(data));
