class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = 0;
  
      // Crear elementos del DOM para los botones
      const counterButtons = document.createElement('div');
      counterButtons.id = 'counter-buttons';
  
      const addButton = document.createElement('button');
      addButton.textContent = '+';
      addButton.addEventListener('click', () => this._increment());
  
      const subtractButton = document.createElement('button');
      subtractButton.textContent = '-';
      subtractButton.addEventListener('click', () => this._decrement());
  
      // Añadir botones al contenedor
      counterButtons.appendChild(addButton);
      counterButtons.appendChild(subtractButton);
  
      // Añadir el contenedor de botones al componente
      this.appendChild(counterButtons);
  
      // Añadir el párrafo para mostrar el contador
      const countParagraph = document.createElement('p');
      countParagraph.id = 'count-display';
      this.appendChild(countParagraph);
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      // Actualizar el contenido del párrafo con el contador
      this.querySelector('#count-display').textContent = `Contador: ${this._counter}`;
    }
  
    _increment() {
      this._counter++;
      this.render();
    }
  
    _decrement() {
      this._counter--;
      this.render();
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  