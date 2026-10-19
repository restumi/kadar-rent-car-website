# Build a Responsive Car Rental Website — Kadar Rent Car

## 1. Project Context

You are an experienced frontend developer and UI/UX designer. Your task is to build a modern, professional, responsive car rental website for a company named **Kadar Rent Car**.

The project has already been initialized using **Next.js 16.4.2**. Work directly within the existing project structure.

**Important rules:**
- Do not create a new Next.js project.
- Inspect the existing files and dependencies before making changes.
- Preserve the existing project configuration whenever possible.
- Use the App Router and follow the conventions supported by the installed Next.js version.
- Do not downgrade Next.js or replace the current setup unnecessarily.
- Implement the actual website, not just a design proposal or static mockup.
- Ensure the application runs correctly using the existing development scripts.

## 2. Website Concept

Kadar Rent Car is a car rental service website. Its main purpose is to showcase available rental vehicles in a clean, attractive product catalog.

Customers should be able to:
- Browse the available cars.
- View car images, names, categories, and important specifications.
- Understand the available rental methods.
- Choose between self-drive rental (lepas kunci) and rental with a driver.
- Contact the company directly through WhatsApp to ask about availability, pricing, and reservations.

This is primarily a **catalog and lead-generation website**, not a full booking management system.

Do not implement a payment gateway, customer authentication, admin dashboard, or complicated booking backend unless explicitly requested.

## 3. Design Direction and Branding

Create a trustworthy, modern, elegant, and professional visual identity.

**Brand name:** Kadar Rent Car

**Primary theme:** Blue, representing trust, security, professionalism, and reliability.

Suggested color palette:
- Primary blue: `#155EEF`
- Dark navy: `#102A56`
- Light blue: `#EAF2FF`
- White: `#FFFFFF`
- Main background: `#F7F9FC`
- Primary text: `#172B4D`
- Secondary text: `#64748B`
- WhatsApp green: `#25D366`

Use these colors as a starting point and keep the overall visual system consistent.

Design characteristics:
- Clean and spacious layout.
- Professional typography.
- Strong visual hierarchy.
- Large, high-quality car photography.
- Rounded cards and buttons with subtle shadows.
- Consistent spacing and alignment.
- Smooth, subtle hover transitions.
- Modern navigation and clear calls to action.
- Trustworthy corporate appearance without looking overly formal.
- Avoid excessive gradients, unnecessary animations, and cluttered layouts.

The website should look like a real, professionally designed car rental business, not a generic template.

## 4. Main Navigation

Create a responsive navigation bar with the following menu items:

1. Home
2. Katalog Mobil
3. Profil Perusahaan
4. Syarat & Ketentuan
5. Lokasi & Kontak

Requirements:
- Display the company name or a simple text-based logo.
- Highlight the active navigation item.
- Make the navigation sticky at the top if it improves usability.
- On mobile devices, use an accessible hamburger menu.
- The mobile menu must open and close correctly.
- Every navigation item must lead to the appropriate section or page.
- Keep navigation consistent across the website.

Use Indonesian labels for all visible website navigation and content.

## 5. Home Page

Build an attractive landing page that immediately communicates the rental service and encourages visitors to browse the cars.

### Hero section
Include:
- A prominent headline, such as: "Perjalanan Nyaman Dimulai Bersama Kadar Rent Car".
- A short supporting description about convenient and reliable car rental.
- A primary CTA button: "Lihat Katalog Mobil".
- A secondary CTA button: "Hubungi Kami".
- A large car photograph or a tasteful automotive visual.
- A blue-themed background that maintains good text contrast.

The CTA buttons should work:
- "Lihat Katalog Mobil" scrolls to the catalog section or opens the catalog page.
- "Hubungi Kami" opens a WhatsApp conversation using a configurable company phone number.

### Trust and service highlights
Add a section featuring relevant service benefits, such as:
- Pilihan mobil beragam.
- Pilihan sewa fleksibel.
- Layanan dengan driver.
- Pemesanan mudah melalui WhatsApp.

Present these as concise cards with appropriate icons.

Only use claims that can reasonably be supported by the business. Do not invent awards, customer counts, testimonials, or guarantees.

### Rental method overview
Introduce the two rental methods:
- **Lepas Kunci:** Customers drive the vehicle themselves, subject to company requirements.
- **Dengan Driver:** Customers rent a vehicle with a professional driver, subject to service availability.

Use two visually distinct cards with short descriptions and clear CTA buttons.

### Featured cars
Display a selection of featured vehicles from the same data source used by the catalog.

Each car card should include:
- Car image.
- Car name.
- Vehicle category.
- Passenger capacity.
- Transmission type, when known.
- Rental method availability.
- Price information, if configured.
- A "Lihat Detail" or "Tanya via WhatsApp" button.

