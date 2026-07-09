
function createNavbar()
{
    // elementos
    let navbar = document.createElement('div');
    let flexBar = document.createElement('div');

    // logo
    let logoDiv = document.createElement('div');
    let logoH5 = document.createElement('h5');
    let logoA = document.createElement('a');
    let logoImg = document.createElement('img');

    // boton hamburguesa
    let labelHamburger = document.createElement('label');
    let iHamburger = document.createElement('i');

    // botones derecha
    let divRight = document.createElement('div');
    let btnEmail = document.createElement('button');
    let iEmail = document.createElement('i');
    let btnBell = document.createElement('button');
    let iBell = document.createElement('i');

    // boton usuario
    let divUser = document.createElement('div');
    let divUserBtn = document.createElement('div');
    let divUserCircle = document.createElement('div');
    let iUser = document.createElement('i');

    // barra de busqueda
    let divSearch = document.createElement('div');
    let divSearchIcon = document.createElement('div');
    let iSearch = document.createElement('i');
    let inputSearch = document.createElement('input');

    // clases
    navbar.classList.add('w3-top', 'w3-card');
    navbar.style.height = '54px';

    flexBar.classList.add('w3-flex-bar', 'w3-theme', 'w3-left-align');

    logoDiv.classList.add('admin-logo', 'w3-bar-item', 'w3-hide-medium', 'w3-hide-small');
    logoH5.style.lineHeight = '1';
    logoH5.style.margin = '0';
    logoH5.style.fontWeight = '300';

    logoA.classList.add('w3-button', 'w3-bold');
    logoA.href = './index.html';

    logoImg.classList.add('w3-image');
    logoImg.src = './assets/admin-logo.png';
    logoImg.alt = 'w3mix';
    logoImg.width = '26';

    labelHamburger.classList.add('w3-button', 'w3-large', 'w3-opacity-min');
    labelHamburger.htmlFor = 'sidebar-control';
    iHamburger.classList.add('fa', 'fa-bars');

    divRight.classList.add('w3-right');
    btnEmail.type = 'button';
    btnEmail.classList.add('w3-button', 'w3-large', 'w3-opacity-min');
    iEmail.classList.add('fa', 'fa-envelope-open');

    btnBell.type = 'button';
    btnBell.classList.add('w3-button', 'w3-large', 'w3-opacity-min');
    iBell.classList.add('fa', 'fa-bell');

    divUser.classList.add('text-right');
    divUserBtn.classList.add('w3-button');
    divUserCircle.classList.add('w3-circle', 'w3-center', 'w3-text-white', 'w3-primary');
    divUserCircle.style.width = '38px';
    divUserCircle.style.height = '38px';
    iUser.classList.add('fa', 'fa-fw', 'fa-user', 'fa');
    iUser.style.marginTop = '11px';

    divSearch.style.width = '40%';

    divSearchIcon.classList.add('w3-display-right', 'w3-padding-small', 'w3-margin-right');
    iSearch.classList.add('fa', 'fa-search', 'w3-opacity-max');

    inputSearch.type = 'text';
    inputSearch.classList.add('w3-input', 'w3-border', 'w3-round', 'w3-small', 'w3-padding-small', 'w3-gray-lighter', 'w3-show-inline-block');
    inputSearch.placeholder = 'Enter keywords';

    // estructura
    logoA.appendChild(logoImg);
    logoH5.appendChild(logoA);
    logoDiv.appendChild(logoH5);

    labelHamburger.appendChild(iHamburger);

    btnEmail.appendChild(iEmail);
    btnBell.appendChild(iBell);
    divRight.appendChild(btnEmail);
    divRight.appendChild(btnBell);

    divUserCircle.appendChild(iUser);
    divUserBtn.appendChild(divUserCircle);
    divUser.appendChild(divUserBtn);

    flexBar.appendChild(logoDiv);
    flexBar.appendChild(labelHamburger);
    flexBar.appendChild(divSearch);
    flexBar.appendChild(divRight);
    flexBar.appendChild(divUser);

    navbar.appendChild(flexBar);

    divSearchIcon.appendChild(iSearch);
    divSearch.appendChild(divSearchIcon);
    divSearch.appendChild(inputSearch);

    return navbar;
}

function createButtonMenu(href, iconClass, text)
{
    //elementos
    let a = document.createElement('a');
    let i = document.createElement('i');
    let textNode = document.createTextNode('\u00A0 ' + text);

    // clases y estilos
    a.classList.add('w3-bar-item', 'w3-button', 'w3-padding-large', 'w3-hover-text-primary');
    a.href = href;
    i.classList.add('fa', 'fa-fw', iconClass);

    //estructura
    a.appendChild(i);
    a.appendChild(textNode);

    return a;
}

