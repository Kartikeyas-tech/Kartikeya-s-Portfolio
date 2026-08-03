import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API ROUTES

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "CyberSecurity Portfolio Backend Proxy",
    timestamp: new Date().toISOString()
  });
});

// VirusTotal File or Hash Inspection Endpoint
app.get("/api/virustotal/files/:hash", async (req, res) => {
  try {
    const { hash } = req.params;
    const clientApiKey = (req.headers["x-apikey"] as string) || (req.query.apikey as string);
    const apiKey = clientApiKey || process.env.VIRUSTOTAL_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: "NO_API_KEY",
        message: "VirusTotal API key is required. Please provide your API key in the configuration panel or set VIRUSTOTAL_API_KEY in environment variables."
      });
    }

    const vtResponse = await fetch(`https://www.virustotal.com/api/v3/files/${encodeURIComponent(hash)}`, {
      method: "GET",
      headers: {
        "x-apikey": apiKey.trim()
      }
    });

    const data = await vtResponse.json();
    return res.status(vtResponse.status).json(data);
  } catch (error: any) {
    console.error("Error in VirusTotal File proxy endpoint:", error);
    return res.status(500).json({
      error: "PROXY_ERROR",
      message: error.message || "Failed to communicate with VirusTotal server."
    });
  }
});

// VirusTotal URL Inspection Endpoint
app.get("/api/virustotal/urls", async (req, res) => {
  try {
    const urlQuery = req.query.url as string;
    if (!urlQuery) {
      return res.status(400).json({
        error: "MISSING_PARAM",
        message: "URL query parameter is required."
      });
    }

    const clientApiKey = (req.headers["x-apikey"] as string) || (req.query.apikey as string);
    const apiKey = clientApiKey || process.env.VIRUSTOTAL_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: "NO_API_KEY",
        message: "VirusTotal API key is required. Please provide your API key in the configuration panel or set VIRUSTOTAL_API_KEY in environment variables."
      });
    }

    // Generate base64 URL identifier without padding
    const urlId = Buffer.from(urlQuery)
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

    const vtResponse = await fetch(`https://www.virustotal.com/api/v3/urls/${urlId}`, {
      method: "GET",
      headers: {
        "x-apikey": apiKey.trim()
      }
    });

    const data = await vtResponse.json();
    return res.status(vtResponse.status).json(data);
  } catch (error: any) {
    console.error("Error in VirusTotal URL proxy endpoint:", error);
    return res.status(500).json({
      error: "PROXY_ERROR",
      message: error.message || "Failed to communicate with VirusTotal server."
    });
  }
});

// START EXPRESS SERVER WITH VITE
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[+] Portfolio Backend Proxy running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
