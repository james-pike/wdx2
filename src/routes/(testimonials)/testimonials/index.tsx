import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQs from "~/components/widgets/FAQs";
import GoogleReviews from "~/components/widgets/GoogleReviews";
import ReviewPage from "~/components/widgets/ReviewPage";
import Reviews from "~/components/widgets/Reviews";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<ReviewPage title="Frequently Asked Questions"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="FAQs"
        items={[
     
    
        ]}/>

    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