function createSidebar()
{
    let sidebar = document.createElement('nav');
    // logo mobile
    let divLogoMobile = document.createElement('div');
    let labelMobile = document.createElement('label');
    let iMobile = document.createElement('i');
    let h5Mobile = document.createElement('h5');
    let aMobile = document.createElement('a');
    let imgMobile = document.createElement('img');

    // bloque menu
    let divBarBlock = document.createElement('div');
    let spanMainNav = document.createElement('span');
    let spanLabels = document.createElement('span');

    // items del menu  createButtonMenu
    let btnDashboard = createButtonMenu('./index.html', 'fa-bar-chart', 'Dashboard');
    let btnIcons = createButtonMenu('./icons.html', 'fa-fire', 'UI Icons');
    let btnForms = createButtonMenu('./forms.html', 'fa-edit', 'Forms');
    let btnTables = createButtonMenu('./tables.html', 'fa-table', 'Tables');
    let btnProfile = createButtonMenu('./profile.html', 'fa-user-circle', 'Profile');
    let btnLogin = createButtonMenu('./login.html', 'fa-lock', 'Login');
    let btnRegister = createButtonMenu('./register.html', 'fa-sign-in', 'Registration');

    // labels
    let btnImportant = createButtonMenu('#dashboard', 'fa-coffee', 'Important');
    let btnWarning = createButtonMenu('#dashboard', 'fa-circle-o-notch', 'Warning');
    let btnInformation = createButtonMenu('#dashboard', 'fa-share-alt', 'Information');

    // clases
    sidebar.id = 'sidebar';
    sidebar.classList.add('w3-sidebar', 'w3-top', 'w3-bottom', 'w3-collapse', 'w3-white', 'w3-border-right', 'w3-border-top', 'scrollbar');
    sidebar.style.zIndex = '3';
    sidebar.style.width = '230px';
    sidebar.style.height = 'auto';
    sidebar.style.marginTop = '54px';

    divLogoMobile.classList.add('w3-bar-item', 'w3-border-bottom', 'w3-hide-large');
    divLogoMobile.style.padding = '6px 0';

    labelMobile.classList.add('w3-left', 'w3-button', 'w3-large', 'w3-opacity-min');
    labelMobile.htmlFor = 'sidebar-control';
    labelMobile.style.background = 'white';
    iMobile.classList.add('fa', 'fa-bars');

    h5Mobile.style.lineHeight = '1';
    h5Mobile.style.margin = '0';
    h5Mobile.style.fontWeight = '300';

    aMobile.classList.add('w3-button');
    aMobile.href = './index.html';
    aMobile.style.background = 'white';

    imgMobile.classList.add('w3-image');
    imgMobile.src = './assets/admin-logo.png';
    imgMobile.alt = 'w3mix';

    divBarBlock.classList.add('w3-bar-block');

    spanMainNav.classList.add('w3-bar-item', 'w3-padding', 'w3-small', 'w3-opacity');
    spanMainNav.style.marginTop = '8px';
    spanMainNav.textContent = 'MAIN NAVIGATION';

    spanLabels.classList.add('w3-bar-item', 'w3-padding', 'w3-small', 'w3-opacity');
    spanLabels.textContent = 'LABELS';

    // estructura
    labelMobile.appendChild(iMobile);
    aMobile.appendChild(imgMobile);
    h5Mobile.appendChild(aMobile);
    divLogoMobile.appendChild(labelMobile);
    divLogoMobile.appendChild(h5Mobile);

    divBarBlock.appendChild(spanMainNav);
    divBarBlock.appendChild(btnDashboard);
    divBarBlock.appendChild(btnIcons);
    divBarBlock.appendChild(btnForms);
    divBarBlock.appendChild(btnTables);
    divBarBlock.appendChild(btnProfile);
    divBarBlock.appendChild(btnLogin);
    divBarBlock.appendChild(btnRegister);
    divBarBlock.appendChild(spanLabels);
    divBarBlock.appendChild(btnImportant);
    divBarBlock.appendChild(btnWarning);
    divBarBlock.appendChild(btnInformation);

    sidebar.appendChild(divLogoMobile);
    sidebar.appendChild(divBarBlock);

    return sidebar;
}

function createFooter()
{
    let footer = document.createElement('footer');
    let span = document.createElement('span');
    let a = document.createElement('a');
    let textPowered = document.createTextNode('Powered with ♥ by ');
    let textW3mix = document.createTextNode('W3Mix.com');

    //clases
    footer.classList.add('w3-padding', 'w3-border-top', 'w3-center', 'w3-white', 'w3-margin-top');
    span.classList.add('w3-opacity');
    a.href = 'https://w3mix.com';
    a.target = '_blank';

    // estructura
    a.appendChild(textW3mix);
    span.appendChild(textPowered);
    span.appendChild(a);
    footer.appendChild(span);

    return footer;
}

function createContent()
{
    let main = document.createElement('div');

    //clase estilo
    main.classList.add('w3-main')
    main.style.marginTop = '54px'

    return main;    
}

class WCApplicationView extends HTMLElement
{
    constructor()
    {
        super();

        this.navbar = createNavbar();
        this.sidebar = createSidebar();
        this.content =  createContent();
        this.footer =  createFooter();

        this.appendChild(this.navbar);
        this.appendChild(this.sidebar);
        this.appendChild(this.content);

        this.content.appendChild(this.footer);

        this._onSearchIconClick = this.onSearchIconClick.bind(this);

    }

    onSearchIconClick()
    {
        this.navbar.querySelector('input[type="text"]').focus();
    }

    connectedCallback()
    {
        this.navbar.querySelector('.w3-display-right').addEventListener('click', this._onSearchIconClick);
    }

    disconnectedCallback()
    {
        this.navbar.querySelector('.w3-display-right').removeEventListener('click', this._onSearchIconClick);
    }

}

customElements.define('x-application-view', WCApplicationView);

function main()
    {
        let appView = new WCApplicationView();
        document.body.appendChild(appView);
    }

window.onload = main;