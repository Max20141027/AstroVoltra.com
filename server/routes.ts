import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from 'resend';
import OpenAI from 'openai';

const resend = new Resend(process.env.RESEND_API_KEY);
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
      
      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: `Contact Form <onboarding@resend.dev>`,
        to: ['gtech.service@outlook.com'],
        replyTo: email,
        subject: `Contact Form Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr>
          <p><small>Sent from G-Tech website contact form</small></p>
        `
      });

      if (error) {
        console.error('Resend email error:', error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to send email" 
        });
      }

      console.log('Email sent successfully:', data);
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
      
      // Send application email using Resend
      const { data, error } = await resend.emails.send({
        from: `G-Tech Careers <onboarding@resend.dev>`,
        to: ['gtech.service@outlook.com'],
        replyTo: email,
        subject: `Job Application - ${position} from ${name}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Experience Level:</strong> ${experience}</p>
          
          <h3>Cover Letter:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 3px solid #007bff; white-space: pre-wrap;">
            ${coverLetter}
          </div>
          
          <hr>
          <p><small>Sent from G-Tech website careers page</small></p>
        `
      });

      if (error) {
        console.error('Resend email error:', error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to send application" 
        });
      }

      console.log('Application email sent successfully:', data);
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

  // Chat API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message?.trim()) {
        return res.status(400).json({ 
          success: false, 
          error: "Message is required" 
        });
      }

      console.log("Chat message received:", message);

      // Create system prompt with G-Tech information
      const systemPrompt = `You are G AI, a helpful assistant for G-Tech, a software engineering company based in Victoria, Vancouver Island. Your role is to help visitors learn about G-Tech and our AI products.

G-Tech Information:
- Location: Victoria, Vancouver Island, British Columbia, Canada
- Focus: AI-powered software solutions
- Contact: gtech.service@outlook.com

Our AI Products:
1. **Medi-sense**: Advanced medical diagnostics AI that helps healthcare professionals make accurate diagnoses faster
2. **QMS AI**: Educational management system that streamlines school administration and enhances learning outcomes
3. **LearnBot**: Interactive AI tutor that provides personalized learning experiences for students

Be friendly, knowledgeable, and helpful. Keep responses concise but informative. If asked about topics outside G-Tech, politely redirect the conversation back to our company and products.`;

      const response = await openai.chat.completions.create({
        model: "gpt-5",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      const assistantResponse = response.choices[0].message.content;

      console.log("OpenAI response:", assistantResponse);

      return res.json({ 
        success: true, 
        response: assistantResponse 
      });
    } catch (error) {
      console.error("Chat API error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to process chat message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
