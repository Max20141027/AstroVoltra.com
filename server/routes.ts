import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString()
      });
      
      // Since we don't have email server configured yet,
      // return an error to trigger the frontend email client fallback
      // This ensures the user can actually send the email
      console.log("Triggering email client fallback for actual email sending...");
      
      return res.status(500).json({ 
        success: false, 
        error: "Email server not configured - triggering email client fallback" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to process contact form" 
      });
    }
  });

  // Career application submission
  app.post("/api/careers", async (req, res) => {
    try {
      const { name, email, phone, position, experience, coverLetter } = req.body;
      
      // Log the career application
      console.log("Career application submission:", {
        name,
        email,
        phone,
        position,
        experience,
        coverLetter: coverLetter?.substring(0, 100) + "...", // Truncate for logging
        timestamp: new Date().toISOString()
      });
      
      // Since we don't have email server configured yet,
      // return an error to trigger the frontend email client fallback
      // This ensures the user can actually send the application
      console.log("Triggering email client fallback for actual email sending...");
      
      return res.status(500).json({ 
        success: false, 
        error: "Email server not configured - triggering email client fallback" 
      });
    } catch (error) {
      console.error("Career application error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to process career application" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
