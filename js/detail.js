const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://source.unsplash.com/random/400x400/?headphones", description: "Confort et son incroyable." },
    { id: 2, name: "Smartphone", price: 699.99, image: "https://source.unsplash.com/random/400x400/?smartphone", description: "Technologie moderne pour bébé ?" },
    { id: 3, name: "Laptop", price: 1299.99, image: "https://source.unsplash.com/random/400x400/?laptop", description: "Pas pour bébé, mais testons" },
    { id: 4, name: "Smartwatch", price: 199.99, image: "https://source.unsplash.com/random/400x400/?smartwatch", description: "Surveillance pour bébé." }
];

const product = products.find(p => p.id === id);

if (product) {
    document.getElementById("product-detail").innerHTML = `
        <div style="display: flex; gap: 2rem;">
            <img src="${product.image}" alt="${product.name}" style="width: 300px; height: 300px; object-fit: cover;"/>
            <div>
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <h2>$${product.price.toFixed(2)}</h2>
                <button class="add-to-cart" onclick="alert('Ajouté au panier !')">Ajouter au panier</button>
            </div>
        </div>
    `;
} else {
    document.getElementById("product-detail").innerHTML = `<p>Produit introuvable</p>`;
}
