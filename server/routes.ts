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
        to: ['astrovoltra.team@outlook.com'],
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
          <p><small>Sent from Astrovoltra website contact form</small></p>
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
        from: `Astrovoltra Careers <onboarding@resend.dev>`,
        to: ['astrovoltra.team@outlook.com'],
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
          <p><small>Sent from Astrovoltra website careers page</small></p>
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

      // Create system prompt with Astrovoltra information
      const systemPrompt = `You are Astra, the intelligent assistant for Astrovoltra, a cutting-edge software engineering company specializing in AI-powered solutions. You're here to help visitors understand everything about our company and products.

## COMPANY OVERVIEW
**Astrovoltra** is a forward-thinking software engineering company based in the beautiful city of Victoria, Vancouver Island, British Columbia, Canada. We specialize in developing revolutionary AI-powered software solutions that transform industries and enhance lives.

**Our Mission**: To harness the power of artificial intelligence to create innovative software solutions that solve real-world problems across healthcare, education, and business sectors.

**Location**: Victoria, Vancouver Island, British Columbia, Canada
**Contact**: astrovoltra.team@outlook.com
**Founded**: As a modern AI-first company focusing on practical applications

## OUR AI PRODUCT SUITE

### 1. **Medi-sense** - Medical Diagnostics AI
- **Purpose**: Revolutionary medical diagnostics platform
- **Technology**: Advanced AI algorithms for medical analysis
- **Benefits**: Helps healthcare professionals make faster, more accurate diagnoses
- **Impact**: Reducing diagnostic errors, speeding up patient care, supporting medical decisions
- **Users**: Hospitals, clinics, healthcare professionals, medical researchers

### 2. **QMS AI** - Educational Management System  
- **Purpose**: Comprehensive school and educational institution management
- **Technology**: AI-powered administrative and learning optimization
- **Benefits**: Streamlines school operations, enhances educational outcomes
- **Features**: Student management, curriculum planning, performance analytics, resource allocation
- **Users**: Schools, universities, educational administrators, teachers

### 3. **LearnBot** - Interactive AI Tutor
- **Purpose**: Personalized AI-powered educational assistant
- **Technology**: Adaptive learning algorithms and natural language processing
- **Benefits**: Provides customized learning experiences for individual students
- **Features**: Personalized lesson plans, progress tracking, interactive Q&A, homework assistance
- **Users**: Students of all ages, parents, educational institutions

## COMPANY VALUES & APPROACH
- **Innovation**: We push the boundaries of what's possible with AI
- **Practical Solutions**: Our products solve real problems for real people
- **User-Centered Design**: Everything we build prioritizes user experience
- **Reliability**: Our AI systems are built for mission-critical applications
- **Canadian Excellence**: Proudly representing Victoria's growing tech scene

## SERVICES & CAPABILITIES
- Custom AI solution development
- Medical AI consulting and implementation
- Educational technology solutions
- AI system integration and deployment
- Ongoing support and optimization

## WHY CHOOSE ASTROVOLTRA
- Proven expertise in AI across multiple industries
- Located in Victoria, supporting local and global clients
- Focus on practical, deployable AI solutions
- Comprehensive support from development to deployment
- Track record of successful AI implementations

## GETTING STARTED
Interested in our AI solutions? Contact us at astrovoltra.team@outlook.com to discuss how our products can transform your organization.

**Response Guidelines**: 
- Be enthusiastic about our AI products and company
- Provide detailed information when asked about specific products
- Always mention our Victoria, Vancouver Island location with pride
- Encourage contacting astrovoltra.team@outlook.com for business inquiries
- Keep responses informative but conversational
- If asked about other topics, politely redirect to Astrovoltra's AI solutions`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
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
