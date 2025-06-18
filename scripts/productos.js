  const productos = [
    {
        id: 1,
        tipo: "Álbum",
        titulo: "眩しいDNAだけ",
        descripcion: "Viaje emocional con sintetizadores brillantes.",
        precio: 1200,
        imagen: "css/img/cards/DNA.png",
        canciones: [
          { titulo: "ヒューマノイド (Humanoid)", letra: "この街は僕に似てる…" },
          { titulo: "正義", letra: "繋ぎとめていたのに壊したいのは誰だろう…" },
          { titulo: "お勉強しといてよ", letra: "君のこと想ってるだけじゃ つまらない" },
          { titulo: "眩しいDNAだけ", letra: "夢の中 君に会えたら…" }
        ]
      },
      {
        id: 2,
        tipo: "Álbum",
        titulo: "正しい偽りからの起床",
        descripcion: "Debut impactante con letras introspectivas.",
        precio: 1000,
        imagen: "css/img/cards/album.jpg",
        canciones: ["狂信", "ミッドナイト", "破顔", "月曜日"]
      },
      {
        id: 3,
        tipo: "Canción",
        titulo: "Ham",
        descripcion: "Single melancólico con dinamismo pop.",
        precio: 900,
        imagen: "css/img/cards/ham.png",
        letra: "I can't stop biting down on you like ham…"
      },
      {
        id: 4,
        tipo: "Canción",
        titulo: "Study Me",
        descripcion: "Tema sobre crecer con presión.",
        precio: 950,
        imagen: "css/img/cards/studyme.png",
        letra: "Study me like a test you want to fail…"
      },
      {
        id: 5,
        tipo: "Canción",
        titulo: "Time Left",
        descripcion: "Reflexión poética con armonías únicas.",
        precio: 1100,
        imagen: "css/img/cards/timeleft.png",
        letra: "How much time left before you forget me…"
      },
      {
        id: 6,
        tipo: "Canción",
        titulo: "truth in lies",
        descripcion: "Electrónica y rock con vocales hipnóticas.",
        precio: 990,
        imagen: "css/img/cards/truth.png",
        letra: "I found the truth in all your lies…"
      },
      {
        id: 7,
        tipo: "Canción",
        titulo: "ハゼ馳せる果てるまで",
        descripcion: "Canción poderosa sobre identidad.",
        precio: 1150,
        imagen: "css/img/cards/a.png",
        letra: "僕を僕でいさせて…"
      }
    ];
  

  function mostrarDetalle(id) {
    const producto = productos.find(p => p.id === id);
    const contenedor = document.getElementById("detalleProducto");

    if (!producto) return;

    contenedor.innerHTML = `
      <h2>${producto.titulo}</h2>
      <img src="${producto.imagen}" alt="${producto.titulo}" style="max-width: 200px;">
      <p>${producto.descripcion}</p>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      ${producto.canciones ? `
        <ul>
          ${producto.canciones.map(c => typeof c === "string"
            ? `<li>${c}</li>`
            : `<li><strong>${c.titulo}</strong>: <em>${c.letra}</em></li>`).join("")}
        </ul>
      ` : ""}
      ${producto.letra ? `<p><em>${producto.letra}</em></p>` : ""}
    `;

    contenedor.style.display = 'block';
    window.scrollTo({ top: contenedor.offsetTop, behavior: 'smooth' });
  }
