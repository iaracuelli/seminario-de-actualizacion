class Model extends EventTarget {
    constructor() 
    {
        super();
        this._figures = [];
    }
    
    changed() {
        this.dispatchEvent(new CustomEvent('changed'));
    }

    addFigure(figure)
    {
        this._figures.push(figure);
        this.changed();
    }

    clearFigures()
    {
        this._figures = [];
        this.changed();
    }
}

class View extends HTMLElement {
    constructor() 
    {
        super();
        this._canvas = document.createElement('canvas');
        this._canvas.width = 800;
        this._canvas.height = 600;
        this._canvas.style.border = '1px solid black';
        this.ctx = this._canvas.getContext('2d');
        this.appendChild(this._canvas);
    }
    
    render( renderFunction ) 
    {
        this.clear();
        renderFunction( this._canvas );       
    }

    clear()
    {
        this.ctx.clearRect(0,0,this._canvas.width,this._canvas.height );
    }
   
    connectedCallback() {
       console.log('Canvas agregado...')
    }
    disconnectedCallback() {
        
    }
    
    _onSave() {
       
    }
}
customElements.define('x-view', View);


class Controller {
    constructor(view, model) {
        this._view = view;
        this._model = model;
        this._onModelChanged = this.onModelChanged.bind(this);
        this._onViewRequest = this.onViewRequest.bind(this);
    }
    
    enable() {
        this._model.addEventListener('changed', this._onModelChanged);
        this._view.addEventListener('request', this._onViewRequest);
    }

    disable() {
        this._model.removeEventListener('changed', this._onModelChanged);
        this._view.removeEventListener('request', this._onViewRequest);
    }

    onModelChanged() 
    {
        this._view.render(this._renderFigures.bind(this));
        
    }

    onViewRequest(event) {
       
    }

    _renderFigures(canvas)
    {
        ejercicio6(canvas, this._model._figures);
    }

    _loadFigures()
    {
        let text = prompt("Ingresa el JSON:");           
        let figure = JSON.parse(text);                    

        this._model.addFigure(figure);
        
    }

    _clear()
    {
        this._model.clearFigures();
    }
}
