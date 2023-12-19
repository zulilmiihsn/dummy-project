import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  const urlToCapture = Array.isArray(url) ? url[0] : url;

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 549, height: 978 });
    await page.goto(urlToCapture);

    // Wait for the element to be available [hashtag(#) is refer to element ID, dot(.) is refer to element's class]
    try {
      await page.waitForSelector("#items", { timeout: 5000 }); // Adjust the timeout as needed
    } catch (error) {
      // Handle the timeout, you can log a message or take other actions if needed
      console.error("Timeout waiting for selector #items");
    }

    const screenshotBuffer = await page.screenshot({ type: "png" });

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