Do not invent actual inventory, rental prices, or vehicle specifications. Use clearly identifiable sample data that can easily be replaced with real business information.

### Closing CTA
Add a final promotional section inviting customers to contact Kadar Rent Car through WhatsApp.

## 6. Car Catalog Page or Section

Build a dedicated catalog experience with a clear heading, introductory text, and responsive vehicle grid.

### Catalog layout
- Desktop: three or four cards per row, depending on available space.
- Tablet: two cards per row.
- Mobile: one card per row or a carefully designed two-column layout only when readability remains excellent.

### Vehicle cards
Each card should contain:
- A consistently sized car image.
- Car name and category.
- Passenger capacity.
- Transmission information when available.
- Rental methods supported by that vehicle.
- Price per day if the actual price has been configured.
- A clear CTA to view details or inquire through WhatsApp.

Use `object-fit: cover` or the appropriate Next.js image settings to keep images visually consistent.

### Catalog interactions
Implement functional client-side filtering for:
- Vehicle category, such as city car, MPV, SUV, sedan, or premium.
- Rental method: lepas kunci, dengan driver, or all methods.

Add a search input that filters vehicles by name.

Provide:
- A clear-all-filters action.
- A useful empty state when no vehicles match.
- Proper mobile spacing and touch-friendly controls.

If the catalog is initially small, keep the filtering interface simple and intuitive.

## 7. Vehicle Detail Experience

When users select a vehicle, provide a useful detail view through either a dedicated route or an accessible modal.

Include:
- Larger vehicle images.
- Vehicle name and category.
- Passenger capacity and available specifications.
- Supported rental methods.
- Price information, only if configured.
- A short vehicle description.
- A WhatsApp inquiry CTA.

The WhatsApp CTA should generate a prefilled message that includes the selected vehicle name and the customer's preferred rental method when available.

For example:

"Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan Toyota Avanza dengan metode sewa lepas kunci."

Keep the implementation simple and maintainable.

## 8. Company Profile

Create a dedicated company profile page or section.

Include:
- Company introduction.
- The company's service focus.
- Its commitment to convenient and reliable transportation.
- The types of vehicles offered.
- The two rental methods.
- Company contact information.

Use a professional layout with a combination of text, relevant automotive imagery, and visual highlights.

Do not fabricate the company's founding year, legal status, fleet size, office history, or other unprovided business facts. Use editable placeholders for information that needs to be supplied by the owner.

## 9. Terms and Conditions

Create a dedicated "Syarat & Ketentuan" page or section with readable Indonesian content.

Organize the content into clearly labeled groups, such as:
- Ketentuan umum.
- Persyaratan sewa lepas kunci.
- Ketentuan sewa dengan driver.
- Durasi dan perpanjangan sewa.
- Pembayaran dan biaya tambahan.
- Pembatalan dan perubahan jadwal.
- Tanggung jawab penyewa.
- Penggunaan dan pengembalian kendaraan.
- Ketentuan lain yang berlaku.

Important:
- Write reasonable draft content, but do not present unverified business policies as confirmed company rules.
- Mark policies that require owner approval as configurable or pending confirmation.
- Do not invent specific deposits, fines, identification requirements, cancellation fees, or payment deadlines as established facts.
- Make the content easy to edit later.
- Include a note that the final terms must be reviewed and approved by the business owner before publication.

## 10. Company Location and Contact

Create a dedicated location and contact page or section.

Include:
- Company address.
- Embedded Google Maps location or a Google Maps link.
- WhatsApp contact button.
- Telephone number, if configured.
- Social media links, if provided.
- Business operating hours, if configured.

Use editable configuration values for the address, coordinates, map URL, WhatsApp number, phone number, and social media URLs.

Do not invent an actual company address, map coordinates, telephone number, or social media account.

If the actual location is not yet provided, display a clear placeholder and make the map integration easy to configure later.

For Google Maps, prefer a simple embed or an external directions link. Do not add unnecessary map dependencies.

## 11. Fixed WhatsApp Floating Button

This is a required global feature.

Create a floating WhatsApp button that:
- Stays fixed in the bottom-right corner of the viewport.
- Remains visible while scrolling.
- Uses the official WhatsApp green color and a recognizable WhatsApp icon.
- Has a circular design with a subtle shadow.
- Includes an accessible label, such as "Hubungi Kadar Rent Car via WhatsApp".
- Opens WhatsApp with a prefilled greeting message.
- Works on mobile and desktop.
- Has a sufficiently large touch target.
- Does not cover important buttons, content, or mobile navigation.
- Accounts for mobile safe-area spacing where appropriate.

Use a configurable phone number in international format without the `+`, spaces, or punctuation when constructing the WhatsApp URL.

Use the official `https://wa.me/` URL format and URL-encode prefilled message text.

Example message:

