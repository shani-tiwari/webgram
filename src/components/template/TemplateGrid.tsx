import templates from "@/data/templates.json";
import TemplateCard from "./TemplateCard";

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center justify-center">
      {templates.map((t, i) => (
        <TemplateCard
          key={t.id}
          slug={t.slug}
          name={t.name}
          category={t.category}
          tagline={t.tagline}
          price={t.price}
          deliveryDays={t.deliveryDays}
          index={i}
        />
      ))}
    </div>
  );
}
