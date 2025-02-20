import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";

import IconStar from "~/components/icons/IconStar";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", items = [], classes = {}, isDark = false } = props;

  return (
    <section class="relative bg-primary-25 scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default ",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <ItemGrid
          items={items}
          defaultIcon={IconStar}
          classes={{
            panel: "group max-w-none p-5 bg-white hover:bg-primary-50 shadow-md rounded-md border-2 border-primary-100 dark:border-gray-700",
            ...(classes?.items ?? {}),
            container: "md:grid-cols-3",
            title: "md:text-[1.3rem]",
            icon: "motion-loop-once group-hover:scale-110 group-hover:motion-preset-spin group-hover:bg-primary-400 transition-transform duration-300 text-white  bg-primary-500  dark:bg-primary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </div>
    </section>

     
  );
});
