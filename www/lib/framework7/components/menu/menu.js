(function framework7ComponentLoader(e,n){void 0===n&&(n=!0);var o=e.$,t=e.utils,s=(e.getDevice,e.getSupport,e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,t.bindMethods),d={open:function(e){void 0===e&&(e=".menu-item-dropdown");if(e){var n=o(e).closest(".menu-item-dropdown");if(n.length){var t=n.closest(".menu").eq(0);if(t.length){var s=t.css("z-index"),d=t[0].style.zIndex;t.css("z-index",parseInt(s||0,10)+1),t[0].f7MenuZIndex=d}n.eq(0).addClass("menu-item-dropdown-opened").trigger("menu:opened"),this.emit("menuOpened",n.eq(0)[0])}}},close:function(e){void 0===e&&(e=".menu-item-dropdown-opened");if(e){var n=o(e).closest(".menu-item-dropdown-opened");if(n.length){var t=n.closest(".menu").eq(0);if(t.length){var s=t[0].f7MenuZIndex;t.css("z-index",s),delete t[0].f7MenuZIndex}n.eq(0).removeClass("menu-item-dropdown-opened").trigger("menu:closed"),this.emit("menuClosed",n.eq(0)[0])}}}},i={name:"menu",create:function(){s(this,{menu:d})},on:{click:function(e){var n=this,t=o(".menu-item-dropdown-opened");t.length&&t.each((function(t){o(e.target).closest(".menu-item-dropdown-opened").length||n.menu.close(t)}))}},clicks:{".menu-item-dropdown":function(e,n,t){if(e.hasClass("menu-item-dropdown-opened")){if(o(t.target).closest(".menu-dropdown").length)return;this.menu.close(e)}else this.menu.open(e)},".menu-close":function(){this.menu.close()}}};if(n){if(e.prototype.modules&&e.prototype.modules[i.name])return;e.use(i),e.instance&&(e.instance.useModuleParams(i,e.instance.params),e.instance.useModule(i))}return i}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
