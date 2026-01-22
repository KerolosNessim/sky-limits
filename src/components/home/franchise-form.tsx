"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/** ✅ Zod Schema */
const formSchema = z.object({
  brandName: z
    .string()
    .min(2, "Brand’s Name لازم يكون حرفين على الأقل")
    .max(80, "Brand’s Name طويل زيادة"),
  email: z.string().email("اكتبي Email صحيح"),
  phone: z
    .string()
    .min(7, "رقم التليفون قصير")
    .max(20, "رقم التليفون طويل")
    .regex(/^[0-9+\s-]+$/, "اكتبي رقم صحيح (ممكن + ومسافات و -)"),
  subject: z
    .string()
    .max(120, "Subject طويل زيادة")
    .optional()
    .or(z.literal("")),
  industry: z.string().min(1, "اختاري Industry"),
  message: z
    .string()
    .min(10, "اكتب/ي تفاصيل أكتر (10 حروف على الأقل)")
    .max(1000, "الرسالة طويلة زيادة"),
});

type FormValues = z.infer<typeof formSchema>;

const INDUSTRIES = [
  { value: "suggestion", label: "Suggestion" },
  { value: "food_beverage", label: "Food & Beverage" },
  { value: "retail", label: "Retail" },
  { value: "beauty", label: "Beauty" },
  { value: "education", label: "Education" },
  { value: "services", label: "Services" },
];

export function BecomeFranchiseForm() {
  const inputClassName =
    "h-11 bg-input-bg focus-visible:ring-primary/50 border-0";
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: "",
      email: "",
      phone: "",
      subject: "",
      industry: "suggestion",
      message: "",
    },
    mode: "onTouched",
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: FormValues) {
    form.reset({
      brandName: "",
      email: "",
      phone: "",
      subject: "",
      industry: values.industry,
      message: "",
    });
  }

  return (
      <div>
        {/* Title */}
        <h2 className="text-h4 ">Become a Franchise</h2>

        {/* Description */}
        <p className="mt-3  text-body-md ">
          Service description example To buy a plot to build your house, this
          requires documenting the sale and purchase process in the notarial
          offices or notary services to register the property in your name.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >
            {/* ✅ نفس Layout الصورة (عمودين) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Brand’s Name (required) - على عرض الصف كله */}
              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>
                      <span className="text-destructive">*</span> Brand’s Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your first name"
                        {...field}
                        className={inputClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email (required) */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-destructive">*</span> Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your first name"
                        {...field}
                        className={inputClassName}
                        inputMode="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone (required) - Input عادي */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-destructive">*</span> Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="00 000 0000"
                        {...field}
                        className={inputClassName}
                        inputMode="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your subject"
                        {...field}
                        className={inputClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Industry (Select) */}
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className={`w-full ${inputClassName}`}>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDUSTRIES.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message - على عرض الصف كله */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Can We Help?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Placeholder text"
                      {...field}
                      className={`min-h-[160px] resize-y bg-input-bg ${inputClassName}`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 px-8"
              >
                {isSubmitting ? "Submitting..." : "Request permit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
  );
}
