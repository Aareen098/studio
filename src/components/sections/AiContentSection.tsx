
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { getAiSuggestions } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wand2, Sparkles } from "lucide-react";

const formSchema = z.object({
  skills: z
    .string()
    .min(5, { message: "Please describe your skills in more detail." }),
  projectDescriptions: z
    .string()
    .min(10, { message: "Please provide more detailed project descriptions." }),
});

export function AiContentSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: "React, TypeScript, Node.js, Leadership",
      projectDescriptions:
        "Developed a CRM from scratch.\nBuilt a social media dashboard.",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError(null);
    setSuggestions([]);
    startTransition(async () => {
      const result = await getAiSuggestions(values);
      if (result.success && result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        setError(result.error || "An unknown error occurred.");
      }
    });
  };

  return (
    <section id="ai-tools" ref={ref} className={cn("py-16 sm:py-24", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI Content Assistant
          </h2>
          <p className="mt-4 text-lg text-primary">
            Align your projects with your skills.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            This AI-powered tool ensures every skill you claim is backed by a tangible project experience, strengthening your portfolio's credibility.
          </p>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Generate Project Suggestions</CardTitle>
            <CardDescription>
              Enter your skills and existing project descriptions below. The AI will suggest content to better connect them.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills & Experiences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., React, TypeScript, Project Management"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectDescriptions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Project Descriptions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Developed a full-stack e-commerce site."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Generating..." : "Suggest Content"}
                  <Wand2 className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>

            {(isPending || suggestions.length > 0 || error) && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  AI Suggestions
                </h3>
                {isPending && <p className="text-muted-foreground mt-2">The AI is thinking...</p>}
                {error && <p className="text-destructive mt-2">{error}</p>}
                {suggestions.length > 0 && (
                  <ul className="mt-4 space-y-3 list-disc list-inside text-muted-foreground">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
