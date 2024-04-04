type Product = {
  name: string;
  quantity: number;
};

class Cart {
  private items: Product[] = [];

  addItem(product: Product): void {
      const existingItem = this.items.find(item => item.name === product.name);
      if (existingItem) {
          existingItem.quantity += product.quantity;
      } else {
          this.items.push(product);
      }
      this.render();
  }

  removeItem(index: number): void {
      this.items.splice(index, 1);
      this.render();
  }

  render(filteredItems?: Product[]): void {
      const list = document.getElementById('product-list') as HTMLUListElement;
      list.innerHTML = '';
      const itemsToRender = filteredItems || this.items;
      itemsToRender.forEach((product, index) => {
          const item = document.createElement('li');
          item.textContent = `${product.name} - ${product.quantity}`;
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.onclick = () => this.removeItem(index);
          item.appendChild(removeButton);
          list.appendChild(item);
      });

      const totalQuantity = this.items.reduce((total, product) => total + product.quantity, 0);
      document.getElementById('total-quantity')!.textContent = `총 수량: ${totalQuantity}`;
  }

  searchItem(query: string): void {
      const filteredItems = this.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      this.render(filteredItems);
  }
}

const cart = new Cart();
document.getElementById('product-form')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('product-name') as HTMLInputElement;
  const quantityInput = document.getElementById('product-quantity') as HTMLInputElement;
  const product = { name: nameInput.value, quantity: parseInt(quantityInput.value, 10) };
  cart.addItem(product);
  nameInput.value = '';
  quantityInput.value = '';
});

document.getElementById('search-form')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  cart.searchItem(searchInput.value);
  searchInput.value = '';
});
