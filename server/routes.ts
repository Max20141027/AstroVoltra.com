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
      
      // In a real application, you would:
      // 1. Validate the data
      // 2. Send email to gtech.service@outlook.com
      // 3. Save to database
      // 4. Send confirmation email to user
      
      return res.json({ 
        success: true, 
        message: "Contact form received. We'll get back to you soon!" 
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
      
      // In a real application, you would:
      // 1. Validate the data
      // 2. Send email to gtech.service@outlook.com with application details
      // 3. Save to database
      // 4. Send confirmation email to applicant
      
      return res.json({ 
        success: true, 
        message: "Application received. We'll review it and get back to you soon!" 
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
