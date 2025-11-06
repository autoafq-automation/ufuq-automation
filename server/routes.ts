import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertMagazineArticleSchema, insertBusinessReviewSchema, insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog Posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      console.log('Received blog post data:', JSON.stringify(req.body, null, 2));
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error('Blog post validation error:', error);
      res.status(400).json({ 
        error: "Invalid blog post data",
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Magazine Articles
  app.get("/api/magazine", async (req, res) => {
    try {
      const articles = await storage.getAllMagazineArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch magazine articles" });
    }
  });

  app.get("/api/magazine/:slug", async (req, res) => {
    try {
      const article = await storage.getMagazineArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ error: "Magazine article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch magazine article" });
    }
  });

  app.post("/api/magazine", async (req, res) => {
    try {
      const validatedData = insertMagazineArticleSchema.parse(req.body);
      const article = await storage.createMagazineArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      res.status(400).json({ error: "Invalid magazine article data" });
    }
  });

  // Business Reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getAllBusinessReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch business reviews" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertBusinessReviewSchema.parse(req.body);
      const review = await storage.createBusinessReview(validatedData);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: "Invalid business review data" });
    }
  });

  // Contact Inquiries
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send data to n8n webhook for automation
      const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
      if (n8nWebhookUrl) {
        try {
          const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...validatedData,
              submittedAt: new Date().toISOString(),
              inquiryId: inquiry.id,
            }),
          });
          
          if (!response.ok) {
            console.error('Failed to send data to n8n webhook:', response.statusText);
          } else {
            console.log('Successfully sent contact inquiry to n8n workflow');
          }
        } catch (webhookError) {
          console.error('Error sending to n8n webhook:', webhookError);
          // Don't fail the request if webhook fails
        }
      }
      
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact inquiry data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
