import templates from "@/data/templates.json";
import TemplateCard from "./TemplateCard";

export default function TemplateGrid({flag}: {flag: boolean}) {
  return (
    <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 items-center justify-center">
      {flag ? templates.slice(0,4).map((t, i) => (
        <TemplateCard
          key={t.id}
          slug={t.slug}
          name={t.name}
          category={t.category}
          tagline={t.tagline}
          price={t.price}
          deliveryDays={t.deliveryDays}
          index={i}
          images={t.images} 
        />
      )):templates.map((t, i) => (
        <TemplateCard
          key={t.id}
          slug={t.slug}
          name={t.name}
          category={t.category}
          tagline={t.tagline}
          price={t.price}
          deliveryDays={t.deliveryDays}
          index={i}
          images={t.images} 
        />
      ))}
    </div>
  );
}
