const products = [
  {
    name: 'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD/Windows 11 Home/Wi-Fi 6),15.6"(39.6cms) FHD ANV15-51',
    image: '/uploads/51TiJ0A-KsL._SL1000_.jpg',
    description:
      'Processor: Intel Core i5-13420H processor - 8 cores, max turbo up to 4.60 Ghz | RAM : 16 GB of DDR5 system memory, upgradable to 32 GB (Memory Frequency: Up to 5200 MT/s)  Features: Backlit keyboard',
    brand: 'ACER',
    category: 'Electronics',
    price: 79990,
    countInStock: 7,
    rating: 4.0,
    numReviews: 118
  },
  {
    name: 'HP Victus Gaming Laptop,12th Gen Intel Core i5-12450H,NVIDIA RTX 3050 GPU,15.6-inch (39.6 cm),FHD,IPS,144Hz,Windows 11 Home,9 ms Response time,16GB DDR4,512GB SSD,Backlit KB(MSO,Blue,2.29 kg) fa0666TX',
    image: '/uploads/71h9nOTd93L._SL1500_.jpg',
    description:
    "8-core 12th Gen Intel Core i5-12450H with 12 threads and 12MB L3 cache for efficient multitasking. NVIDIA GeForce RTX 3050 Laptop GPU for immersive gaming and rendering",
    brand: 'HP',
    category: 'Electronics',
    price: 71990,
    countInStock: 5,
    rating: 4.2,
    numReviews: 112
  },
  {
    name: 'ASUS ROG Strix G17 (2022), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7-6800HS, RTX 3050 4GB Graphics, Gaming Laptop (16GB/512GB SSD/Windows 11/Gray/2.5 Kg),G713RC-HX109WS',
    image: '/uploads/61GkvvDNnCL._SL1500_.jpg',
    description:
      'Processor: AMD Ryzen 7 6800HS Mobile Processor (8-core/16-thread, 20MB cache, up to 4.7 GHz max boost) Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite,',
    brand: 'ASUS',
    category: 'Electronics',
    price: 94990,
    countInStock: 11,
    rating: 3.7,
    numReviews: 102
  },
  {
    name: 'MSI Sword 15 A12VF, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (8GBx2/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4060, 8GB GDDR6/White/2.25Kg), A12VF-401IN',
    image: '/uploads/71cRA3lD-8L._SL1500_.jpg',
    description:
      'Processor: 12th Generation Intel Core i7-12650H Up To 4.70GHz Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: MSI Center ',
    brand: 'MSI',
    category: 'Electronics',
    price: 105990,
    countInStock: 7,
    rating: 4,
    numReviews: 110
  },
  {
    name: 'Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6" (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 + MSO"21/15 Months McAfee/Backlit KB/Dark Shadow Grey/2.81kg',
    image: '/uploads/51rEPuvNYFL._SL1080_.jpg',
    description:
      'Processor : 12th Gen Intel Core i5-12500H | Up to 4.50 Ghz | 12 cores | 16 Threads | 18 MB Cache | 45 W TDP // Memory : 16 GB, 2 x 8 GB, DDR5, 4800 MHz  Intel Wi-Fi 6 AX201, 2x2, 802.11ax, Bluetooth wireless card Power Adaptor: 180W AC Adapter',
    brand: 'DELL',
    category: 'Electronics',
    price: 77490,
    countInStock: 9,
    rating: 4.1,
    numReviews: 112
  },
  {
    name: 'ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/512GB SSD/Windows 11/90WHrs Battery/Black/2.30 Kg), FX506HE-HN382W',
    image: '/uploads/81UWgnVKDBL._SL1500_.jpg',
    description:
      'Processor: Intel Core i7-11800H Processor 2.3 GHz (24M Cache, up to 4.6 GHz, 8 Cores) Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV and one month of Game Pass-including EA Play.With new games added all the time',
    brand: 'ASUS',
    category: 'Electronics',
    price: 68990,
    countInStock: 9,
    rating: 4.1,
    numReviews: 132
  },
  {
    name: 'Lenovo IdeaPad Gaming 3 AMD Ryzen 5 5500H 15.6" (39.62cm) FHD IPS 300nits 144Hz Gaming Laptop (8GB/512GB SSD/Windows 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Onyx Grey/2.32Kg), 82K20289IN',
    image: '/uploads/61PeZXpc5-L._SL1080_.jpg',
    description:
      'Processor: AMD Ryzen 5 5500H | Speed: 3.6 GHz (Base) - 4.2 GHz (Max) | 6 Cores | 12 Threads | 16MB Cache Display: 15.6" FHD (1920x1080) | IPS Technology| Vibration (4-32Hz over 2 hrs) OS and Pre-Installed Software.',
    brand: 'LENOVO',
    category: 'Electronics',
    price: 47990,
    countInStock: 9,
    rating: 4,
    numReviews: 132
  },
  {
    name: 'Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Laptop (Windows 11 Home/16GB RAM/512GB SSD/Intel Iris Xe Graphics) AL15-52, 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.6 KG',
    image: '/uploads/71czGb00k5L._SL1500_.jpg',
    description:
      'Processor : Great performance meets long battery life with the Intel Core i5-1235U Processor - up to 4.40 GHz, 10 cores, 12 threads.',
    brand: 'ACER',
    category: 'Electronics',
    price: 42990,
    countInStock: 9,
    rating: 3.8,
    numReviews: 122
  },
  {
    name: 'Acer Nitro 5 Gaming Laptop/ 12th Gen Intel Core i7-12700H Processor 15.6"(39.6cms) FHD 144Hz Display (16GB/512GB SSD/1 TB HDD/RTX 3050 Graphics/Windows 11 Home/RGB Keyboard), AN515-58',
    image: '/uploads/71927eDsJJL._SL1500_.jpg',
    description:
      'Processor: Intel Core i7-12700H processor - 14 cores, max turbo up to 4.70 Ghz | RAM : 16 GB of DDR4 system memory, NVIDIA GeForce RTX 3050 with 4 GB of GDDR6 memory.',
    brand: 'ACER',
    category: 'Electronics',
    price: 98990,
    countInStock: 9,
    rating: 4.2,
    numReviews: 120
  },
  {
    name: 'Lenovo Legion 5 Pro Intel Core i7 11th Gen 16"(40.64cm) 500nits WQXGA Gaming Laptop (32GB/1TB SSD/8GB RTX 3070/165Hz/Win11/Office/Blue Backlit/3Yr Warranty/3months Game Pass/Stingray/2.3Kg),82JD005LIN',
    image: '/uploads/61E9njv7B9L._SL1080_.jpg',
    description:
      'Processor: 11th Gen Intel Core i7-11800H | Speed: 2.3 GHz (Base) - 4.6 GHz (Max) | 8 Cores | 16 Threads |  BT 5.1 Graphics: NVIDIA GeForce RTX 3070 8GB GDDR6 Dedicated Graphics with max TGP 140W | Free-Sync and G-Sync.',
      brand: 'Lenovo',
      category: 'Electronics',
    price: 119990,
    countInStock: 9,
    rating: 3.8,
    numReviews: 117
  },
  {
    name: 'HP OMEN Gaming Laptop,AMD Ryzen 7 6800H,8GB RTX 3070 Ti GPU,16.1-inch (40.9 cm),QHD,IPS,300 nits,165Hz,Windows 11 Home,3 ms Response time,16GB DDR5,1TB SSD,RGB Backlit KB(MSO,Silver,2.37 kg),n0123AX',
    image: '/uploads/71PlJMFYA4L._SL1500_.jpg',
    description:
      '【8-core AMD Ryzen 7 6800H with 16 threads and 16MB L3 cache for fast processing. OMEN Tempest Cooling keeps performance cool.',
    brand: 'HP',
    category: 'Electronics',
    price: 108990,
    countInStock: 9,
    rating: 4.6,
    numReviews: 107
  }
];

export default products;
