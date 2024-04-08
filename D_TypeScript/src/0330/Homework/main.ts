type Product = {
  name: string;
  quantity: number;
};

class Cart {
  private items: Product[] = [];

  addItem(product: Product): void {
    const existingItemIndex = this.items.findIndex(item => item.name === product.name);
    if (existingItemIndex !== -1) {
      this.items[existingItemIndex].quantity += product.quantity;
    } else {
      this.items.push(product);
    }
    this.render();
  }

  removeItem(itemName: string): void {
    this.items = this.items.filter(item => item.name !== itemName);
    this.render();
  }

  render(filteredItems?: Product[]): void {
    const listElement = document.getElementById('product-list') as HTMLUListElement;
    listElement.innerHTML = '';

    const itemsToRender = filteredItems || this.items;
    itemsToRender.forEach(product => {
      const itemElement = document.createElement('li');
      itemElement.textContent = `${product.name} - ${product.quantity}`;

      const removeButton = this.createRemoveButton(product.name);
      itemElement.appendChild(removeButton);

      listElement.appendChild(itemElement);
    });

    this.updateTotalQuantity();
  }

  createRemoveButton(itemName: string): HTMLButtonElement {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => this.removeItem(itemName);
    return removeButton;
  }

  updateTotalQuantity(): void {
    const totalQuantity = this.items.reduce((total, product) => total + product.quantity, 0);
    const totalQuantityElement = document.getElementById('total-quantity');
    if (totalQuantityElement) {
      totalQuantityElement.textContent = `총 수량: ${totalQuantity}`;
    }
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
