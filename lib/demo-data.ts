// DEMO DATA ONLY. Every listing below is invented sample content. Replace with database queries (Stage 4).
export type Bi = { en: string; bn: string };
export type Category = "books" | "tools" | "furniture" | "clothing" | "study" | "household";
export type ShareType = "free" | "borrow" | "exchange" | "sale";
export type Condition = "new" | "likeNew" | "good" | "fair";
export interface Item {
  id: string; title: Bi; area: string; category: Category; condition: Condition; type: ShareType;
  priceBdt?: number; // only for type "sale"
  photo?: string;    // URL of a real photo; when absent a labelled placeholder is shown
}
// Public location is always a neighbourhood, never a street address.
export const AREAS: Record<string, Bi> = {
  mirpur: { en: "Mirpur, Dhaka", bn: "মিরপুর, ঢাকা" },
  dhanmondi: { en: "Dhanmondi, Dhaka", bn: "ধানমন্ডি, ঢাকা" },
  zindabazar: { en: "Zindabazar, Sylhet", bn: "জিন্দাবাজার, সিলেট" },
  ambarkhana: { en: "Ambarkhana, Sylhet", bn: "আম্বরখানা, সিলেট" },
  agrabad: { en: "Agrabad, Chattogram", bn: "আগ্রাবাদ, চট্টগ্রাম" },
  sonadanga: { en: "Sonadanga, Khulna", bn: "সোনাডাঙ্গা, খুলনা" },
};
export const ITEMS: Item[] = [
  { id: "d1", title: { en: "Class 9–10 science textbooks (set)", bn: "নবম-দশম শ্রেণির বিজ্ঞান বই (সেট)" }, area: "mirpur", category: "books", condition: "good", type: "free" },
  { id: "d2", title: { en: "Wooden study chair", bn: "কাঠের পড়ার চেয়ার" }, area: "zindabazar", category: "furniture", condition: "fair", type: "free" },
  { id: "d3", title: { en: "Kids' winter jackets (age 6–8)", bn: "শিশুদের শীতের জ্যাকেট (৬–৮ বছর)" }, area: "dhanmondi", category: "clothing", condition: "likeNew", type: "free" },
  { id: "d4", title: { en: "Steel kitchen pot set", bn: "স্টিলের রান্নার হাঁড়ি-পাতিল সেট" }, area: "agrabad", category: "household", condition: "good", type: "free" },
  { id: "d5", title: { en: "Electric drill", bn: "ইলেকট্রিক ড্রিল মেশিন" }, area: "ambarkhana", category: "tools", condition: "good", type: "borrow" },
  { id: "d6", title: { en: "Folding ladder", bn: "ভাঁজ করা মই" }, area: "sonadanga", category: "tools", condition: "good", type: "borrow" },
  { id: "d7", title: { en: "Large pressure cooker", bn: "বড় প্রেসার কুকার" }, area: "mirpur", category: "household", condition: "good", type: "borrow" },
  { id: "d8", title: { en: "Geometry box and drawing board", bn: "জ্যামিতি বক্স ও ড্রয়িং বোর্ড" }, area: "dhanmondi", category: "study", condition: "good", type: "borrow" },
  { id: "d9", title: { en: "Study table", bn: "পড়ার টেবিল" }, area: "agrabad", category: "furniture", condition: "good", type: "sale", priceBdt: 2500 },
  { id: "d10", title: { en: "English novels (bundle of 10)", bn: "ইংরেজি উপন্যাস (১০টি)" }, area: "zindabazar", category: "books", condition: "good", type: "exchange" },
  { id: "d11", title: { en: "Scientific calculator", bn: "সায়েন্টিফিক ক্যালকুলেটর" }, area: "sonadanga", category: "study", condition: "likeNew", type: "sale", priceBdt: 600 },
  { id: "d12", title: { en: "Panjabi, size M", bn: "পাঞ্জাবি (M সাইজ)" }, area: "ambarkhana", category: "clothing", condition: "likeNew", type: "exchange" },
];
