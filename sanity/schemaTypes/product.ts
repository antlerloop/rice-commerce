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
      name: "isFeatured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "polishLevel",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Low", value: "low" },
          { title: "Medium", value: "medium" },
          { title: "High", value: "high" },
        ],
      },
      initialValue: "high",
    }),
  ],
});
