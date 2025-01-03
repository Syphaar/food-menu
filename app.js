const menu = [
    {
      id: 1,
      title: "Custard and Akara",
      category: "breakfast",
      price: 15.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854749/Pap_and_akara_nfhijv.jpg",
      desc: `A delightful pairing of creamy, sweet custard and crispy, savory akara. Perfectly balanced for a satisfying breakfast or snack.`,
    },
    {
      id: 2,
      title: "French fries",
      category: "breakfast",
      price: 13.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854746/french_fries_fwvnfg.jpg",
      desc: `Golden, crispy, and perfectly seasoned, our French fries are the ultimate comfort snack. Enjoy them solo or pair them with your favorite dipping sauce.`,
    },
    {
      id: 3,
      title: "French toast",
      category: "breakfast",
      price: 6.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854746/French_toast_k8tndo.jpg",
      desc: `Lightly crisped on the outside, soft and fluffy inside, our French toast is a sweet and satisfying start to your day.`,
    },
    {
      id: 4,
      title: "Garri and Egusi",
      category: "lunch",
      price: 22.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854746/garri_and_egusi_zu1ugl.jpg",
      desc: `A hearty combo of fluffy garri and richly spiced egusi soup, bursting with traditional flavors for a truly satisfying meal.`,
    },
    {
      id: 5,
      title: "Fried potato",
      category: "dinner",
      price: 20.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854747/fried_potato_hbxtwi.jpg",
      desc: `Crispy on the outside, tender on the inside, our French potatoes are perfectly seasoned and irresistibly delicious.`,
    },
    {
      id: 6,
      title: "Chocolate milkshake",
      category: "shakes",
      price: 15.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854746/chocolate_bkahz9.jpg",
      desc: `Rich, creamy, and indulgently chocolaty, our milkshake is the perfect treat to satisfy your sweet cravings.`,
    },
    {
      id: 7,
      title: "Garri and Ogbono",
      category: "lunch",
      price: 18.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854748/garri_and_ogbono_arumar.jpg",
      desc: `A classic duo of smooth, hearty garri paired with flavorful, thick ogbono soup for a deliciously satisfying meal.`,
    },
    {
      id: 8,
      title: "Jellof Rice",
      category: "lunch",
      price: 8.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854747/jellof_rice_prhdr4.jpg",
      desc: `Savory, rich, and perfectly spiced, our Jollof rice is a flavorful, vibrant dish that promises to tantalize your taste buds.`,
    },
    {
      id: 9,
      title: "noodles",
      category: "breakfast",
      price: 12.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854747/noodles_fxognu.jpg",
      desc: `Quick, flavorful, and satisfying, our noodles are seasoned to perfection for a deliciously comforting meal.`,
    },
    {
      id: 10,
      title: "oreo milkshake",
      category: "shakes",
      price: 16.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854748/oreo_m53gtb.jpg",
      desc: `Creamy, indulgent, and packed with the rich taste of Oreo cookies, this milkshake is a sweet treat you won't want to miss.`,
    },
    {
      id: 11,
      title: "pancake",
      category: "breakfast",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854748/pancake_hbryua.jpg",
      desc: `Fluffy, warm, and golden, our pancakes are the perfect breakfast indulgence, served with a drizzle of syrup and your favorite toppings.`,
    },
    {
      id: 12,
      title: "plantain and egg",
      category: "dinner",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854748/plantain_and_egg_wiuoao.jpg",
      desc: `Sweet, golden plantains served alongside a perfectly fried egg, offering a simple yet delicious meal to start your day.`,
    },
    {
      id: 13,
      title: "sandwich",
      category: "breakfast",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854749/sandwich_azmski.jpg",
      desc: `Freshly made with your choice of fillings, our sandwiches are a perfect blend of flavors, ideal for a quick and satisfying meal.`,
    },
    {
      id: 14,
      title: "scrambled eggs",
      category: "breakfast",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854750/scrambled_eggs_o5deod.jpg",
      desc: `Light, soft, and packed with flavor, our scrambled eggs are a deliciously comforting choice for any time of the day.`,
    },
    {
      id: 15,
      title: "spaghetti",
      category: "dinner",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854749/spaghetti_re3nia.jpg",
      desc: `Tender, perfectly cooked spaghetti tossed in a rich, savory sauce for a satisfying meal full of flavor and comfort.`,
    },
    {
      id: 16,
      title: "strawberry milkshake",
      category: "shakes",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854759/strawberry_hzy2aq.jpg",
      desc: `A luscious blend of creamy milk and juicy strawberries, this milkshake offers a sweet and refreshing escape with every sip.`,
    },
    {
      id: 17,
      title: "tacos",
      category: "dinner",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854755/taco_vlly83.jpg",
      desc: `Soft or crunchy, our tacos are filled with seasoned goodness and fresh toppings, offering a burst of flavors in every bite.`,
    },
    {
      id: 18,
      title: "waffles",
      category: "breakfast",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854746/waffle_mmiaht.jpg",
      desc: `Warm, fluffy, and deliciously crispy, our waffles are the perfect combination of texture and flavor, served with your choice of toppings.`,
    },
    {
      id: 19,
      title: "yam and fried egg",
      category: "dinner",
      price: 39.99,
      img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735854747/yam_and_egg_hkykz8.jpg",
      desc: `Savory, tender yam served with a perfectly fried egg, creating a satisfying and hearty meal that’s full of flavor.`,
    },
  ];

  const sectionCenter = document.querySelector('.section-center');
  const container = document.querySelector('.btn-container');

  // load items
  window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });

  // filter items
  





  function displayMenuItems(menuItems) {
    // console.log('shake');
    let displayMenu = menuItems.map(function(item) {
      // console.log(item);
      
      return `<article class="menu-item">
            <img src="${item.img}" class="photo" alt="${item.title}">
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join('');
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
  }

  // 
  function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['all']);
    const categoryBtns = categories.map(function(category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join('');
    container.innerHTML = categoryBtns
    const filterBtn = document.querySelectorAll('.filter-btn');


    filterBtn.forEach(function(btn) {
      btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
  
        });
        // console.log(menuCategory);
        if (category === 'all') {
          displayMenuItems(menu)
        }
        else {
          displayMenuItems(menuCategory)
        }
      });
    });
  }