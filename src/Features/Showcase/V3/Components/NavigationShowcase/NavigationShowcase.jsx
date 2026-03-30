import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-v3/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ui-v3/accordion"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@ui-v3/breadcrumb"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@ui-v3/pagination"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@ui-v3/navigation-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ui-v3/command"

export function NavigationShowcase() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Navigation</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tabs, accordion, breadcrumbs, pagination, navigation menus, and command palettes.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Tabs</h3>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="pt-4">
            <p className="text-sm text-muted-foreground">Account settings and preferences.</p>
          </TabsContent>
          <TabsContent value="tab2" className="pt-4">
            <p className="text-sm text-muted-foreground">Password and security options.</p>
          </TabsContent>
          <TabsContent value="tab3" className="pt-4">
            <p className="text-sm text-muted-foreground">Application settings.</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Accordion</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is M3 theming?</AccordionTrigger>
            <AccordionContent>
              Material Design 3 (M3) theming provides a systematic color and shape system for UI design.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do CSS custom properties work?</AccordionTrigger>
            <AccordionContent>
              CSS custom properties (variables) allow you to define reusable values that cascade through the document.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why use shadcn/ui?</AccordionTrigger>
            <AccordionContent>
              shadcn/ui provides accessible, customizable components that you own and can modify freely.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Breadcrumb</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/showcase">Showcase</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>V1 Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Pagination</h3>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Command Palette</h3>
        <Command className="rounded-[var(--radius-large)] border border-outline shadow-none">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </section>
  )
}
