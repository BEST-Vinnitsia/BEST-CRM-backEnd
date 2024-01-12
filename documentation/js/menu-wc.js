'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-name documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' :
                                            'id="xs-controllers-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' :
                                        'id="xs-injectables-links-module-AppModule-4d7b0948ad10023f9ea9dda5ebe596e09791ad632feaa03c6cd77d6c0f30d67edf8a1a83fa18323847045cd410ec81fc087a63654e19427306f2c4c4a4160ad5"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardModule.html" data-type="entity-link" >BoardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' : 'data-bs-target="#xs-controllers-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' :
                                            'id="xs-controllers-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' }>
                                            <li class="link">
                                                <a href="controllers/BoardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' : 'data-bs-target="#xs-injectables-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' :
                                        'id="xs-injectables-links-module-BoardModule-a5f7d8165c787b049cc8e80f30ca078681c9e893e621499350b86a50b324d90bd606ca7770e87e85384046c7c56209a9e84ed44b904f2220d471438f0fb48951"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BoardDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BoardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardToMemberModule.html" data-type="entity-link" >BoardToMemberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' : 'data-bs-target="#xs-controllers-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' :
                                            'id="xs-controllers-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' }>
                                            <li class="link">
                                                <a href="controllers/BoardToMemberController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardToMemberController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' : 'data-bs-target="#xs-injectables-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' :
                                        'id="xs-injectables-links-module-BoardToMemberModule-ffe9b8455b9a960150499dc08c9712b29dab3e56f88ce3fa83f92fc171236ed7a6dbbbf6e62152f662992b1bb25b9f0047806ca192d07a40925ec6daa4001776"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BoardToMemberDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardToMemberDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BoardToMemberService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardToMemberService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CadenceModule.html" data-type="entity-link" >CadenceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' : 'data-bs-target="#xs-controllers-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' :
                                            'id="xs-controllers-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' }>
                                            <li class="link">
                                                <a href="controllers/CadenceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadenceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' : 'data-bs-target="#xs-injectables-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' :
                                        'id="xs-injectables-links-module-CadenceModule-6bea129c5d56429678fecbe12c7d302b725a4c7d4dc3756287420e63b5837d4bc6cf3c001642509d98a6703c08c238a770a9f22e332ba3796945b2a9ff92c8ca"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CadenceDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadenceDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CadenceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadenceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoordinatorModule.html" data-type="entity-link" >CoordinatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' : 'data-bs-target="#xs-controllers-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' :
                                            'id="xs-controllers-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' }>
                                            <li class="link">
                                                <a href="controllers/CoordinatorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' : 'data-bs-target="#xs-injectables-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' :
                                        'id="xs-injectables-links-module-CoordinatorModule-7b5f25cca4d02914f6cc2751672647d61066e775091473146cb6dca25d3e3a80c38ce4b7ba1bdb2be538bf54dd160cb8ea70421dd78ebca31cf98c268cd889ed"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoordinatorDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoordinatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoordinatorToMemberModule.html" data-type="entity-link" >CoordinatorToMemberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' : 'data-bs-target="#xs-controllers-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' :
                                            'id="xs-controllers-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' }>
                                            <li class="link">
                                                <a href="controllers/CoordinatorToMemberController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorToMemberController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' : 'data-bs-target="#xs-injectables-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' :
                                        'id="xs-injectables-links-module-CoordinatorToMemberModule-3a40994d28eb18bd30f8a53e9164b671cd946cd2736b901cca7de79af6accec56ea39657cf8c7bd6a34c93d5aa85079ce74fcde7e33e92be96bf07dd9bf8ce65"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoordinatorToMemberDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorToMemberDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoordinatorToMemberService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoordinatorToMemberService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-163d18351b03723f7d4a6cb579db6d1be89e3c0ea26cc85d2d8158216ae6118430868bf9264443011f006f5f9df2bc4db5f14231fe8f9adef8e4f9dbf4ec7798"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-163d18351b03723f7d4a6cb579db6d1be89e3c0ea26cc85d2d8158216ae6118430868bf9264443011f006f5f9df2bc4db5f14231fe8f9adef8e4f9dbf4ec7798"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-163d18351b03723f7d4a6cb579db6d1be89e3c0ea26cc85d2d8158216ae6118430868bf9264443011f006f5f9df2bc4db5f14231fe8f9adef8e4f9dbf4ec7798"' :
                                        'id="xs-injectables-links-module-DatabaseModule-163d18351b03723f7d4a6cb579db6d1be89e3c0ea26cc85d2d8158216ae6118430868bf9264443011f006f5f9df2bc4db5f14231fe8f9adef8e4f9dbf4ec7798"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeetingModule.html" data-type="entity-link" >MeetingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' : 'data-bs-target="#xs-controllers-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' :
                                            'id="xs-controllers-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' }>
                                            <li class="link">
                                                <a href="controllers/MeetingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeetingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' : 'data-bs-target="#xs-injectables-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' :
                                        'id="xs-injectables-links-module-MeetingModule-bc4630a914f746c2614931bcbba3977e3c6d4c33fb0030f1730a822563cd450c6441d61a6d3cfba0bfdd42af95d6804bc6b8411dddc2a73cc564c78014a6ae6f"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MeetingDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeetingDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MeetingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeetingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MemberModule.html" data-type="entity-link" >MemberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' : 'data-bs-target="#xs-controllers-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' :
                                            'id="xs-controllers-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' }>
                                            <li class="link">
                                                <a href="controllers/MemberController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' : 'data-bs-target="#xs-injectables-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' :
                                        'id="xs-injectables-links-module-MemberModule-d87f8f22141976fba37e0ed79e41c9814694d5a45f9fceab0b8322fd1476b45251fa1c43ea89bdb5f815cc9b446da77e284a31bfc981d62f2e28f201b634accc"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MemberDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MemberService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MembershipModule.html" data-type="entity-link" >MembershipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' : 'data-bs-target="#xs-controllers-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' :
                                            'id="xs-controllers-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' }>
                                            <li class="link">
                                                <a href="controllers/MembershipController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MembershipController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' : 'data-bs-target="#xs-injectables-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' :
                                        'id="xs-injectables-links-module-MembershipModule-b84840f350c4de46ee20205abd2b02b3c8ce64b8af2f7ad102c3f86998aa4bced562006366884d1563008e309e98827baf29365e8dd6184fa8841a7e72e0e46d"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MembershipDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MembershipDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MembershipService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MembershipService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslationModule.html" data-type="entity-link" >TranslationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' : 'data-bs-target="#xs-controllers-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' :
                                            'id="xs-controllers-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' }>
                                            <li class="link">
                                                <a href="controllers/TranslationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' : 'data-bs-target="#xs-injectables-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' :
                                        'id="xs-injectables-links-module-TranslationModule-7d901efc748d7c9ae8fdeeb6b26d5d6e909e035e3215cad1e7a0eff3ad230f5dd0ee1b8d319de80cc5f613240c6f618be9dd140103a48257f4d173cda04165d8"' }>
                                        <li class="link">
                                            <a href="injectables/AppDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslationDbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationDbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BoardController.html" data-type="entity-link" >BoardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BoardToMemberController.html" data-type="entity-link" >BoardToMemberController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CadenceController.html" data-type="entity-link" >CadenceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoordinatorController.html" data-type="entity-link" >CoordinatorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoordinatorToMemberController.html" data-type="entity-link" >CoordinatorToMemberController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MeetingController.html" data-type="entity-link" >MeetingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MemberController.html" data-type="entity-link" >MemberController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MembershipController.html" data-type="entity-link" >MembershipController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TranslationController.html" data-type="entity-link" >TranslationController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BoardCreateDto.html" data-type="entity-link" >BoardCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardDeleteDto.html" data-type="entity-link" >BoardDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardGetByIdDto.html" data-type="entity-link" >BoardGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardToMemberCreateDto.html" data-type="entity-link" >BoardToMemberCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardToMemberDeleteDto.html" data-type="entity-link" >BoardToMemberDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardToMemberGetByIdDto.html" data-type="entity-link" >BoardToMemberGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardToMemberUpdateDto.html" data-type="entity-link" >BoardToMemberUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateDto.html" data-type="entity-link" >BoardUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadenceCreateDto.html" data-type="entity-link" >CadenceCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadenceDeleteDto.html" data-type="entity-link" >CadenceDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadenceGetByIdDto.html" data-type="entity-link" >CadenceGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadenceUpdateDto.html" data-type="entity-link" >CadenceUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorCreateDto.html" data-type="entity-link" >CoordinatorCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorDeleteDto.html" data-type="entity-link" >CoordinatorDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorGetByIdDto.html" data-type="entity-link" >CoordinatorGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorToMemberCreateDto.html" data-type="entity-link" >CoordinatorToMemberCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorToMemberDeleteDto.html" data-type="entity-link" >CoordinatorToMemberDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorToMemberGetByIdDto.html" data-type="entity-link" >CoordinatorToMemberGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorToMemberUpdateDto.html" data-type="entity-link" >CoordinatorToMemberUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinatorUpdateDto.html" data-type="entity-link" >CoordinatorUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingCreateDto.html" data-type="entity-link" >MeetingCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingDeleteDto.html" data-type="entity-link" >MeetingDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingGetByIdDto.html" data-type="entity-link" >MeetingGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingUpdateDto.html" data-type="entity-link" >MeetingUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberCreateDto.html" data-type="entity-link" >MemberCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberDeleteArrayByIdDto.html" data-type="entity-link" >MemberDeleteArrayByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberDeleteByIdDto.html" data-type="entity-link" >MemberDeleteByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberGetByIdDto.html" data-type="entity-link" >MemberGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MembershipCreateDto.html" data-type="entity-link" >MembershipCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MembershipDeleteDto.html" data-type="entity-link" >MembershipDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MembershipGetByIdDto.html" data-type="entity-link" >MembershipGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MembershipUpdateDto.html" data-type="entity-link" >MembershipUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberUpdateDto.html" data-type="entity-link" >MemberUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationCreateDto.html" data-type="entity-link" >TranslationCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationDeleteDto.html" data-type="entity-link" >TranslationDeleteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationGetByIdDto.html" data-type="entity-link" >TranslationGetByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationUpdateDto.html" data-type="entity-link" >TranslationUpdateDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppDbService.html" data-type="entity-link" >AppDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoardDbService.html" data-type="entity-link" >BoardDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoardService.html" data-type="entity-link" >BoardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoardToMemberDbService.html" data-type="entity-link" >BoardToMemberDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoardToMemberService.html" data-type="entity-link" >BoardToMemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CadenceDbService.html" data-type="entity-link" >CadenceDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CadenceService.html" data-type="entity-link" >CadenceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoordinatorDbService.html" data-type="entity-link" >CoordinatorDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoordinatorService.html" data-type="entity-link" >CoordinatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoordinatorToMemberDbService.html" data-type="entity-link" >CoordinatorToMemberDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoordinatorToMemberService.html" data-type="entity-link" >CoordinatorToMemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeetingDbService.html" data-type="entity-link" >MeetingDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeetingService.html" data-type="entity-link" >MeetingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemberDbService.html" data-type="entity-link" >MemberDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemberService.html" data-type="entity-link" >MemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MembershipDbService.html" data-type="entity-link" >MembershipDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MembershipService.html" data-type="entity-link" >MembershipService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationDbService.html" data-type="entity-link" >TranslationDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationService.html" data-type="entity-link" >TranslationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBoard.html" data-type="entity-link" >IBoard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_check_name.html" data-type="entity-link" >IBoard_check_name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_check_name_RES.html" data-type="entity-link" >IBoard_check_name_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_create.html" data-type="entity-link" >IBoard_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_create_RES.html" data-type="entity-link" >IBoard_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_delete.html" data-type="entity-link" >IBoard_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_delete_RES.html" data-type="entity-link" >IBoard_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_get_id.html" data-type="entity-link" >IBoard_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_get_id_RES.html" data-type="entity-link" >IBoard_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_get_list_RES.html" data-type="entity-link" >IBoard_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_update.html" data-type="entity-link" >IBoard_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoard_update_RES.html" data-type="entity-link" >IBoard_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember.html" data-type="entity-link" >IBoardToMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_create.html" data-type="entity-link" >IBoardToMember_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_create_RES.html" data-type="entity-link" >IBoardToMember_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_delete.html" data-type="entity-link" >IBoardToMember_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_delete_RES.html" data-type="entity-link" >IBoardToMember_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_get_id.html" data-type="entity-link" >IBoardToMember_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_get_id_RES.html" data-type="entity-link" >IBoardToMember_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_get_list_RES.html" data-type="entity-link" >IBoardToMember_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_update.html" data-type="entity-link" >IBoardToMember_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoardToMember_update_RES.html" data-type="entity-link" >IBoardToMember_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence.html" data-type="entity-link" >ICadence</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_check_number.html" data-type="entity-link" >ICadence_check_number</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_check_number_RES.html" data-type="entity-link" >ICadence_check_number_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_create.html" data-type="entity-link" >ICadence_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_create_RES.html" data-type="entity-link" >ICadence_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_delete.html" data-type="entity-link" >ICadence_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_delete_RES.html" data-type="entity-link" >ICadence_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_get_id.html" data-type="entity-link" >ICadence_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_get_id_RES.html" data-type="entity-link" >ICadence_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_get_list_RES.html" data-type="entity-link" >ICadence_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_update.html" data-type="entity-link" >ICadence_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICadence_update_RES.html" data-type="entity-link" >ICadence_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator.html" data-type="entity-link" >ICoordinator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_check_name.html" data-type="entity-link" >ICoordinator_check_name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_check_name_RES.html" data-type="entity-link" >ICoordinator_check_name_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_create.html" data-type="entity-link" >ICoordinator_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_create_RES.html" data-type="entity-link" >ICoordinator_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_delete.html" data-type="entity-link" >ICoordinator_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_delete_RES.html" data-type="entity-link" >ICoordinator_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_get_id.html" data-type="entity-link" >ICoordinator_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_get_id_RES.html" data-type="entity-link" >ICoordinator_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_get_list_RES.html" data-type="entity-link" >ICoordinator_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_update.html" data-type="entity-link" >ICoordinator_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinator_update_RES.html" data-type="entity-link" >ICoordinator_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember.html" data-type="entity-link" >ICoordinatorToMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_create.html" data-type="entity-link" >ICoordinatorToMember_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_create_RES.html" data-type="entity-link" >ICoordinatorToMember_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_delete.html" data-type="entity-link" >ICoordinatorToMember_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_delete_RES.html" data-type="entity-link" >ICoordinatorToMember_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_get_id.html" data-type="entity-link" >ICoordinatorToMember_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_get_id_RES.html" data-type="entity-link" >ICoordinatorToMember_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_get_list_RES.html" data-type="entity-link" >ICoordinatorToMember_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_update.html" data-type="entity-link" >ICoordinatorToMember_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinatorToMember_update_RES.html" data-type="entity-link" >ICoordinatorToMember_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail.html" data-type="entity-link" >IEmail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_create.html" data-type="entity-link" >IEmail_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_create_RES.html" data-type="entity-link" >IEmail_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_get_id.html" data-type="entity-link" >IEmail_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_get_id_RES.html" data-type="entity-link" >IEmail_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_get_list.html" data-type="entity-link" >IEmail_get_list</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_get_list_RES.html" data-type="entity-link" >IEmail_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_update.html" data-type="entity-link" >IEmail_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_update-1.html" data-type="entity-link" >IEmail_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_update_RES.html" data-type="entity-link" >IEmail_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmail_update_RES-1.html" data-type="entity-link" >IEmail_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting.html" data-type="entity-link" >IMeeting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_create.html" data-type="entity-link" >IMeeting_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_create_RES.html" data-type="entity-link" >IMeeting_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_delete.html" data-type="entity-link" >IMeeting_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_delete_RES.html" data-type="entity-link" >IMeeting_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_get_id.html" data-type="entity-link" >IMeeting_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_get_id_RES.html" data-type="entity-link" >IMeeting_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_get_list_RES.html" data-type="entity-link" >IMeeting_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_update.html" data-type="entity-link" >IMeeting_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeeting_update_RES.html" data-type="entity-link" >IMeeting_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember.html" data-type="entity-link" >IMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_check_email.html" data-type="entity-link" >IMember_check_email</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_check_email_RES.html" data-type="entity-link" >IMember_check_email_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_check_id.html" data-type="entity-link" >IMember_check_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_check_id_RES.html" data-type="entity-link" >IMember_check_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_create.html" data-type="entity-link" >IMember_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_create_RES.html" data-type="entity-link" >IMember_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_delete_array.html" data-type="entity-link" >IMember_delete_array</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_delete_array_RES.html" data-type="entity-link" >IMember_delete_array_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_delete_id.html" data-type="entity-link" >IMember_delete_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_delete_id_RES.html" data-type="entity-link" >IMember_delete_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_get_id.html" data-type="entity-link" >IMember_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_get_id_RES.html" data-type="entity-link" >IMember_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_get_list_RES.html" data-type="entity-link" >IMember_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_update.html" data-type="entity-link" >IMember_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember_update_RES.html" data-type="entity-link" >IMember_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership.html" data-type="entity-link" >IMembership</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_check_name.html" data-type="entity-link" >IMembership_check_name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_check_name_RES.html" data-type="entity-link" >IMembership_check_name_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_create.html" data-type="entity-link" >IMembership_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_create_RES.html" data-type="entity-link" >IMembership_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_delete.html" data-type="entity-link" >IMembership_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_delete_RES.html" data-type="entity-link" >IMembership_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_get_id.html" data-type="entity-link" >IMembership_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_get_id_RES.html" data-type="entity-link" >IMembership_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_get_list_RES.html" data-type="entity-link" >IMembership_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_update.html" data-type="entity-link" >IMembership_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMembership_update_RES.html" data-type="entity-link" >IMembership_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone.html" data-type="entity-link" >IPhone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_create.html" data-type="entity-link" >IPhone_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_create_RES.html" data-type="entity-link" >IPhone_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_get_id.html" data-type="entity-link" >IPhone_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_get_id_RES.html" data-type="entity-link" >IPhone_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_get_list.html" data-type="entity-link" >IPhone_get_list</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_get_list_RES.html" data-type="entity-link" >IPhone_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_update.html" data-type="entity-link" >IPhone_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_update-1.html" data-type="entity-link" >IPhone_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_update_RES.html" data-type="entity-link" >IPhone_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhone_update_RES-1.html" data-type="entity-link" >IPhone_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IServerInfo.html" data-type="entity-link" >IServerInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork.html" data-type="entity-link" >ISocialNetwork</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_create.html" data-type="entity-link" >ISocialNetwork_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_create_RES.html" data-type="entity-link" >ISocialNetwork_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_get_id.html" data-type="entity-link" >ISocialNetwork_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_get_id_RES.html" data-type="entity-link" >ISocialNetwork_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_get_list.html" data-type="entity-link" >ISocialNetwork_get_list</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_get_list_RES.html" data-type="entity-link" >ISocialNetwork_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_update.html" data-type="entity-link" >ISocialNetwork_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_update-1.html" data-type="entity-link" >ISocialNetwork_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_update_RES.html" data-type="entity-link" >ISocialNetwork_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISocialNetwork_update_RES-1.html" data-type="entity-link" >ISocialNetwork_update_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation.html" data-type="entity-link" >ITranslation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_create.html" data-type="entity-link" >ITranslation_create</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_create_RES.html" data-type="entity-link" >ITranslation_create_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_delete.html" data-type="entity-link" >ITranslation_delete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_delete_RES.html" data-type="entity-link" >ITranslation_delete_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_get_id.html" data-type="entity-link" >ITranslation_get_id</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_get_id_RES.html" data-type="entity-link" >ITranslation_get_id_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_get_list_RES.html" data-type="entity-link" >ITranslation_get_list_RES</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_update.html" data-type="entity-link" >ITranslation_update</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslation_update_RES.html" data-type="entity-link" >ITranslation_update_RES</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});