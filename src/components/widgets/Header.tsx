import { component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import IconTwitter from "../icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";
import { Logo } from "../common/Logo";
import IconOrder from "../icons/IconOrder";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
    isMenuExpanded: false,
  });

  const { menu } = useContent();

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 bg-white max-w-7xl dark:bg-gray-900 flex-none mx-auto w-full border-b border-gray-200 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? "md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-primary-50 dark:bg-slate-900"
          : ""
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0 pointer-events-none"></div>
      <div class="w-full h-6 bg-primary-400 px-4 md:px-7 mx-auto text-white flex justify-between items-center max-w-7xl">
  <div>
    <p>Today's Specials: Freshly brewed, just for you!</p>
  </div>
  <div id="test" class="flex gap-4 sm:flex hidden sm:block">
    <a
      class="text-gray-50 px-3 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm inline-flex items-center"
      href="tel:+16132188063"
    >
      <IconTelegram />
      <p class="pl-1">(613) 218-8063</p>
    </a>
    <p class="text-gray-50">|</p>
    <a
      class="text-gray-50 px-3 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm inline-flex items-center"
      href="mailto:info@webdev.ca"
    >
      <IconTwitter />
      <p class="pl-1">info@webdev.ca</p>
    </a>
  </div>
</div>

      <div class="relative text-default py-2.5 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
            <Logo />
          </a>
          <div class="flex items-center md:hidden">
            <a
              class="text-gray-500 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              aria-label={"Telegram"}
              title={"Telegram"}
              href="tel:+6132188063"
            >
              <IconTelegram />
            </a>
            <a
              class="text-gray-500 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              aria-label={"Order"}
              title={"Order"}
              href="https://www.ubereats.com/ca/store/safi-fine-food/t1GquykYXD-4ZUT5tbSbrQ?srsltid=AfmBOorLqOjIs8pz1RRLuvd1EasP5ZUhIoN3RTgYmWhPDRmpzfTa5CG3"
            >
              <IconOrder />
            </a>
            <ToggleMenu 
              isExpanded={store.isMenuExpanded} 
              onToggle$={() => (store.isMenuExpanded = !store.isMenuExpanded)} 
            />
          </div>
        </div>
        <nav
          class={`
            items-center w-full md:w-auto 
            text-default 
            overflow-y-auto overflow-x-hidden 
            md:overflow-y-visible md:overflow-x-auto 
            md:mx-5 
            absolute md:static 
            left-0 
            top-full 
            bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-gray-900 
            md:bg-transparent dark:md:bg-transparent 
            shadow-xl md:shadow-none 
            border-b border-primary-200 dark:border-primary-800 
            transition-all duration-300 ease-in-out 
            z-40 
            ${store.isMenuExpanded 
              ? "max-h-screen opacity-100 translate-y-0" 
              : "max-h-0 opacity-0 -translate-y-4 md:max-h-none md:opacity-100 md:translate-y-0 md:flex"
            }
          `}
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul
              class="
                flex flex-col md:flex-row 
                md:self-center w-full md:w-auto 
                text-xl md:text-[0.9375rem] 
                tracking-[0.01rem] font-medium 
                py-1 px-4 md:p-0
              "
            >
              {menu.items.map(({ text, href, items }, key) => (
                <li
                  key={key}
                  class={`
                    ${items?.length ? "dropdown" : ""} 
                    border-b border-primary-100 dark:border-primary-800 
                    last:border-b-0 md:border-0
                  `}
                >
                  {items?.length ? (
                    <>
                      <button
                        class="
                          flex items-center justify-between w-full md:w-auto 
                          text-primary-700 dark:text-primary-200 
                          hover:text-primary-500 dark:hover:text-primary-400 
                          px-4 py-3 md:py-3 md:px-4 
                          transition-colors duration-200
                        "
                      >
                        {text}
                        <IconChevronDown
                          class="
                            w-6 h-6 md:w-3.5 md:h-3.5 
                            text-primary-500 dark:text-primary-300 
                            ml-0.5 rtl:ml-0 rtl:mr-0.5 
                            hidden md:inline 
                            md:hover:rotate-180 
                            transition-transform duration-200
                          "
                        />
                      </button>
                      <ul
                        class="
                          md:backdrop-blur-md 
                          dark:md:bg-slate-800 
                          rounded md:absolute 
                          pl-4 md:pl-0 
                          md:hidden font-medium 
                          bg-white/90 dark:bg-gray-800/90 
                          md:bg-white/90 
                          md:min-w-[200px] 
                          drop-shadow-xl 
                          py-2 md:py-2
                        "
                      >
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              class="
                                block 
                                py-2 px-5 
                                text-primary-600 dark:text-primary-200 
                                hover:bg-primary-200 dark:hover:bg-primary-800 
                                hover:text-primary-800 dark:hover:text-primary-100 
                                first:rounded-t last:rounded-b 
                                md:hover:bg-primary-50 
                                transition-all duration-200
                              "
                              href={href2}
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      class="
                        block 
                        text-primary-700 dark:text-primary-200 
                        hover:text-primary-500 dark:hover:text-primary-400 
                        px-4 py-3 
                        md:flex md:items-centers 
                        transition-colors duration-200
                      "
                      href={href}
                    >
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
        {/* Overlay Below Header */}
        {store.isMenuExpanded && (
          <div
            class="
              fixed left-0 right-0 bottom-0 
              top-[92.8px] 
              bg-black/30 
              z-30 
              md:hidden
              transition-opacity duration-300 ease-in-out
              ${store.isMenuExpanded ? 'opacity-100' : 'opacity-0'}
            "
            onClick$={() => {
              store.isMenuExpanded = false;
            }}
          />
        )}
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">{/* <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" /> */}</div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              <a
                href="/contact"
                class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Book A Table
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});