# ShareKori (Stage 1: homepage and reusable components)

Next.js (App Router) + Tailwind CSS 3. Bengali/English toggle. All listings are **demo data** in `lib/demo-data.ts`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # type-check
```

## Structure
- `lib/i18n.ts` all UI text, English and Bengali (typed, so a missing key fails the type-check)
- `lib/app-context.tsx` language, search filters, toast
- `lib/demo-data.ts` sample items and areas (replace in Stage 4)
- `components/` Header, SearchBar, Hero, Categories, ItemCard, Listings, HowItWorks, Impact, Footer

## Privacy rules built into the design
- Items store only a neighbourhood (`area`), never a street address.
- No phone number field exists on listings. Requests go through in-app messages.

## Later stages
1. **Search.** Move filters into URL params (`/?q=drill&area=mirpur`) so results are shareable and server-rendered. Use Postgres full-text search plus `pg_trgm` for typo tolerance. Index both Bengali and English titles. Add pagination.
2. **Accounts.** Auth.js with email or phone OTP (OTP via a Bangladeshi SMS gateway). Store phone numbers hashed or encrypted, only for login and abuse prevention, and never return them from any public API. Public profile = display name + neighbourhood.
3. **Listing creation.** Form with Server Actions and zod validation. Photo upload to S3-compatible storage or Cloudinary, resized on upload, EXIF/GPS metadata stripped. Pick area from a fixed list, not free text. Rate-limit posts per account.
4. **Database.** Postgres with Prisma. Core tables: `User`, `Listing` (type, condition, category, areaId, status), `ListingPhoto`, `Area`, `Request`, `Message`, `Report`. Replace `ITEMS` with queries; keep the `Item` type as the contract.
5. **Moderation.** "Report" button on every card and message. Admin queue with approve/hide/ban. New accounts' first listings held for review. Automatic checks that reject listings containing phone-number or address patterns. Prohibited-items list. Audit log of moderator actions.
6. **Before launch.** Real privacy policy and terms (legal review), contact details, accessibility audit with screen reader, test Bengali text on low-end Android devices.