"Halo Kadar Rent Car, saya ingin bertanya tentang layanan rental mobil."

Place the floating button in a reusable global component so it appears across all relevant pages.

## 12. Technical Requirements

Use the existing project stack and follow its current configuration.

- Next.js 16.4.2.
- App Router.
- TypeScript, if already enabled.
- Tailwind CSS, if already installed and configured.
- React components with clear separation of responsibilities.
- Next.js `Image` for local or remote images where appropriate.
- Semantic HTML.
- Accessible buttons, links, forms, and navigation.
- Proper responsive behavior.
- Consistent reusable components.
- No unnecessary dependencies.

Before installing any package, check whether it is already available in the project.

If an icon library is already installed, reuse it. Otherwise, choose a lightweight, compatible solution or use simple inline SVG icons when appropriate.

Avoid adding a backend or database for this initial version. Keep vehicle data in a centralized TypeScript data file so the owner can update the catalog easily.

For external vehicle images, configure the Next.js image settings correctly if needed. Prefer stable image sources or local assets that can be replaced with real fleet photographs.

Do not rely on broken image URLs. Include a reasonable fallback or placeholder strategy.

## 13. Suggested Project Organization

Adapt this structure to the existing project instead of blindly replacing its files.

- `app/`
  - `page.tsx` — Home page.
  - `katalog/page.tsx` — Vehicle catalog.
  - `profil/page.tsx` — Company profile.
  - `syarat-ketentuan/page.tsx` — Terms and conditions.
  - `kontak/page.tsx` — Location and contact.
  - `layout.tsx` — Shared layout.
  - `globals.css` — Global styles.
- `components/`
  - `Navbar.tsx`
  - `Footer.tsx`
  - `HeroSection.tsx`
  - `CarCard.tsx`
  - `CarFilters.tsx`
  - `WhatsAppButton.tsx`
  - `SectionHeading.tsx`
- `data/`
  - `cars.ts` — Centralized vehicle catalog data.
- `lib/`
  - `config.ts` — Company details, contact settings, and social media URLs.
- `public/images/cars/` — Local vehicle images, if available.

If the existing project uses a `src/` directory, keep the application structure consistent with it.

Do not create duplicate components or unnecessary abstractions.

## 14. Responsive Design Requirements

Build and test the interface for:
- Mobile phones: approximately 320–430 px.
- Tablets: approximately 768–1024 px.
- Laptops and desktop screens: 1280 px and wider.

Ensure:
- No horizontal overflow.
- Text remains readable.
- Buttons are easy to tap.
- Images maintain appropriate aspect ratios.
- Cards resize naturally.
- Navigation works on small screens.
- Filters remain usable on mobile.
- The footer and contact sections stack appropriately.
- The floating WhatsApp button remains visible without obstructing content.

Use responsive Tailwind utilities where Tailwind is available.

## 15. SEO and Accessibility

Implement:
- Appropriate page titles and descriptions.
- Indonesian language metadata.
- A logical heading hierarchy.
- Descriptive image alt text.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Meaningful link labels.
- Consistent page metadata.

Use Indonesian as the primary website language.

## 16. Implementation Workflow

Follow these steps in order:

1. Inspect the existing project structure, `package.json`, installed dependencies, and current styling setup.
2. Identify which files can be reused and which need to be created or updated.
3. Establish the design system, color palette, typography, spacing, and responsive layout.
4. Create the shared layout, navigation, footer, and floating WhatsApp button.
5. Implement the home page.
6. Implement the centralized vehicle data and catalog filtering.
7. Implement the vehicle detail experience.
8. Implement the company profile, terms and conditions, and contact/location pages.
9. Add responsive behavior, accessibility, and SEO metadata.
10. Run the available linting, type-checking, and build commands.
11. Fix errors introduced by the implementation.
12. Provide a concise summary of the files changed, implemented features, and remaining configuration tasks.

Do not stop after generating the initial homepage. Complete all the required pages and core interactions.

## 17. Acceptance Criteria

The implementation is complete only when:

- The existing Next.js project remains intact.
- The website has a consistent blue professional theme.
- All five navigation destinations work.
- The catalog displays vehicle cards from centralized data.
- Search and filters work.
- The two rental methods are clearly presented.
- Vehicle inquiries can be initiated through WhatsApp.
- The floating WhatsApp button stays fixed at the bottom-right.
- Company profile, terms and conditions, and contact/location content exist.
- Unknown company information is represented by editable placeholders rather than fabricated facts.
- The website works on mobile, tablet, and desktop.
- There are no obvious broken links, broken images, or layout overflows.
- The available lint, type-check, and build checks pass, or any pre-existing failures are clearly identified.

**Start by inspecting the existing project, then implement the complete website directly in the current codebase. Prioritize working functionality, visual consistency, maintainable code, and responsive design.**