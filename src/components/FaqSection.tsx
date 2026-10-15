import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="section-y bg-background" aria-labelledby="faq-heading">
      <div className="container-x max-w-3xl">
        <Reveal>
          <span className="eyebrow">
            <span className="h-[1px] w-10 bg-primary" /> Questions
          </span>
          <h2 id="faq-heading" className="mt-5 text-4xl md:text-5xl leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Straight answers for mine operators, explorers and procurement teams evaluating drilling,
            exploration and underground support in Tanzania.
          </p>
        </Reveal>
        <Accordion type="single" collapsible className="mt-10 border-t border-border">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-display font-bold hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
