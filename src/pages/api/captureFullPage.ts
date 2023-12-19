//ini halaman sementara untuk kode capture full view page

import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  const urlToCapture = Array.isArray(url) ? url[0] : url;

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true, // Change to true for production
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 }); // Adjust as needed

    // Navigate to the page
    await page.goto(urlToCapture, { waitUntil: "domcontentloaded" });

    // Wait for lazy-loaded content or any other asynchronous tasks
    await page.waitForTimeout(3000); // Adjust as needed

    // Capture a full-page screenshot
    const screenshotBuffer = await page.screenshot({ type: "png", fullPage: true });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", `attachment; filename=screenshot.png`);

    res.status(200).send(screenshotBuffer);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
