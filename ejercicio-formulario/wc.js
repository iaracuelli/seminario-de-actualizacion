class WCData
{
    constructor()
    {
        this.data = [];
    }
    
    getData()
    {
        return this.data;
    }

    setData(data)
    {
        this.data = data;
    }
}

class WCEventHandler
{
    constructor(wcData)
    {
        this.wcData = wcData;
    }

    onRequestData()
    {
        return this.wcData.getData();
    }

    onChangeData(data)
    {
        this.wcData.setData(data);
    }
}

class WCView extends HTMLElement
{
    constructor(wcEventHandler)
    {
        super();
        this.wcEventHandler = wcEventHandler;

        //boton
        this.btnUpdate = document.createElement('button');
        this.btnUpdate.innerText = 'Update'

        //lista
        this.list = document.createElement('ul');

        this.appendChild(this.list);
        this.appendChild(this.btnUpdate);


    }

    renderList()
    {
        this.list.innerHTML = '';

        let data = this.wcEventHandler.onRequestData();

        data.forEach( number =>
        {
            let item = document.createElement('li');
            item.innerText = number;
            this.list.appendChild(item);
        });
    }

    onBtnUpdateClick()
    {
        this.renderList();
    }

    connectedCallback()
    {
        this.btnUpdate.onclick = this.onBtnUpdateClick.bind(this);
    }

    disconnectedCallback()
    {
        this.btnUpdate.onclick = null;
    }
}
customElements.define('x-wcview', WCView);


function main ()
{
    const data = new WCData();
    data.setData([1, 2, 3]);

    const handler = new WCEventHandler(data);

    const view = new WCView(handler);

    document.body.appendChild(view);
}

window.onload = main; 