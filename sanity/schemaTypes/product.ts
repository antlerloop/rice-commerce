import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brand",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "quantityType",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Litres", value: "litres" },
          { title: "Millilitres", value: "millilitres" },
          { title: "Kilograms", value: "kilograms" },
          { title: "Grams", value: "grams" },
          { title: "Numbers", value: "numbers" },
          { title: "Dozens", value: "dozens" },
        ],
      },
    }),

    defineField({
      name: "quantityUnit",
      type: "number",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "discount",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "discountType",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Amount", value: "amount" },
          { title: "Percentage", value: "percentage" },
        ],
      },
      initialValue: "amount",
    }),

    defineField({
      name: "category",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Laundry", value: "laundry" },
          { title: "Spices", value: "spices" },
          { title: "Cleaning", value: "cleaning" },
          { title: "Dairy", value: "dairy" },
        ],
      },
    }),
  ],
});
