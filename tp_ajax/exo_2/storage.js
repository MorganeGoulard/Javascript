
    
export function CreateMenu(){
      const monTableau = [
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
          desc: `I’m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
        },
        {
          id: 2,
          title: "diner double",
          category: "lunch",
          price: 13.99,
          img: "https://images.unsplash.com/photo-1647591258125-62620cdb4cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80",
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: "godzilla milkshake",
          category: "shakes",
          price: 6.99,
          img: "https://images.unsplash.com/photo-1624781748172-7151704a42b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: "country delight",
          category: "breakfast",
          price: 20.99,
          img: "https://images.unsplash.com/photo-1529940122574-0096689bc5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: "egg attack",
          category: "lunch",
          price: 22.99,
          img: "https://images.unsplash.com/photo-1529411081224-84ac0d0bf6ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: "oreo dream",
          category: "shakes",
          price: 18.99,
          img: "https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: "bacon overflow",
          category: "breakfast",
          price: 8.99,
          img: "https://images.unsplash.com/photo-1619096956056-156cb75dccb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: "american classic",
          category: "lunch",
          price: 12.99,
          img: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: "quarantine buddy",
          category: "shakes",
          price: 16.99,
          img: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
          id: 10,
          title: "bison steak",
          category: "dinner",
          price: 22.99,
          img: "https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
      ];

      localStorage.setItem("menu", JSON.stringify(monTableau));
    }
  
export function GetMenu(){
      let menuTab = JSON.parse(localStorage.getItem("menu"));
      if(!menuTab){
        CreateMenu();
        menuTab = GetMenu();
      }
      return menuTab;
    };

export function FindByCategory(category){
  const menus = GetMenu();
  if(category){
    const menuByCategory = menus.filter(function(menu){
      return menu.category === category; //si category de paramètre = menu.category => retourne true -- evite le if/else 
    })
    return menuByCategory;
  } else {
    return menus;
  }
};


