import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Blog Posts
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  language: text("language").notNull(), // 'en', 'ar', etc.
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull(),
  readTime: text("read_time").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  imageUrl: text("image_url"),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// Magazine Articles
export const magazineArticles = pgTable("magazine_articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleAr: text("title_ar").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  excerptAr: text("excerpt_ar").notNull(),
  content: text("content").notNull(),
  contentAr: text("content_ar").notNull(),
  author: text("author").notNull(),
  authorAr: text("author_ar").notNull(),
  readTime: text("read_time").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  imageUrl: text("image_url"),
});

export const insertMagazineArticleSchema = createInsertSchema(magazineArticles).omit({
  id: true,
});

export type InsertMagazineArticle = z.infer<typeof insertMagazineArticleSchema>;
export type MagazineArticle = typeof magazineArticles.$inferSelect;

// Business Reviews
export const businessReviews = pgTable("business_reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  companyNameAr: text("company_name_ar").notNull(),
  clientName: text("client_name").notNull(),
  clientNameAr: text("client_name_ar").notNull(),
  position: text("position").notNull(),
  positionAr: text("position_ar").notNull(),
  testimonial: text("testimonial").notNull(),
  testimonialAr: text("testimonial_ar").notNull(),
  rating: text("rating").notNull(),
  companyLogo: text("company_logo"),
  clientPhoto: text("client_photo"),
  publishedAt: timestamp("published_at").notNull(),
});

export const insertBusinessReviewSchema = createInsertSchema(businessReviews).omit({
  id: true,
});

export type InsertBusinessReview = z.infer<typeof insertBusinessReviewSchema>;
export type BusinessReview = typeof businessReviews.$inferSelect;

// Contact Inquiries
export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

// Countries data type
export type Country = {
  name: string;
  nameAr: string;
  code: string;
  region: string;
  regionAr: string;
};
